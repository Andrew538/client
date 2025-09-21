import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import classes from './DirectionModal.module.css' 
import { createRegion, fetchAllUserId } from '../../../http/mapApi';
import { useState } from 'react';
import { Context } from '../../../..';
import Select from 'react-select';
import  './DirectionModal.css'


const DirectionModal = observer(({ show, onHide, props }) => {
  const [region, setRegion] = useState("");
      const [day, setDay] = useState('')
    
  
  const {users} = useContext(Context)
  const [id, setId] = useState([])

  const addRegion = async (e) => {
    e.preventDefault();
    try {
      const userID = await fetchAllUserId()
      const arrUserId = await userID.map(user => user.id)

      const userid = await arrUserId;
     
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

  // useEffect(() => {
    
  //   fetchAllUserId().then((data) => {
  //      console.log(data.map((item) => { console.log(item.id)}))
  //   })
  // }, [show])
  
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
        <h1 className={classes.title}>Создать направление</h1>
        <form action="" onSubmit={addRegion} className={classes.form__body}>
          <input
            placeholder="Направление доставки"
            type="text"
            onChange={(e) => setRegion(e.target.value)}
            className={classes.form__input}
          ></input>
          <Select
            defaultValue={options[0]}
            onChange={(day) => setDay(day.value)}
            options={options}
            classNamePrefix="react-select"
            className="react-select-container"
          />
          <div className={classes.form__button__box}>
            <button className={classes.form__button} type="button" onClick={closeModal}>
              Закрыть
            </button>
            <button className={classes.form__button} type="submit">Сохранить</button>

          </div>
        </form>
      </div>
    </Modal>
  );
});

export default DirectionModal;