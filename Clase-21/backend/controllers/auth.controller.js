import ENVIROMENT from "../src/config/enviroment.js"
import ResponseBuilder from "../src/helpers/builders/responseBuilder.js"
import trasporterEmail from "../src/helpers/emailTransporter.helpers.js"
import { verifyEmail, verifyMinLength, verifyString } from "../src/helpers/validations.helpers.js"
import User from "../src/models/user.model.js"
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'


export const registerController = async (req, res) => {
    try {
        const { name, password, email } = req.body
        const registerConfig = {
            name: {
                value: name,
                errors: [],
                validation: [
                    verifyString,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 5)
                ]
            },
            password: {
                value: password,
                errors: [],
                validation: [
                    verifyString,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            },
            email: {
                value: email,
                errors: [],
                validation: [
                    verifyEmail,
                    (field_name, field_value) => verifyMinLength(field_name, field_value, 10)
                ]
            }
        }
        let hayErrores = false
        for (let field_name in registerConfig) {
            for (let validation of registerConfig[field_name].validation) {
                let result = validation(field_name, registerConfig[field_name].value)
                if (result) {
                    hayErrores = true
                    registerConfig[field_name].errors.push(result)
                }
            }
        }
        console.log(hayErrores)
        if (hayErrores) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setCode('VALIDATION_ERROR')
                .setData(
                    {
                        registerState: registerConfig
                    }
                )
                .build()
            return res.json(response)
        }

        const hashedPassword = await bcrypt.hash(registerConfig.password.value, 10)

        const validationToken = jwt.sign(
            {
                email: registerConfig.email.value
            },
            ENVIROMENT.SECRET_KEY,
            {
                expiresIn: '1d'
            }
        )

        const redirectUrl = `http://localhost:3000/api/auth/verify-email/` + validationToken

        const result = await trasporterEmail.sendMail({
            subject: 'Valida tu email',
            to: registerConfig.email.value,
            html: `
                <h1>Mi primer email de verificacion</h1>
                <p>Para validar tu email da click <a href='${redirectUrl}'>aqui</a></p>
            `
        })



        console.log({ result })


        const userCreated = new User({
            name: registerConfig.name.value,
            email: registerConfig.email.value,
            password: hashedPassword,
            verficationToken: ''
        })
        await userCreated.save() //Esto lo guardara en mongoDB




        const response = new ResponseBuilder()
            .setCode('SUCCESS')
            .setOk(true)
            .setStatus(200)
            .setData(
                { registerResult: registerConfig }
            )
            .build()
        return res.json(response)
    }
    catch (error) {
        if (error.code === 11000) {
            const response = new ResponseBuilder()
                .setOk(false)
                .setCode(400)
                .setMessage('Email no se pudo registrar')
                .setData({
                    detail: 'El email ya esta registrado'
                })
                .build()
            res.json(response)
        }

    }
}
export const verifyEmailController = async (req, res) => {
    try {
        const { validation_token } = req.params

        const payload = jwt.verify(validation_token, ENVIROMENT.SECRET_KEY)
        const email_to_verify = payload.email
        const user_to_verify = await User.findOne({ email: email_to_verify })
        user_to_verify.emailVerified = true
        await user_to_verify.save()
        res.sendStatus(200)
        //res.redirect('URL_FRONT)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body // Este body es el que llega desde el front
        const user = await User.findOne({ email }) // Busca en la DB si existe un usuario con ese email
        if (!user) { //Este if verifica si el usuario no existe
            const response = new ResponseBuilder()
                .setCode(400)
                .setOk(false)
                .setMessage('Email not found')
                .build()
            return res.json(response)
        }
        const passwordIsValid = await bcrypt.compare(password, user.password) // Compara la password recibida con la password hasheada del usuario
        if (!passwordIsValid) {
            const response = new ResponseBuilder()
                .setCode(401)
                .setOk(false)
                .setMessage('Password is not valid')
                .build()
            return res.json(response)
        }
        if (!user.emailVerified) { //Verifica si el email del usuario es verificado
            const response = new ResponseBuilder()
                .setCode(403)
                .setOk(false)
                .setMessage('Email no verificado')
                .build()
            return res.json(response)
        }
        const token = jwt.sign( //Genera un token de acceso
            {
                user_id: user._id,
                name: user.name,
                email: user.email
            },
            ENVIROMENT.SECRET_KEY,
            {
                expiresIn: '1d'//Esto determina cuanto dura la sesion del usuario
            }
        )
        const response = new ResponseBuilder() //Responder exitosamente con el token de acceso
            .setCode('Exitosamente autenticado')
            .setOk(true)
            .setStatus(200)
            .setData(
                { token: token }
            )
            .build() //Con esto se envia el token al front
        return res.json(response)
    }
    catch (error) { //En caso de error
        console.error(error)
        res.sendStatus(500)
        const response = new ResponseBuilder() //Responder con un error
            .setCode(400)
            .setOk(false)
            .setMessage('Algo salió mal')
            .build()
        return res.json(response)

    }

}


export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email)
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
// Generar un token de restablecimiento con JWT
        const reset_token = jwt.sign({ email: user.email }, 
            ENVIROMENT.SECRET_KEY,
            { expiresIn: '1h' });
        const resetUrl = `${ENVIROMENT.FRONTEND_URL}/forgot-password/${reset_token}`;
// Enviar el correo de restablecimiento y su URL de restablecimiento
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: ENVIROMENT.EMAIL_USER,
                pass: ENVIROMENT.EMAIL_PASSWORD
            }
        });
// Configurar el correo de restablecimiento con sus detalles
        const mailOptions = {
            from: ENVIROMENT.EMAIL_USER,
            to: user.email,
            subject: 'Recuperar Contraseña',
            text: `Has solicitado un restablecimiento de contraseña. Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetUrl}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo de recuperación de contraseña enviado' });
    } 
    catch (error) {
        console.error('Error al solicitar el restablecimiento de contraseña:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};



export const recoveryPasswordController = async (req, res) => {
    try {
        const { reset_token, password } = req.params; // Extrae el token y la nueva contraseña del parametros de la URL
        console.log(reset_token, password)

        const decoded = jwt.verify(reset_token, ENVIROMENT.SECRET_KEY); // Verifica token JWT

        const user = await User.findOne({ email: decoded.email }); // Busca al usuario por email en la base de datos
        if (!user) { // Si no se encuentra el usuario
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Hasheo la contra antes de guardar
        const salt = await bcrypt.genSalt(10); // Genera una sal
        const hashedPassword = await bcrypt.hash(password, salt); // Hashea la contraseña con sal generada

        user.password = hashedPassword; // Asigna la contra hasheada al usuario
        await user.save(); // Guarda los cambios en la base de datos

        // URL del front-end para redirigir después del restablecimiento de contraseña
        const resetUrl = `${ENVIROMENT.FRONTEND_URL}/login`;

        res.status(200).json({ message: 'Contraseña restablecida correctamente', redirectUrl: resetUrl }); // Envio9 resp exitosa con la URL
    } 
    catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        res.status(500).json({ message: 'Error interno del servidor' }); // Manejo de errores (MEJORAR)ej: Faltan parametros mayus,num,etc
    }
};
