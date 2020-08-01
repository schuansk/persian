import React from 'react'

import './styles.css'

import logo from '../../assets/svg/persian-logo.svg'

import LoginContainer from '../../components/LoginContainer'
import SidebarInfo from '../../components/SidebarInfo'
import ImageLogin from '../../components/ImageLogin'

export default function Login() {
    return (
        <div className="login">
            <div className="sidebar-info">                
                <SidebarInfo />
                <div>
                    <h2>Gestão de clientes</h2>
                    <p>Uma plataforma simples para você gerenciar os dados de seus clientes.</p>
                    <span>
                        <ImageLogin />
                    </span>
                </div>
            </div>
            <div className="login-container">
                <div className="logo">
                    <img src={logo} alt="Persian logo"/>
                    <h1>Persian</h1>
                </div>
                <LoginContainer />
            </div>            
        </div>
    )
}