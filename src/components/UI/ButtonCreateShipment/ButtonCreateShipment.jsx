import React, { useEffect, useState } from 'react'
import { createDeliveryNumber } from '../../http/mapApi';

const ButtonCreateShipment = ({openModal}) => {

   

    // console.log(newDate)
  return (
    <button
onClick={() => openModal(true)}
    >Создать поставку</button>
  )
}

export default ButtonCreateShipment