import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { }
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const isLogger = localStorage.getItem('isLoggedIn')
        if (isLogger === '1') {
            setIsLoggedIn(true)
        }

    }, [])
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>)
}
export default AuthContext;
