import { createContext, useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Context } from "../index";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const {users} = useContext(Context)


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
     
        setUser(localStorage.getItem('token'))

        if(localStorage.getItem('token')) {
            check().then(data => {
                users.setUser(true)
                users.setIsAuth(true)
                users.setRole(data.role)
                users.setEmail(data.email)
            })
        }

    }, [])

        const value = {user,singin, singout}


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}