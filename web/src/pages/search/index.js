import React, { useEffect, useState } from 'react';
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
        
    }, [id, name])

    return (
        <div className="s-container">
            <div className="s-image title-image" >
                <h1 className="h1 font-light text-color-gray">
                    Clientes cadastrados
                </h1>
            </div>

            <div className="s-search">
                <input type="text" onChange={(e) => setName(e.target.value)}/>                
                <ul>
                    {
                        customers.map(customer =>(
                            <li key={customer.id}>{customer.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}