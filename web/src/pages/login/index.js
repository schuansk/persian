import React from 'react'

import './styles.css'

//import logo from '../../assets/svg/persian-logo-v2.svg'

import LoginContainer from '../../components/LoginContainer'
import ImageLogin from '../../components/ImageLogin'

export default function Login() {
    return (
        <div className="container login-container">
            <div className="col-5 left-content"> 
                <h2 className="h2 text-color-light">Gestão de clientes</h2>
                <p className="subtitle text-color-light">Uma plataforma simples para você gerenciar os dados de seus clientes.</p>
                <span>
                    <ImageLogin />
                </span>
            </div>
            <div className="col-5 right-content">
                <LoginContainer />
            </div>     
        </div>
    )
}