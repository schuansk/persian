import React, { useState, useContext } from 'react'

import history from '../../history'

import { Context } from '../../Context/AuthContext'

export default function Login() {
    const { handleLogin } = useContext(Context)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleSubmit(e) {
        e.preventDefault() 

        handleLogin(email, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Digite seu email"
                    onChange={
                        (e) => setEmail(e.target.value)
                    }   
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                />

                <button 
                    type="submit" 
                    name="enviar"
                    id="enviar"
                >
                    Fazer login
                </button>
            </form>
        </>
    )
}