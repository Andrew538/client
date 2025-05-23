

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


// export const allUsers = async ( email, name, role) => {
//     const {data} = await $auth.get('api/user/', {params: 
//        { email, name, role}
//     })

    
//     return data
    
// }


