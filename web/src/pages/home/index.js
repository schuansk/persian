import React, { useContext, useState, useEffect } from 'react'

import api from '../../services/api'

import { Context } from '../../Context/AuthContext'

export default function Home() {
    const { handleLogout } = useContext(Context)
    const [ name, setName ] = useState('')

    useEffect(() => {
        api.get('/user').then((response) => {
            setName(response.data.userId)
        })
    }, []);

    return (
        <>
            <h1>Bem-vindo, { name }</h1>
            <hr />
            <button 
                type="button"
                onClick={handleLogout}
            >
                Sair
            </button>
        </> 
    )
}