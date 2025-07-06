import { observer } from 'mobx-react-lite'

import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';

import TableDirections from '../../Directions/TableDirections/TableDirections'
import { Context } from '../../../..';
import { fetchDay } from '../../../http/mapApi';

const Wednesday = observer(({id}) => {

 const { direction } = useContext(Context);
   let number = localStorage.getItem("numberTabDay");
   console.log(id)
   useEffect(() => {
     let days = 1;
     let userid = id;
 
     let day = Number(number) + days;
 
     fetchDay(userid, day).then((data) => {
       direction.SetDirection(data);
     });
   }, [direction, number, id]);
 



  return (
    <div>
      <TableDirections direction={direction} />


    </div>
  )
})

export default Wednesday