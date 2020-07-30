import { useState, useEffect } from 'react'

import api from '../../services/api'
import history from '../../history'

export default function useAuth() {
    const [ authenticated, setAuthenticated ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    async function handleLogin(email, password) {
        try{
            const response = await api.post('/auth', {
                email,
                password
            })

            const { data: { token } } = response
            
            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers.Authorization = `Bearer ${token}`

            setAuthenticated(true)
            history.push('/home')
        } catch (err) {
            throw err
        }
    }

    function handleLogout() {
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        history.push('/login')
    }

    return {
        authenticated,
        loading,
        handleLogin,
        handleLogout
    }
}