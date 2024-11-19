import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createRecord = async ( date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result) => {
    const {data} = await $authHost.post('api/examination/newentry', { date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result})
   return data

}


export const fetchExam = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result) => {
    const {data} = await $authHost.get('api/examination/getall', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result
    }})
   
    return data
}

export const delExam = async (id) => {
    const {} = await $authHost.delete('api/examination/del', {data: id})
  
}

export const updateRecord = async (id, releaseDate,result) => {
    const {} = await $authHost.post('api/examination/upgrade', {
      id, releaseDate, result
    })
//   return data
}


export const fetchOneExam = async (id) => {
    const {data} = await $authHost.get('api/examination/getone', { params: {id} })
    return data
}


