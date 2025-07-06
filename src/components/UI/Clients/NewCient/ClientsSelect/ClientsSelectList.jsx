import React from 'react'
import ClientsSelect from './ClientsSelect'

const ClientsSelectList = ({allCity, setAllCity, optionsAllCity, manager, setManager, optionsManager}) => {
  return (
    <div>
      <ClientsSelect
            value={allCity}
            onChange={setAllCity}
            options={optionsAllCity}
            defaultValue="Выберите город"
        />
           <ClientsSelect
            value={manager}
            onChange={setManager}
            options={optionsManager}
            defaultValue="Ответсвенный"
        />
    </div>
  )
}

export default ClientsSelectList