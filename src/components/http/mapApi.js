import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createRegion = async (region, day, userid) => {
  try {
    const { data } = await $authHost.post("api/direction/newdirection", {
      region,
      day,
      userid,
    });
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const createClient = async (client, payment, address, contact, manager,cityid, weightusedbattery, weightnewbatteries, comment ) => {
    const {data} = await $authHost.post('api/direction/newclient', {client, payment, address, contact, manager,cityid, weightusedbattery, weightnewbatteries, comment })
   return data
}


export const createCity = async (city, region, directionid, userid) => {

    const {data} = await $authHost.post('api/direction/newcity', {city, region, directionid, userid})
   return data
}

// export const fetchRegion = async ( directionId ) => {
//     const {data} = await $authHost.get('api/direction/allregions', {params: {
//             directionId
//     }})
//     console.log(data)
//     return data
// }



export const fetchRegion = async (  ) => {
    const {data} = await $authHost.get('api/direction/allregions')
    // console.log(data)
    return data
}


export const fetchDay = async (userid ,day) => {

    const {data} = await $authHost.get('api/direction/getallmonday', {params: {
       userid ,day
    }})
  //  console.log(data)
    return data
}


// export const fetchDay = async () => {

//     const {data} = await $authHost.get('api/direction/getallmonday')
//     console.log(data)
//     return data
// }

export const fetchCity = async ( ) => {

    const {data} = await $authHost.get('api/direction/getallcity')
  
    return data
}

export const fetchOneClient = async (id) => {
  try {
     const {data} = await $authHost.get('api/direction/getoneclient', {params: {id}})

  return data
    
  } catch (error) {
    console.log(error);
    
  }
 
}
// fetchOneClient()
// fetchCity()