import React, { useContext } from 'react'

import { Context } from '../../Context/AuthContext'

export default function Home() {
    const { handleLogout } = useContext(Context)

    return (
        <>
            <h1>Bem-vindo a Home</h1>
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