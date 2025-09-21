import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { createCity, fetchRegion } from "../../http/mapApi";
import { Context } from "../../..";
import { useContext } from "react";
import CitySelect from "./CitySelect/CitySelect";
import { useEffect } from "react";
import classes from './CityModal.module.css' 


const CityModal = observer(({ show, onHide, props }) => {
  const [listDirection, setListDirection] = useState([]);
  const [region, setRegion] = useState("");
  // directionid - [0] - id напрвления, [2] - день обзвона
  const [directionid, setDirectionid] = useState([]);
  const [city, setCity] = useState("");
  const [day, setDay] =  useState('')
  // console.log(day)
  const { users, alldirection } = useContext(Context);
  const addCity = async (e) => {
    e.preventDefault();
    try {
      const userid = users.id;
      const addC = await createCity(city, directionid[0], day);

      if (addC) {
        setDirectionid("");
        onHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    onHide();
    setRegion("");
    setDirectionid("");
  };

  useEffect(() => {
    if (show == false) {
      setDirectionid("");
    }
    try {
      fetchRegion().then((data) => {
        alldirection.SetAllDirection(data);
      });
      setDay(directionid[2])
    } catch (error) {
      console.log(error);
    }
  }, [alldirection, show, directionid]);

  let options = useMemo(() => {
    const newDirection = alldirection.alldirection.map((item) => {
      return item;
    });

    setListDirection(newDirection);

    return listDirection.map((item) => (
      <option key={item.id} value={[item.id, item.day]}>
        {item.region}
      </option>
    ));
  }, [alldirection.alldirection, show, users.users]);

  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className={classes.content}>
        <h1 className={classes.title}>Добавить город</h1>
        <form className={classes.form__body} action="" onSubmit={addCity}>
          <CitySelect
            value={directionid}
            onChange={setDirectionid}
            options={options}
            defaultValue="Выберите направление доставки"
            show={show}
           
          />
          <input
            placeholder="Город"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className={classes.form__input}
          ></input>
          <div className={classes.form__button__box}>
           
            <button
              className={classes.form__button}
              type="button"
              onClick={closeModal}
            >
              Закрыть
            </button>
             <button className={classes.form__button} type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
});

export default CityModal;
