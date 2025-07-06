import { observer } from 'mobx-react-lite';
import React from 'react'
import { useContext } from 'react';
import { Context } from '../../../..';
import TableDirections from '../../Directions/TableDirections/TableDirections';
import { useEffect } from 'react';
import { fetchDay } from '../../../http/mapApi';
import ManagersOptList from '../../ManagersOptList/ManagersOptList';
import { check } from '../../../http/userAPI';
import { useState } from 'react';

const Monday = observer(({id}) => {

  const { direction } = useContext(Context);
  let number = localStorage.getItem("numberTabDay");
  
  
  useEffect(() => {
    //setUserId(miid)
   let userid = Number(id)

    let day = number + 1
      fetchDay(userid, day).then((data) => {
       direction.SetDirection(data);
  
      })

    
      // check().then((data) =>{
      //  setUserId(Number(data.id))
      // })
  }, [direction, number, id])

  return (
    <div>
      {/* <ManagersOptList/> */}
      <TableDirections direction={direction} />
    </div>
  );
});

export default Monday 