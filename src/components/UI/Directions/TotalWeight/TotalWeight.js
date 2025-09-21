import React, { useContext, useEffect, useState } from 'react'
import { fetchAllTotal } from '../../../http/mapApi'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../..'

const TotalWeight = observer(({dateofcreation, cityid, dir }) => {
 
    const { totalweghtnewofcity } = useContext(Context)



    // useEffect(() => {
    //     fetchAllTotal(  dateofcreation, cityid  ).then((data) => {
    //            console.log(data)
    //      totalweghtnewofcity.SetTotalWeghtNewOfCity(data)
    //    })
    //     totalweghtnewofcity.SetTotalWeghtNewOfCity(cityid)
    // },[dateofcreation, cityid,])




  //  console.log(totalweghtnewofcity)

  //  const [di, setDi] = useState([{}])

  //  console.log(di)


  //  const totel = di.reduce((sum, prod) => {
        // sum: sum
        // prod: prod
  //      return sum + prod.weightnewbatteries
   // })

 //   console.log(totel)

   //useEffect(() => {

     
   // console.log(dir.map((i) => {console.log(
   //     i.delivery.map((c) => {
   //     console.log(c.weightnewbatteries)
   // 
  // },
   //     setDi(i.delivery)
//
   // )
    //    )}))
  //  }, [])


//    useEffect(() => {//
  //       useEffect(() => {
 //       fetchAllTotal(  dateofcreation, cityid  ).then((data) => {
             //   console.log(data)
       //   totalweghtnewofcity.SetTotalWeghtNewOfCity(data)
 //       })
 //   },[dateofcreation, cityid])
//    },[dateofcreation, cityid])

  return (
    <div></div>
  )
})

export default TotalWeight