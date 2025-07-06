import React from 'react'
import { useContext } from 'react';
import { Context } from '../../../../..';
import { fetchCity } from '../../../../http/mapApi';

const ClientsSelect = ({ options, defaultValue, value, onChange }) => {
   const { users, allcity, allUser } = useContext(Context);
   function getData (){
     fetchCity().then((data) => {
       allcity.SetAllCity(data);
     });
   };
  return (
     <select 
     value={value} 
     onChange={(event) => onChange(event.target.value)}
     onClick={getData}
     >
        <option disabled value="">
          {defaultValue}
        </option>
        {options}
      </select>
  )
}

export default ClientsSelect