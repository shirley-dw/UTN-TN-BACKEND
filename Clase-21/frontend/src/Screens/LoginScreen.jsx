import React, { useState } from 'react';
import useForm from '../Hooks/useForm';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = () => {
    const { formState, handleChange } = useForm({
        email: '',
        password: ''
    });

    const [errorsState, setErrorsState] = useState({
        email: '',
        password: '',
        general: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const responseHTTP = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            const data = await responseHTTP.json();

            if (!responseHTTP.ok) {
                if (data.errors) {
                    setErrorsState((prevState) => ({
                        ...prevState,
                        ...data.errors
                    }));
                } else {
                    setErrorsState((prevState) => ({
                        ...prevState,
                        general: data.message || 'Error desconocido al iniciar sesión'
                    }));
                }
            } else {
                console.log('Inicio de sesión exitoso');
                
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorsState((prevState) => ({
                ...prevState,
                general: 'Error de conexión. Inténtalo de nuevo más tarde.'
            }));
        }
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleLogin} className='login-form'>
                <h1 className='login-title'>Inicia sesión</h1>
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
                <button type='submit'>Iniciar sesión</button>
                {errorsState.general && <div className="error">{errorsState.general}</div>}
                <Link to='/forgot-password'>Olvidé mi contraseña</Link>
            </form>
        </div>
    );
};

export default LoginScreen;
