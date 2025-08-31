import React from 'react'
import ClientsSelect from './ClientsSelect'
import classes from '../ClientModal.module.css'
const ClientsSelectList = ({allCity, setAllCity, optionsAllCity, manager, setManager, optionsManager,dirId }) => {


  return (
    <div className={classes.client__form__select__list}>
      <ClientsSelect
            value={allCity}
            // idDirection={dirId}
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