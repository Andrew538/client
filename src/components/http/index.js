import axios from "axios";

const $host = axios.create({
    // baseURL: 'https://localhost:5000/'
    // baseURL: 'http://lk-opt.store:5000/'
    proxy: {
        host: '45.146.165.155:5000',
        port: 80,
        protocol: 'http',
    }
// 
})

const $authHost = axios.create({
    // baseURL: 'https://localhost:5000/'
    // baseURL: 'https://lk-opt.store:5000/'  
    proxy: {
        host: '45.146.165.155:5000',
        port: 80,
        protocol: 'http',
    }
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`

    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
