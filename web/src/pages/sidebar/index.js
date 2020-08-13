import React, { useState } from 'react';

import Home from '../home';
import Search from '../search';
import NewCustomer from '../new-customer';

export default function Sidebar() {
    const [element, setElement] = useState(<Home/>)

    function goTo(page) {
        switch(page) {
            case 1:
                setElement(<Home/>)
                break;
            case 2:
                setElement(<Search/>)
                break;
            case 3:
                setElement(<NewCustomer/>)
                break;
            default: 
                setElement(<Home/>)
                break;
        }
    }

    return (
        <>
            <div>
                <button onClick={() => goTo(1)}>Home</button>
                <button onClick={() => goTo(2)}>Search</button>
                <button onClick={() => goTo(3)}>New Customer</button>
            </div>

            <div id="content">
                { element }
            </div>
        </>
    )
}