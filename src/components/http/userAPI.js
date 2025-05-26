

import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
export const registration = async (email, password, name, role, surname) => {
    const {data} = await $authHost.post('api/user/registration', {email, password, name, role, surname})

    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)

}



export const login = async (email, password) => {
    const  {data}  = await $host.post('api/user/login', {email, password})

    
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {

    const {data} = await  $authHost.get('api/user/auth')
    
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)

    
}


export const allUsers = async (id, email, name, role, surname) => {
    const {data} = await $authHost.get('api/user/user', {params: 
       {id, email, name, role, surname}
    })

    // console.log(data)
    
    return data
    
}



// // export const surname = async ( surname) => {
// //     const {data} = await $authHost.get('api/user/surname', {params: 
// //        {  surname}
// //     })

//     console.log(data)
//     return data
    
// }