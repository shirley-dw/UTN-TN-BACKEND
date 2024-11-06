import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; 

const ForgotPasswordScreen = () => {
    const [formState, setFormState] = useState({
        email: ''
    });

    const [errorsState, setErrorsState] = useState({
        email: '',
        general: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const responseHTTP = await fetch('http://localhost:3000/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: formState.email })
            });

            const data = await responseHTTP.json();

            if (!responseHTTP.ok) {
                if (data.errors) {
                    setErrorsState((prevState) => ({
                        ...prevState,
                        email: data.errors.email || '',
                        general: data.message || 'Error desconocido al solicitar el restablecimiento de contraseña'
                    }));
                } else {
                    setErrorsState((prevState) => ({
                        ...prevState,
                        general: data.message || 'Error desconocido al solicitar el restablecimiento de contraseña'
                    }));
                }
            } else {
                console.log('Solicitud de restablecimiento de contraseña enviada');
               
            }
        } catch (error) {
            console.error('Error al solicitar el restablecimiento de contraseña:', error);
            setErrorsState((prevState) => ({
                ...prevState,
                general: 'Error de conexión. Inténtalo de nuevo más tarde.'
            }));
        }
    };

    return (
        <div className='forgot-password-container'>
            <form onSubmit={handleForgotPassword} className='forgot-password-form'>
            <h1 className='forgot-password-title'>Restablecer contraseña</h1>
            <p>Al restablecer tu contraseña se enviará un correo electrónico con las instrucciones.</p>
                <div className='form-group'>
                    <label>Ingresa tu email:</label>
                    <input
                        name='email'
                        id='email'
                        placeholder='tuemail@gmailcom'
                        type='email'
                        onChange={handleChange}
                        value={formState.email}
                    />
                    {errorsState.email && <span>{errorsState.email}</span>}
                </div>
                <button type='submit'>Restablecer</button>
                {errorsState.general && <div className="error">{errorsState.general}</div>}
                <Link to='/login'>Iniciar sesión</Link>
            </form>
        </div>
    );
};

export default ForgotPasswordScreen;
