import React, { useState, useEffect, useContext } from 'react';
import { MdHome, MdSearch, MdPersonAdd, MdViewHeadline, MdExitToApp } from 'react-icons/md';

import api from '../../services/api';

import { Context } from '../../Context/AuthContext';
import Home from '../home';
import Search from '../search';
import NewCustomer from '../new-customer';

import './styles.css';

export default function Sidebar() {
    const [element, setElement] = useState(<Home/>);
    const { handleLogout } = useContext(Context)
    const [ id, setId ] = useState('')

    useEffect(() => {
        const home = document.getElementById('home');
        home.classList.add('sb-selected');
        setElement(<Search/>);       
    }, []);

    useEffect(() => {
        api.get('/user').then((response) => {
            setId(response.data.userId)
        })
    }, []);

    function handleSidebar() {
        const sidebar = document.getElementById('sidebar');

        if (sidebar.classList.contains('sb-hidden')) {
            sidebar.classList.remove('sb-hidden');
            sidebar.classList.add('sb-visible');
        } else {
            sidebar.classList.remove('sb-visible');
            sidebar.classList.add('sb-hidden');
        }
    }

    function goTo(page) {
        const home = document.getElementById('home');
        const search = document.getElementById('search');
        const newCustomer = document.getElementById('new-customer');

        if (page === 2) {
            home.classList.remove('sb-selected');
            home.classList.add('sb-not-selected');
            
            search.classList.remove('sb-not-selected');
            search.classList.add('sb-selected');
            

            newCustomer.classList.remove('sb-selected');
            newCustomer.classList.add('sb-not-selected');

            setElement(<Search/>);
        } else if(page === 3) {
            home.classList.remove('sb-selected');
            home.classList.add('sb-not-selected');
            
            search.classList.remove('sb-selected');
            search.classList.add('sb-not-selected');
            

            newCustomer.classList.remove('sb-not-selected');
            newCustomer.classList.add('sb-selected');

            setElement(<NewCustomer/>);
        } else {
            home.classList.remove('sb-not-selected');
            home.classList.add('sb-selected');
            
            search.classList.remove('sb-selected');
            search.classList.add('sb-not-selected');
            

            newCustomer.classList.remove('sb-selected');
            newCustomer.classList.add('sb-not-selected');

            setElement(<Home/>);
        } 

        setTimeout(()=> {
            handleSidebar();
        }, 200);
    }
    
    return (
        <div className="container">
            <div className="sb-container">
                <div id="sidebar" className="sb-sidebar background-color-secondary sb-hidden">
                    <div className="title">
                        <h1 className="title text-color-light subtitle">
                            Persian
                        </h1>
                    </div>
                    <div className="sb-options-title">
                        <h2 className="p text-color-light">
                            OPÇÕES
                        </h2>
                    </div>
                    <div className="sb-option sb-options">
                        <div id="home" className="sb-option">
                            <button onClick={() => goTo(1)}>
                                <MdHome size="18" />  Home
                            </button>
                        </div>
                        <div id="search" className="sb-option">
                            <button onClick={() => goTo(2)}>
                                <MdSearch size="18" /> Search
                            </button>
                        </div>
                        <div id="new-customer" className="sb-option">
                            <button onClick={() => goTo(3)}>
                                <MdPersonAdd size="18" /> New Customer
                            </button>
                        </div>
                        <div id="new-customer" className="sb-option">
                            <button onClick={handleLogout}>
                                <MdExitToApp size="18" /> Sair
                            </button>
                        </div>                       
                    </div>

                    <button className="view" onClick={() => handleSidebar()}>
                        <MdViewHeadline size="40" />
                    </button>                
                </div>

                <div id="content" className="sb-content">
                    <div className="sb-navbar">
                        <h2 className="p text-color-gray" style={{ fontWeight: 300 }}>
                            { id }
                        </h2>
                    </div>
                    <div className="sb-workspace">
                        { element }
                    </div>                    
                </div>
            </div>            
        </div>
    )
}