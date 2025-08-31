import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { addStatusDelivery, fetchDay, fetchOneClient, updateClient } from '../../http/mapApi';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalUpdateClient.module.css'
import { useContext } from 'react';
import { Context } from '../../..';


const ModalUpdateClient = observer(({show, onHide,  props,}) => {
     
    const {direction} = useContext(Context);
    let managerid = localStorage.getItem("c");
    let number = localStorage.getItem("numberTabDay");
    const [payment, setPayment] = useState("");
    const [client, setClient] = useState("");
    const [cityid, setCityId] = useState("");
    const [region, setRegion] = useState('')
    const [address, setAddress] = useState("");
    const [manager, setManager] = useState();
    const [contact, setContact] = useState("");
    const [comment, setCmoment] = useState("");
    const [data, setData] = useState({});
    const [statusOfDelivery, setStatusDelivery] = useState("Dlivery")
    const [error, setError] = useState('')

  
 
  function pay() {
    if (payment === "") {
      const pay = data.payment;
      return pay;
    } else {
      const pay = payment;
      return pay;
    }
  }

  function oneClient() {
    if (client === "") {
      const clientOne = data.client;
      return clientOne;
    } else {
      const clientOne = client;
      return clientOne;
    }
  }

  function clientAddress() {
    if (address === "") {
      const addressClient = data.address;
      return addressClient;
    } else {
      const addressClient = address;
      return addressClient;
    }
  }

  function clientСontact() {
    if (contact === "") {
      const contactClient = data.contact;
      return contactClient;
    } else {
      const contactClient = contact;
      return contactClient;
    }
  }


  function commentDelivery() {
    if (comment === '') {
      const commentDelivery = data.comment;
      return commentDelivery;
    } else {
      const commentDelivery = comment;
      return commentDelivery;
    }
  }


    useEffect(() => {
      let id = +props;

      try {
        if (show && props) {
          fetchOneClient(id).then((data) => {
     
            setData(data);
            setCityId(data.cityid);
            setManager(data.manager);
            setRegion(data.directionid)
          });
         
        }
      } catch (error) {}
    }, [show, props, managerid]);

    function update() {
      let userid = Number(managerid);

      let day = Number(number) + 1;
      fetchDay(userid, day).then((data) => {
        direction.SetDirection(data);
      });
    }

const addDelivery = async (e) => {
  e.preventDefault();
  try {
    const id = +props
    const payment = pay();
    const client = oneClient()
    const address = clientAddress()
    const contact = clientСontact()
    const directionid = +region
    const comment = commentDelivery()
    const updateOneClient = await updateClient(
        id,
      payment,
      client,
      address,
      contact,
      directionid,
      manager,
      cityid,
      comment,
    );
    //  console.log(newDelivery)
    if ( updateOneClient) {
        
      const id = +props
      const statusDelivery = statusOfDelivery
      addStatusDelivery(id, statusDelivery)
      update()
      setClient("");
      setPayment("");
      setAddress("");
      setContact("");
      setCmoment("");
      setCityId("");
      setManager("");
      onHide();
      setError('')
    }
  } catch (error) {
    setError(error.response.data.message)
  }
};

const closeModal =() => {
  onHide()
  setClient("");
  setPayment("");
  setAddress("");
  setContact("");
  setCmoment("");
  setCityId("");
  setManager("");
  onHide();
  setError('')
  console.clear()
} 

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
      <div>{error}</div>
        <form className={classes.modal__box} onSubmit={addDelivery}>
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
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Клиент
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.client}
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Адрес доставки
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Контакты
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.contact}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <label className={classes.modal__label} htmlFor="">
                Комментарий
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.comment}
                value={comment}
                onChange={(e) => setCmoment(e.target.value)}
              />

            </div>
          </div>

          <div className={classes.modal__btn_box}>          
            <Button className={classes.modal__btn}  onClick={closeModal}>
              Закрыть
            </Button>           
             <button className={classes.modal__btn} type='submit'>Сохранить</button>            
          </div>
        </form>
      </div>
    </Modal>
  );
})

export default ModalUpdateClient