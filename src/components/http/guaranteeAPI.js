import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createRecorder = async (date, client, manager, product, releaseDate, result) => {
    const {data} = await $authHost.post('api/examination/newentry', {date, client, manager, product, releaseDate, result})
   return data

}


export const fetchExam = async (date, client, manager, product, releaseDate, result) => {
    const {data} = await $authHost.get('api/examination/getall', {params: {
        date, client, manager, product, releaseDate, result
    }})
    console.log(data)

    return data
}

export const delExam = async (id) => {
    const {} = await $authHost.delete('api/examination/del', {data: id})
  

}




