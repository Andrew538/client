import { createContext, useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import Header from "./UI/Header/Header";
import Home from "./pages/Home/Home";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const {users} = useContext(Context)
    const navigate = useNavigate()


    const [user, setUser] = useState(true)
    // const [storage, setStorage] = useState(localStorage.getItem('token'))

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
        try {

            if(localStorage.getItem('token')) {
                check().then(data => {
                    // console.log(data.token)

                    if(localStorage.getItem('token') && data) {
                        users.setUser(true)
                        users.setIsAuth(true)
                        users.setRole(data.role)
                        users.setEmail(data.email)
                    } else if(localStorage.getItem(' ', ) && !data) {
                        localStorage.clear();
                        singout(()=> 
                            navigate('/', {replace: true})
                        
                        )
                    }
                    
                })


          } 
          
        //   else {
            //     localStorage.clear();
            //     navigate('/home', {replace: true})

            // }
    
        } catch (error) {
            navigate('/home', {replace: true})
            console.log(error)
        }
       
    }, [])

        const value = {user,singin, singout}


    return <AuthContext.Provider value={value}>

        { children}
    </AuthContext.Provider>
}