import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { useContext } from 'react';
import { Context } from '../../../..';
import { useEffect } from 'react';
import { fetchDay } from '../../../http/mapApi';
import TableDirections from '../../Directions/TableDirections/TableDirections';
import Loader from '../../Loader/Loader';

const Thursday = observer(({id}) => {

   const { direction } = useContext(Context);
     let number = localStorage.getItem("numberTabDay");
    const [loading, setLoading] = useState(false)

     useEffect(() => {
       const fetchData = async () => {
         setLoading(true);
         try {
           let days = 1;
           let userid = id;

           let day = Number(number) + days;

           await fetchDay(userid, day).then((data) => {
             direction.SetDirection(data);
           });
         } catch (error) {
         } finally {
           setLoading(false);
         }
       };

       fetchData();
     }, [direction, number, id]);
   
      if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <TableDirections direction={direction} />

    </div>
  )
})

export default Thursday