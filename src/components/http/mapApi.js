import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";
// Есть 
export const createRegion = async (region, day, userid) => {

    const { data } = await $authHost.post("api/direction/newdirection", {
      region,
      day,
      userid,
    });
    // console.log(data);
    return data;

};

//Есть
export const createClient = async (client, payment, address, contact, directionid, manager, cityid,  weightusedbattery, weightnewbatteries, comment, priceofusedbattery ) => {
    const {data} = await $authHost.post('api/direction/newclient', {client, payment, address, contact, directionid, manager, cityid, weightusedbattery, weightnewbatteries, comment, priceofusedbattery})
   return data
}


export const createCity = async (city, directionid, day) => {

    const {data} = await $authHost.post('api/direction/newcity', {city, directionid, day})
   return data
}


export const createDeliveryNumber = async (dateofcreation) => {

    const {data} = await $authHost.post('api/direction/newdeliverynumber', {dateofcreation})
   return data
}

export const updateDeliveryNumber = async (id) => {

    const {data} = await $authHost.post('api/direction/updatedeliverynumber', {id})
   return data
}

export const createDirectionsRady = async (deliverynumberid, dateofcreation,  arrayDirections) => {
  
       const {data} = await $authHost.post('api/direction/newdirectionsrady', {deliverynumberid, dateofcreation,  arrayDirections})
    // console.log(data)
   return data
  
   
} 
//  Если направление было удалено при удалении последенего клиента в таблице - Готовы к отгрузке
export const createDirectionsRadyTwo = async (dirredyid, todaysdate, statusDirectios) => {
  
       const {data} = await $authHost.post('api/direction/newdirectionsradytwo', {dirredyid, todaysdate, statusDirectios})
    // console.log(data)
   return data
   
} 

export const createCityDirectionsRady = async (cId, dirId) => {
  
     const {data} = await $authHost.post('api/direction/newcitydirectionsrady', {cId, dirId})
    console.log(data)
   return data
  
   
}

export const createDelivery = async (payment, client,  address, contact, directionid, manager, cityid, clientid, weightusedbattery, weightnewbatteries, comment, dateofcreation, directionsredyid, citydirectionsradyId, priceofusedbattery) => {
   const {data} = await $authHost.post('api/direction/newdelivery', {payment, client,  address, contact, directionid, manager,cityid, clientid, weightusedbattery, weightnewbatteries, comment, dateofcreation, directionsredyid, citydirectionsradyId, priceofusedbattery})
   return data
  
   
}

export const updateClient = async (id, payment, client,  address, contact,directionid, manager,cityid,  comment, priceofusedbattery) => {
    const {data} = await $authHost.post('api/direction/updateclient', {id ,payment, client,  address, contact, directionid, manager,cityid, comment, priceofusedbattery})
   return data
}

export const updateClientDelivery = async (id, payment, client,  address, contact,directionid, manager,cityid, weightusedbattery, weightnewbatteries, comment, priceofusedbattery) => {
    const {data} = await $authHost.post('api/direction/updateclientdelivery', {id ,payment, client,  address, contact, directionid, manager,cityid, weightusedbattery, weightnewbatteries, comment, priceofusedbattery})
   return data
}

export const deleteDelivery = async (id, iddirection, dateCreate) => {
  const {} = await $authHost.delete('api/direction/removedelivery', {data: id, iddirection, dateCreate})  
 
}

export const deleteClient = async (id) => {
  const {} = await $authHost.delete('api/direction/removeclient', {data: id})  
}

export const addStatusDelivery = async (id, statusDelivery) => {
  const {data} = await $authHost.post('api/direction/newstatus', {id, statusDelivery})
  return data
}

//УЖЕ ЕСТЬ
export const fetchRegion = async (  ) => {
    const {data} = await $authHost.get('api/direction/allregions')
   
    return data
} 

// ----------------------------------//
export const fetchOneRegion = async ( id ) => {
    const {data} = await $authHost.get('api/direction/oneregions', {params: {id}})
  //  console.log(data)
    return data
}

export const fetchTodaysDirections = async ( days) => {
    const {data} = await $authHost.get('api/direction/allTodaysdirections', {params: {days}})
  //  console.log(data)
    return data
}

export const fetchOneTodaysDirections = async ( regionid, todaysdate) => {
    const {data} = await $authHost.get('api/direction/onetodaysdirections', {params: {regionid, todaysdate}})
  //  console.log(data)
    return data
}


export const fetchOneDeliveryNumber = async ( dateofcreation ) => {
    const {data} = await $authHost.get('api/direction/onedeliverynumber', {params: {dateofcreation}})
  //  console.log(data)
    return data
}
 

// fetchOneRegion()
export const fetchDay = async (userid ,day) => {

    const {data} = await $authHost.get('api/direction/getalltoday', {params: {
       userid ,day
    }})

    return data
}


export const fetchDelivery = async () => {
  const {data} = await $authHost.get('api/direction/getalldelivery')
 
    return data
    
    
}


export const fetchDeliveryRedy = async () => {
    
    const {data} = await $authHost.get('api/direction/getalldeliveryredy')
console.log(data)
    return data
}

// fetchDeliveryRedy()
//ЕСТЬ
export const fetchCity = async ( directionid) => {

  const {data} = await $authHost.get('api/direction/getallcity', {params:{directionid}})
  // console.log(data)
    return data

    
}

// ----------------------------//

export const fetchCitysOfDay = async (day) => {
  const {data} = await $authHost.get('api/direction/getcitysofday', {params:{day}})
  // console.log(data)
    return data

    
}
export const fetchOneClient = async (id) => {
   const {data} = await $authHost.get('api/direction/getoneclient', {params: {id}})
    // console.log(data)
  return data
    
  

}

export const fetchOneClientDeliveryReady = async (id) => {
   const {data} = await $authHost.get('api/direction/getonedeliveryready', {params: {id}})
    // console.log(data)
  return data
    
}

// fetchOneClientDeliveryReady()


export const fetchOneDelivery = async (id) => {
  const {data} = await $authHost.get('api/direction/getonedelivery', {params: {id}})

  return data

}

export const fetchOneCityDirectionsRady = async (dirId, cId) => {
   const {data} = await $authHost.get('api/direction/getonecitydirectionrady', {params: {dirId, cId}})

  return data
  
 
}

export const fetchDeliveryArhive = async () => {
    
    const {data} = await $authHost.get('api/direction/getalldeliveryarhive')
  //console.log(data)
    return data
}

export const fetchAllUserId = async () => {
    
    const {data} = await $authHost.get('api/direction/alluserid')
 
    return data
}

// // Для общего веса, пока на трогать
// export const fetchAllTotal = async () => {
    
//     const {data} = await $authHost.get('api/direction/gettotalweightofnew',)
 
//     console.log(data)
  
//     return data
// }

// fetchAllTotal()