import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

import Login from '../pages/login';
import CustomerProfile from '../pages/customer-profile';
import Home from '../pages/home';
import Search from '../pages/search';
import NewCustomer from '../pages/new-customer';
import Sidebar from '../pages/sidebar';

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context);
    
    if(loading) {
        return <h1>Loading...</h1>
    }    

    if(isPrivate && !authenticated) {

        return <Redirect to="/" />
    }

    return (
        <>
            <Route {...rest} />
        </>
    )
}

export default function Routes() {
    const { authenticated } = useContext(Context);

    return (
        <>
            { authenticated ? <Sidebar /> : '' }
            <Switch>           
                <CustomRoute isPrivate path="/home" component={Home} />
                <CustomRoute isPrivate path="/customer-profile" component={CustomerProfile} />
                <CustomRoute isPrivate path="/search" component={Search} />
                <CustomRoute isPrivate path="/new-customer" component={NewCustomer} />                              
                <CustomRoute exact path="/" component={Login} />  
            </Switch>
        </>
    )
}