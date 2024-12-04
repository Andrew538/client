import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createRecord = async ( date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.post('api/examination/newentry', { date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam})
   return data

}


export const fetchExam = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.get('api/examination/getall', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam        
    }})
   
    return data
}

export const fetchExamWorks = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.get('api/examination/getallworks', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam        
    }})
   
    return data
}

export const fetchExamArhive = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.get('api/examination/getallarhive', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam        
    }})
   
    return data
}

export const fetchExamCharger = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.get('api/examination/getallcharger', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam        
    }})
 
    return data
}
export const fetchExamReady = async (date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam) => {
    const {data} = await $authHost.get('api/examination/getallready', {params: {
        date, client, city, productionDate, numberReturnDocument, plantDocumentNumber, movingToDefectWarehouse, comment, manager, product, releaseDate, result, statusExam        
    }})
   
   
    return data
}


export const delExam = async (id) => {
    const {} = await $authHost.delete('api/examination/del', {data: id})
  
}

export const updateRecord = async (id, releaseDate,result, statusExam) => {
    const {} = await $authHost.post('api/examination/upgrade', {
      id, releaseDate, result, statusExam
    })
//   return data
}


export const fetchOneExam = async (id) => {
    const {data} = await $authHost.get('api/examination/getone', { params: {id} })
    return data
}


// export const getStatus = async (statusExam) => {
//     const {data} = await $authHost.get('api/examination/getstatus', { params: {statusExam} })
//     console.log(data)

//     return data
// }

