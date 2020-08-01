import React, { useEffect, useContext, useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import history from '../../history'
import { Context } from '../../Context/AuthContext'
import Input from '../../components/Form/Input'

import './styles.css'

export default function LoginContainer() {
    const formRef = useRef(null)
    const { handleLogin } = useContext(Context)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            history.push('/home')
        }
    }, [])

    async function handleSubmit(data) {
        
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(3, 'No mínimo três caracteres')
                    .required('A senha é obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            handleLogin(data.email, data.password)

            //formRef.current.setErrors()
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errorMessages = {}

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (
        <Form 
            ref={formRef} 
            className="form" 
            onSubmit={handleSubmit}
        >
            <h2 className="h2">Bem-vindo</h2>

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
                    className="send"
                >
                    Fazer login
                </button>
            </div>                
        </Form>
    )
}