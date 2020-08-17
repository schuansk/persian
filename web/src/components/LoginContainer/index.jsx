import React, { useEffect, useContext, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import history from '../../history';
import { Context } from '../../Context/AuthContext';
import Input from '../../components/Form/Input';
import Logo from '../../components/Logo';

import './styles.css';

export default function LoginContainer() {
    const formRef = useRef(null);
    const { handleLogin } = useContext(Context);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            history.push('/home');
        }
    }, []);

    async function handleSubmit(data) {
        
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(3, 'No mínimo três caracteres')
                    .required('A senha é obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const login = await handleLogin(data.email, data.password);

            if(login.response.status === 401) {
                setError(true);  
                handleError();           

                setTimeout(() => {
                    setError(false);
                }, 500);
            }

            //formRef.current.setErrors()
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                });

                formRef.current.setErrors(errorMessages);
            }
        }

        function handleError() {
            const form = document.getElementById('form');

            form.classList.add('error');

            setTimeout(() => {
                form.classList.remove('error');
            }, 2000);
        }
    }

    return (
        <>
            <div className="logo">
                <Logo error={ error }/>
                <h1 className="h1 title text-color-dark">Persian</h1>
            </div>

            <Form
                ref={formRef} 
                className="form" 
                onSubmit={handleSubmit}
                id="form"
                style={{
                    maxWidth: '500px',
                    maxHeight: '500px'
                }}
            >
                <h2 className="h2 text-color-gray">Bem-vindo</h2>

                <Input 
                    name="email" 
                    label="Digite seu e-mail"
                />               

                <Input 
                    name="password" 
                    type="password"
                    label="Digite sua senha"
                />

                <div style={{ margin: '0 auto' }}>
                    <button 
                        type="submit" 
                        name="send"
                        id="send"
                        className="button button-secondary button-medium mt-2"
                    >
                        Entrar
                    </button>
                </div>                
            </Form>
        </>
    )
}