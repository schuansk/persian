import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context } from '../Context/AuthContext'

import Login from '../pages/login'
import Sidebar from '../pages/sidebar'

function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context)

    if(loading) {
        return <h1>Loading...</h1>
    }    

    if(isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute isPrivate path="/" component={Sidebar} />
        </Switch>
    )
}