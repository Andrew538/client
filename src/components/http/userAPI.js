import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
export const registration = async (email, password, name, role) => {
    const {data} = await $authHost.post('api/user/registration', {email, password, name, role})
    console.log(role)
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


export const usersList = async () => {
    const {data} = await  $authHost.get('api/user/users-list')
    localStorage.setItem('token', data.token)
    // console.log(data)

    return jwtDecode(data.token)

}


