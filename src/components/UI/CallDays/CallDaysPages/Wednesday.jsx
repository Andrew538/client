import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import TableDirections from "../../Directions/TableDirections/TableDirections";
import { Context } from "../../../..";
import { fetchDay } from "../../../http/mapApi";
import Loader from "../../Loader/Loader";
import ButtonCreateShipment from "../../ButtonCreateShipment/ButtonCreateShipment";
import ModalCreateShipment from "../../ButtonCreateShipment/ModalCreateShipment";

const Wednesday = observer(({ id }) => {
  const { direction } = useContext(Context);
  let number = localStorage.getItem("numberTabDay");
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let days = 1;
        let userid = id;

        let day = Number(number) + days;

        fetchDay(userid, day).then((data) => {
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
        <ButtonCreateShipment
         openModal={setModalShow}
      />
      <ModalCreateShipment
      show={modalShow} 
          onHide={() => setModalShow(false)} 
      />
      <TableDirections direction={direction} />
    </div>
  );
});

export default Wednesday;
