import React from 'react'
import TableDirections from '../../Directions/TableDirections/TableDirections'
import { observable } from 'mobx'
import { useContext } from 'react'
import { Context } from '../../../..'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { fetchDay } from '../../../http/mapApi'
import { useState } from 'react'
import ManagersOptList from '../../ManagersOptList/ManagersOptList'

const Tuesday = observer(({ id }) => {
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
  );
});

export default Tuesday; 