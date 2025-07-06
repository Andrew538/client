import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import classes from './Direction.module.css'
import { createRegion } from '../../../http/mapApi';
import { useState } from 'react';
import { Context } from '../../../..';
import Select from 'react-select';



const DirectionModal = observer(({ show, onHide, props }) => {
  const [region, setRegion] = useState("");
      const [day, setDay] = useState('')
    
  
  const {users} = useContext(Context)
  const [id, setId] = useState([])

  const addRegion = async (e) => {
    e.preventDefault();
    try {
      const userid = users.id;
     
      const addRegion = await createRegion(region, day ,userid);
      if (addRegion) {
        setRegion("");
        onHide();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    onHide();
    setRegion("");
  };

  
    const options = [
        { label: 'Выберите день обзвона'},
        { value: 1, label: 'Понедельник'},
        { value: 2, label: 'Вторник'},
        { value: 3, label: 'Среда'},
        { value: 4, label: 'Четверг'},
        { value: 5, label: 'Пятница'},
    ];


  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className={classes.content}>
        <h1>Создать направление</h1>
        <form action="" onSubmit={addRegion}>
          <input
            placeholder="Направление доставки"
            type="text"
            onChange={(e) => setRegion(e.target.value)}
          ></input>
          <Select
              defaultValue={options[0]}
              onChange={(day) => setDay(day.value)}
              options={options}
          />
          <button type="submit">Сохранить</button>
          <button type="button" onClick={closeModal}>Закрыть</button>
        </form>
      </div>
    </Modal>
  );
});

export default DirectionModal;