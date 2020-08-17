import React, { useEffect, useState, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Form/Input';
import history from '../../history';

import './styles.css';
import api from '../../services/api';

export default function NewCustomer() {
    const formRef = useRef(null);
    const [ id, setId ] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token || token === null || token === '') {
            history.push('/login');
        } else {
            api.get('/user').then((response) => {
                setId(response.data.userId)
            })
        }
    }, []);

    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('O nome do cliente é obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            await api.post(`user/${id}/customer`, data);

        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <div className="nc-container">
            <div className="nc-image title-image" >
                <h1 className="h1 font-light text-color-gray">
                    Cadastro de cliente
                </h1>
            </div>

            <div className="nc-form">
                <Form
                ref={formRef}
                    className="form" 
                    id="form"
                    onSubmit={handleSubmit}
                    style={{
                        maxWidth: '900px'
                    }}
                >
                    <Input 
                        name="name" 
                        label="Digite o nome do cliente"
                        type="text"
                    /> 

                    <Input 
                        name="email" 
                        label="Digite o e-mail"
                        type="email"
                    /> 

                    <Input 
                        name="register" 
                        label="Digite o CNPJ, CPF ou CEI"
                        type="text"
                    /> 

                    <Input 
                        name="street" 
                        label="Digite o nome da rua"
                        type="text"
                    /> 

                    <Input 
                        name="number" 
                        label="Digite o nº"
                        type="number"
                    />

                    <Input 
                        name="neighborhood" 
                        label="Digite o bairro"
                        type="text"
                    />

                    <Input 
                        name="state" 
                        label="Digite a UF"
                        type="text"
                    />

                    <Input 
                        name="city" 
                        label="Digite a cidade"
                        type="text"
                    />

                    <div style={{ margin: '0 auto' }}>
                        <button 
                            type="submit" 
                            name="send"
                            id="send"
                            className="button button-secondary button-medium mt-2"
                        >
                            Cadastrar
                        </button>
                    </div>         
                </Form>
            </div>            
        </div>
    )
}