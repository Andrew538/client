import { observer } from "mobx-react-lite";
import React from "react";
import { fetchCity, fetchRegion } from "../../../http/mapApi";
import { useContext } from "react";
import { Context } from "../../../..";
import classes from '../CityModal.module.css' 

const CitySelect = observer(
  ({ options, defaultValue, value, onChange }) => {
 const {alldirection } = useContext(Context);

 function getCity (){
  
   fetchRegion().then((data) => {
    alldirection.SetAllDirection(data)
   })

 };
    return (
      <select 
      value={value} 
      onChange={(event) => onChange(event.target.value)}
      onClick={getCity}
       className={classes.celect}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options}
      </select>
    );
  }
);

export default CitySelect;
