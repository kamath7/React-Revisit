import React, { useState, useEffect } from 'react'

let logoutTimer; //used since you don't want to attempt a logout once a user is loged out
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }

})

const calculateTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()
    const remainingTime = adjExpirationTime - currentTime

    return remainingTime
}

const retrieveToken = () => {
    const storedToken = localStorage.getItem('token')
    const expirationTime = localStorage.getItem('expirationTime')
    const remainingTime = calculateTime(expirationTime)

    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }
    return { token: storedToken, duration: remainingTime }
}
export const AuthContextProvider = (props) => {
    const tokenData = retrieveToken()
    let initialToken;
    initialToken = tokenData ? tokenData.token : null;
    const [token, setToken] = useState(initialToken) //either stored token or null
    const userIsLoggedIn = !!token;



    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        if (logoutTimer) {
            clearTimeout(logoutTimer) //removes the timer
        }
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        const remainingTime = calculateTime(expirationTime)
        localStorage.setItem('expirationTime', expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime) //logout after time expires 
    }
useEffect(()=>{
    if(tokenData){
        logoutTimer = setTimeout(logoutHandler, tokenData.duration)
    }
}, [tokenData])
    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext