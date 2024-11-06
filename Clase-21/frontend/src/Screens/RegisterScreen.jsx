import React, { useState } from 'react';
import useForm from '../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import './RegisterScreen.css'; 

const RegisterScreen = () => {
    const navigate = useNavigate();

    // Estado del formulario
    const { formState, handleChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    // Estado de los errores
    const [errorsState, setErrorsState ] = useState({
        name: '',
        email: '',
        password: '',
        general: ''
    });

    // Manejo de eventos del formulario para el registro
    const handleRegister = async (event) => {
        event.preventDefault();


        try {
            const responseHTTP = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            const data = await responseHTTP.json();

            if (!responseHTTP.ok) {
                // Manejo de errores específicos de campos
                if (data.errors) {
                    setErrorsState((prevState) => ({
                        ...prevState,
                        ...data.errors
                    }));
                } else {
                    // Error general si no hay errores específicos
                    setErrorsState((prevState) => ({
                        ...prevState,
                        general: data.message || 'Error desconocido al registrar'
                    }));
                }
            } else {
                // Si el registro es exitoso, redireccionar a la página de login
                navigate('/login');
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            setErrorsState((prevState) => ({
                ...prevState,
                general: 'Error de conexión. Inténtalo de nuevo más tarde.'
            }));
        }
    };

    return (
        <div className='register-container'>
            <form onSubmit={handleRegister} className='register-form'>
            <h1 className='register-title'>Registrate en Pepelandia</h1>
                <div className='form-group'>
                    <label>Ingresa tu nombre:</label>
                    <input 
                        name='name'
                        id='name'
                        placeholder='Nombre completo'
                        type='text'
                        onChange={handleChange}
                        value={formState.name}
                    />
                    {errorsState.name && <span>{errorsState.name}</span>}
                </div>
                <div className='form-group'>
                    <label>Ingresa tu email:</label>
                    <input
                        name='email'
                        id='email'
                        placeholder='tuemail@gmail.com'
                        type='email'
                        onChange={handleChange}
                        value={formState.email}
                    />
                    {errorsState.email && <span>{errorsState.email}</span>}
                </div>
                <div className='form-group'>
                    <label>Ingresa tu contraseña:</label>
                    <input
                        name='password'
                        id='password'
                        placeholder='*********'
                        type='password'
                        onChange={handleChange}
                        value={formState.password}
                    />
                    {errorsState.password && <span>{errorsState.password}</span>}
                </div>
                <button type='submit'>Registrar</button>
                {errorsState.general && <div className="error">{errorsState.general}</div>}
            </form>
        </div>
    );
};

export default RegisterScreen;
