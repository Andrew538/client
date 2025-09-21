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
import ButtonCreateShipment from '../../ButtonCreateShipment/ButtonCreateShipment'
import ModalCreateShipment from '../../ButtonCreateShipment/ModalCreateShipment'
import Loader from '../../Loader/Loader'

const Tuesday = observer(({ id }) => {
  const { direction } = useContext(Context);
  let number = localStorage.getItem("numberTabDay");
  const [modalShow, setModalShow] = useState(false);
      const [loading, setLoading] = useState(false)
  
  // console.log(id)
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
      <ButtonCreateShipment openModal={setModalShow} />
      <ModalCreateShipment
        days={number}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <TableDirections direction={direction} />
    </div>
  );
});

export default Tuesday; 