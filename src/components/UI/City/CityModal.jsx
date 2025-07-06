import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { createCity, fetchRegion } from "../../http/mapApi";
import { Context } from "../../..";
import { useContext } from "react";
import CitySelect from "./CitySelect/CitySelect";
import { useEffect } from "react";

const CityModal = observer(({ show, onHide, props }) => {
  const [listDirection, setListDirection] = useState([]);
  const [region, setRegion] = useState("");
  const [directionid, setDirectionid] = useState("");
  const [city, setCity] = useState("");

  const { users, alldirection } = useContext(Context);
 // console.log(users)
  const addCity = async (e) => {
    e.preventDefault();
    try {
      const userid = users.id;
      const addC = await createCity(city, region, directionid, userid);

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
    } catch (error) {
      console.log(error);
    }
  }, [alldirection, show]);

  let options = useMemo(() => {
    // const allDirection = listDirection.filter(
    //   (item, index) => (listDirection.indexOf(item) == index) & (item != "")
    // );
      // console.log(allDirection)

    const newDirection = alldirection.alldirection.map((item) => {
      return item;
    });

    setListDirection(newDirection);

    return listDirection.map((item) => (
      <option key={item.id} value={item.id}>
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
      <div>
        <h1>Создать направление</h1>
        <form action="" onSubmit={addCity}>
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
          ></input>
          <button type="submit">Сохранить</button>
          <button type="button" onClick={closeModal}>
            Закрыть
          </button>
        </form>
      </div>
    </Modal>
  );
});

export default CityModal;
