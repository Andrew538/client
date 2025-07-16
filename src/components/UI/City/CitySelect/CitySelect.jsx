import { observer } from "mobx-react-lite";
import React from "react";
import { fetchCity, fetchRegion } from "../../../http/mapApi";
import { useContext } from "react";
import { Context } from "../../../..";

const CitySelect = observer(
  ({ options, defaultValue, value, onChange }) => {
 const { users, allcity, allUser, alldirection } = useContext(Context);

 function getCity (){
   fetchCity().then((data) => {
     allcity.SetAllCity(data);
   });
   fetchRegion().then((data) => {
    alldirection.SetAllDirection(data)
   })

 };
    return (
      <select 
      value={value} 
      onChange={(event) => onChange(event.target.value)}
      onClick={getCity}
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
