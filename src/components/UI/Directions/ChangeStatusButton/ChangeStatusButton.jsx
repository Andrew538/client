import React, { useContext, useEffect, useState } from "react";
import { fetchDeliveryRedy, updateDeliveryNumber } from "../../../http/mapApi";
import { observer } from "mobx-react-lite";
import { Context } from "../../../..";
import classes from '../TableReady/TableReady.module.css'

const ChangeStatusButton = observer(({ id }) => {
  const { ready } = useContext(Context);

  const [status, setStatus] = useState("");

  const updateStatus = async () => {
    console.log(id);
    await updateDeliveryNumber(id).then((data) => {
      setStatus(data);
    });
  };
  useEffect(() => {
    try {
      if (status) {
        fetchDeliveryRedy().then((data) => {
          ready.SetReady(data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [status]);

  return <button className={classes.button__arhive} onClick={updateStatus}>В архив</button>;
});

export default ChangeStatusButton;
