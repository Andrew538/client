import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../../..";
import TableDirections from "../../Directions/TableDirections/TableDirections";
import { useEffect } from "react";
import { fetchDay, fetchDeliveryRedy, fetchOneClient } from "../../../http/mapApi";
import ExportToExcel from "../../SaveExcel/ExportToExcel";
import Spinner from 'react-bootstrap/Spinner';
import ButtonCreateShipment from "../../ButtonCreateShipment/ButtonCreateShipment";
import ModalCreateShipment from "../../ButtonCreateShipment/ModalCreateShipment";
import Loader from "../../Loader/Loader";

const Monday = observer(({ id }) => {
  const {direction} = useContext(Context);
  let number = localStorage.getItem("numberTabDay");
    const [loading, setLoading] = useState(false)
  const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let userid = Number(id);
        // await fetchDeliveryRedy().then((data) => {
        //   // console.log(data)
        // });

        let day = number + 1;
        await fetchDay(userid, day).then((data) => {
          direction.SetDirection(data);
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // check().then((data) =>{
    //  setUserId(Number(data.id))
    // })
  }, [direction, number, id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ButtonCreateShipment
         openModal={setModalShow}
      />
      <ModalCreateShipment
      show={modalShow} 
          onHide={() => setModalShow(false)} 
      />
      <TableDirections direction={direction} id={id} />
      
    </div>
  );
});

export default Monday;
