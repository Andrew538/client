import { createContext, useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  
    const {users} = useContext(Context)
    const navigate = useNavigate()
    const [user, setUser] = useState(true)
    

    const singin = (newUser, callback) => {
        setUser(newUser)
        callback()
    }
    const singout = (callback) => {
      
        setUser(null)
        callback()
    }
    // useEffect(() => {
     
    //     // setUser(localStorage.getItem('token'))
    //     try {
    //         if(localStorage.getItem('token')) {
    //             check()
    //             .catch(function(error) {
    //                 console.log(error.response.status)
    //                 if(error.response.status === 401) {
    //                 navigate('/home', {replace: true})
      
    //                 }
    //                 // console.clear()
                  
    //             })
    //             .then(data => {
                   
    //                 if(localStorage.getItem('token') && data) {
    //                     users.setUser(true)
    //                     users.setIsAuth(true)
    //                     users.setRole(data.role)
    //                     users.setEmail(data.email)
    //                 } else if(localStorage.getItem(' ', ) && !data) {
    //                     localStorage.clear();
    //                     navigate('/', {replace: true})
    //                     singout(()=> 
    //                         navigate('/', {replace: true})
    //                     )
    //                 }
    //             }) 
    //             // .catch(function(error) {
    //             //     console.log(error.response.status)
    //             //     if(error.response.status === 401) {
    //             //     navigate('/home', {replace: true})

    //             //     }
    //             // })
    //         } 
          
    //     } catch (error) {
    //         if(error.error) {
    //             navigate('/home', {replace: true})

    //         }
    //         console.log(error)
    //         console.log(error)
    //     }
       
    // }, [])

    const value = {user,singin, singout}


    return <AuthContext.Provider value={value}>
      { children }
   

    </AuthContext.Provider>
}