import axios from "axios";

// const $host = axios.create({
//     baseURL: 'http://localhost:5000/'
// })

const $host = axios.create({
 
    proxy: {
        host: '45.146.165.155:5000',
        port: 80,
        protocol: 'http',
    }

})

// const $authHost = axios.create({
//     baseURL: 'http://localhost:5000/'
// })

const $authHost = axios.create({
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
