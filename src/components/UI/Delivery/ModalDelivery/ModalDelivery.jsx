import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { createCityDirectionsRady, createDelivery, createDirectionsRadyTwo, fetchDay, fetchDelivery, fetchOneCityDirectionsRady, fetchOneClient, fetchOneDeliveryNumber, fetchOneRegion, fetchOneTodaysDirections } from '../../../http/mapApi';
import classes from './ModalDelivery.module.css'
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Context } from '../../../..';

const ModalDelivery = observer(({show, onHide,  props,}) => {

    const { direction} = useContext(Context)
  

  let number = localStorage.getItem("numberTabDay");
  let managerid = localStorage.getItem("c");

  const [payment, setPayment] = useState("");
  const [client, setClient] = useState("");
  const [cityid, setCityId] = useState("");

  const [regionid, setRegionId] = useState('')
  const [region, setRegion] = useState('')
  const [daycall, setDayCall] = useState('')

  // const [deliverynumberid, setDeliveryNumberid] = useState('')
  const [datedeliverynumberid, setDateDeliveryNumberid] = useState('')
  const [directionsredyid, setDirectionsRedyid] = useState('')

  const [address, setAddress] = useState("");
  const [manager, setManager] = useState();
  const [weightusedbattery, setWeightUsedBattery] = useState(0);
  const [weightnewbatteries, setWeightNewBatteries] = useState(0);
  const [contact, setContact] = useState("");
  const [comment, setCmoment] = useState("");
  const [priceofusedbattery, setPriceUsed] = useState("");
  const [data, setData] = useState({});
//  console.log(props)
  const [statusOfDelivery, setStatusDelivery] = useState("")
  const [error, setError] = useState('')
    const [todaysdate, setTodaysDate] = useState('')
    const [citydirectionsradyid, setCityDirectionsRadyId] = useState('')


 
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
  function deliveryWeightUsedBattery() {
    if (weightusedbattery === 0) {
      const weightUsedBatteryDelivery = data.weightusedbattery;
      return weightUsedBatteryDelivery;
    } else {
      const weightUsedBatteryDelivery = weightusedbattery;
      return weightUsedBatteryDelivery;
    }
  }
  function deliveryWeightNewBatteries() {
    if (weightnewbatteries === 0) {
      const weightNewBatteriesDelivery = data.weightnewbatteries;
      return weightNewBatteriesDelivery;
    } else {
      const weightNewBatteriesDelivery = weightnewbatteries;
      return weightNewBatteriesDelivery;
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
  
  function priceUsed() {
    if (priceofusedbattery === '') {
      const priceUsed = data.priceofusedbattery;
      return priceUsed;
    } else {
      const priceUsed = priceofusedbattery;
      return priceUsed;
    }
  }
const createCityDireRedy = async (dirId, cId) => {
  const r1 = await fetchOneCityDirectionsRady(dirId, cId);
  if (!r1) {
    const cdId = await createCityDirectionsRady(cId, dirId);
    return cdId.id;
  } else {
    return r1.id;
  }
};
  
const addDelivery = async (e) => {
  e.preventDefault();
  try {

    const fetch1 = await fetchOneTodaysDirections(regionid, todaysdate)
    const dirId = await fetch1.id
    const cId =  cityid
    const payment = pay();
    const client = oneClient()
    const address = clientAddress()
    const contact = clientСontact()
    const directionid = +regionid
    const clientid = +props 
    const weightusedbattery = deliveryWeightUsedBattery()
    const weightnewbatteries =  deliveryWeightNewBatteries()
    const comment = commentDelivery()
    const dateofcreation = todaysdate
    const citydirectionsradyId = await createCityDireRedy(dirId, cId)
    const priceofusedbattery = priceUsed()

  const newDelivery = await createDelivery(
      payment,
      client,
      address,
      contact,
      directionid,
      manager,
      cityid,
      clientid,
      weightusedbattery,
      weightnewbatteries,
      comment,
      dateofcreation,
      directionsredyid,
      citydirectionsradyId,
      priceofusedbattery
    );
   
    if (newDelivery) {

      setRegionId('')
      setClient("");
      setPayment("");
      setAddress("");
      setContact("");
      setCmoment("");
      setCityId("");
      setManager("");
      setWeightNewBatteries("");
      setWeightUsedBattery("");
      onHide();

    } 
  } catch (error) {
    setError(error.response.data.message)
  }
};


  const date = new Date();
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() ).padStart(2, '0');
  const dateofcreation = `${day}.${month}.${year}`;


    useEffect(() => {
      try {
        if (show) {
          setTodaysDate(dateofcreation);

          let id = +props;
          fetchOneClient(id).then((data) => {
          setData(data);
          setCityId(data.cityid);
          setManager(data.manager);
          setRegionId(data.directionid);
          });
        }
      } catch (error) {}
    }, [show, props]);

    useEffect(() => {
      if (regionid) {
        const id = +regionid;
        fetchOneRegion(id).then((data) => {
          setRegion(data.region);
          setDayCall(data.day);
        });
      }
    }, [data, error]); 

useEffect(() => {
  if (regionid && todaysdate) {
    fetchOneTodaysDirections(regionid, todaysdate).then((data) => {
      if (!data) {
        alert("Создайт. поставку");
      } else {
        setDirectionsRedyid(data.id);
      }
    });
  }
}, [show, regionid, todaysdate]); 
 




const closeModal =() => {
   let userid = Number(managerid);

   let day = Number(number) + 1;
   fetchDay(userid, day).then((data) => {
     direction.SetDirection(data);
   });
   onHide()
  setRegionId('')
  setClient("");
  setPayment("");
  setAddress("");
  setContact("");
  setCmoment("");
  setCityId("");
  setManager("");
  setWeightNewBatteries("");
  setWeightUsedBattery("");
  setError('')
  
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
          <div className={classes.box}>

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
            
            </div>
            <div className={classes.modal__right}>
               
              <label className={classes.modal__label}>Вес новых акб (только цифры)</label> 
              <input
               className={classes.modal__input}
                placeholder="Вес новых акб"
                type="number"
                onChange={(e) => setWeightNewBatteries(e.target.value)}
              />
              <label className={classes.modal__label}>Вес Б/У акб (только цифры)</label>
              <input
               className={classes.modal__input}
                placeholder="Вес б/у"
                type="number"
                onChange={(e) => setWeightUsedBattery(e.target.value)}
              />
               <label className={classes.modal__label} htmlFor="">
                Комментарий
              </label>
              <textarea
                cols={28}
                className={classes.modal__textarea}
                type="text"
                placeholder={data.comment}
                value={comment}
                onChange={(e) => setCmoment(e.target.value)}
              />
                <label className={classes.modal__label} htmlFor="">
                Цена бу
              </label>
              <input
                className={classes.modal__input}
                type="text"
                placeholder={data.priceofusedbattery}
                value={priceofusedbattery}
                onChange={(e) => setPriceUsed(e.target.value)}
              />
            </div>
           
            
          </div>
           <div className={classes.modal__btn_box}>
            <Button className={classes.modal__btn}  onClick={closeModal}>
              Закрыть
            </Button>
             <button className={classes.modal__btn} type='submit'>Сохранить</button>            
          </div>
          </div>
         
          
        </form>
      </div>
    </Modal>
  );
})

export default ModalDelivery