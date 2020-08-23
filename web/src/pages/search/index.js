import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import history from '../../history';

import './styles.css';
import api from '../../services/api';

export default function Search() {
    const [ id, setId ] = useState('');
    const [customers, setCustomers ] = useState([]);
    const [name, setName] = useState('');

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

    useEffect(() => {
        if(id) {
            api.post(`/user/${id}/customer/find`, {name})
            .then(response => {
                setCustomers(response.data)
            });
        }        
    }, [id, name]);

    function handleCustomerProfile(id) {
        history.push('/search');
    }

    return (
        <>
        <div className="s-container">
            <div className="s-image title-image" >
                <h1 className="h1 font-light text-color-gray">
                    Clientes cadastrados
                </h1>
            </div>

            <div className="s-search">
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)}
                    className="s-search-input"
                />                
                <ul className="s-customers-list">
                    {
                        customers.map(customer =>(
                            <li 
                                key={customer.id} 
                                className="s-customer-item"
                                onClick={() => handleCustomerProfile(customer.id)}
                            >
                                <span className="s-customer-name">
                                    {customer.name}
                                </span>

                                <span className="s-customer-arrow">
                                    <MdKeyboardArrowRight size="40"/>
                                </span>                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}