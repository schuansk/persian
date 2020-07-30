import React, { useState, useContext, useEffect } from 'react'

import history from '../../history'

import { Context } from '../../Context/AuthContext'

export default function Login() {
    const { handleLogin } = useContext(Context)

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            history.push('/home')
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault() 

        handleLogin(email, password)
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-section">
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                        onChange={
                            (e) => setEmail(e.target.value)
                        }   
                    />
                    <label className="label-input">
                        <span className="content-label">
                            Digite seu e-mail
                        </span>
                    </label>
                </div>

                <div className="input-section">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                    />

                    <label className="label-input">
                        <span className="content-label">
                            Digite sua senha
                        </span>
                    </label>
                </div>

                <button 
                    type="submit" 
                    name="send"
                    id="send"
                    className="send"
                >
                    Fazer login
                </button>
            </form>
        </>
    )
}