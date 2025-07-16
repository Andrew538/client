import { observable } from 'mobx';
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { fetchOneClient } from '../../../http/mapApi';
import classes from './ModalDelivery.module.css'
import Button from 'react-bootstrap/esm/Button';

const ModalDelivery = ({show, onHide,  props}) => {

  const [data, setData] = useState({});

  const [dateOne, setDate] = useState("");
  const [client, setclient] = useState("");
  const [city, setCity] = useState("");

  const [manager, setManager] = useState("");
  const [product, setProduct] = useState("");

  const [weightusedbattery, setWeightUsedBattery] = useState(0);
  const [weightnewbatteries, setWeightNewBatteries] = useState(0);

    let id = +props

  console.log(data)
    useEffect(() => {
      try {
        if(id) {
 fetchOneClient(id).then(data => setData(data))
        }
      
      } catch (error) {
        
      }
        
    }, [show])

  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={classes.modal__wrapper}>
        <form className={classes.modal__box}>
          <h2 className={classes.modal__title}>Данные для доставки</h2>
          <div className={classes.madal__content}>
            <div className={classes.modal__left}>
              <label className={classes.modal__label} htmlFor="">
                Способ оплаты
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.payment}
                value={dateOne}
                onChange={(e) => setDate(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Клиент
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.client}
                value={client}
                onChange={(e) => setclient(e.target.value)}
              />

              <label className={classes.modal__label} htmlFor="">
                Адрес доставки
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.address}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <label className={classes.modal__label} htmlFor="">
                Контакты
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.contact}
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Комментарий
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.comment}
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <input
                placeholder="Вес новых акб"
                type="number"
                onChange={(e) => setWeightNewBatteries(e.target.value)}
              />
              <input
                placeholder="Вес б/у"
                type="number"
                onChange={(e) => setWeightUsedBattery(e.target.value)}
              />
            </div>
          </div>

          <div className={classes.modal__btn_box}>
            {/* <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button> */}
            <Button className={classes.modal__btn} onClick={onHide}>
              Закрыть
            </Button>

            {/* <button
              className={classes.modal__btn}
              onClick={() => newRec(data.id)}
            >
              Сохранить
            </button> */}
            {/* <button className={classes.modal__btn} type='submit'>Сохранить</button>            */}
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalDelivery