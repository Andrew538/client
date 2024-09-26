import { createContext, useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Context } from "../index";

export const AuthContext = createContext(null)
    // const {user} = useContext(Context)

export const AuthProvider = ({children}) => {


    const [user, setUser] = useState(true)
  
    const singin = (newUser, callback) => {
        setUser(newUser)
        callback()
    }
    const singout = (callback) => {
        setUser(null)
        callback()
    }
    useEffect(() => {
        // check().then(data => {
        //     user.setUser(true)
        //     user.setIsAuth(true)
        // })
        setUser(localStorage.getItem('token'))

    }, [])

        const value = {user,singin, singout}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}