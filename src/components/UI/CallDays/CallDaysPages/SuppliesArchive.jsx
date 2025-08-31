import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '../../../..'
import { fetchDeliveryArhive } from '../../../http/mapApi'
import TableArhive from '../../Directions/TableArhive/TableArhive'
import Arhive from '../../../WarrantyVerificationSteps/Arhive/Arhive'

const SuppliesArchive = observer(() => {

  const {arhivedelivery } = useContext(Context)



  useEffect(() => {
    try {
      fetchDeliveryArhive().then((data) => {
        //console.log(data)
        arhivedelivery.SetArhiveDelivery(data)
      })
    } catch (error) {
      console.log(error);
    }
  }, [arhivedelivery])

  return (
    <div>
     <TableArhive arhivedelivery={arhivedelivery}/>
    </div>
  )
})

export default SuppliesArchive