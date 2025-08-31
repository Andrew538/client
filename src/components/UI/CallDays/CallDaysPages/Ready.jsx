import { observable } from 'mobx'
import React, { useContext, useState } from 'react'

import { Context } from '../../../..'
import TableDirections from '../../Directions/TableDirections/TableDirections'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { fetchDelivery, fetchDeliveryRedy } from '../../../http/mapApi'
import TableReady from '../../Directions/TableReady/TableReady'


const Ready = observer(() => {
  const { ready } = useContext(Context);

  useEffect(() => {
    try {
      fetchDeliveryRedy().then((data) => {
        ready.SetReady(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [ready]);

  return (
    <div>
      <TableReady ready={ready} />
    </div>
  );
});

export default Ready;