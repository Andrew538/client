import React from 'react'

const ButtonAddCityDirections = ({openModal}) => {
  return (
    <button
onClick={() => openModal(true)}
    >добавить города</button>
  )
}

export default ButtonAddCityDirections