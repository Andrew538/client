import { observer } from 'mobx-react-lite'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../..';
import classes from './ModalUpdateClientReady.module.css'
import Button from 'react-bootstrap/esm/Button';
import { fetchDeliveryRedy, fetchOneClientDeliveryReady, updateClientDelivery } from '../../http/mapApi';
const ModalUpdateClientReady = observer(( {show, onHide,  props}) => {
    const {ready} = useContext(Context);

    const [payment, setPayment] = useState("");
    const [client, setClient] = useState("");
    const [cityid, setCityId] = useState("");
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [manager, setManager] = useState();
    const [contact, setContact] = useState("");
    const [weightusedbattery, setWeightUsedBattery] = useState(0);
    const [weightnewbatteries, setWeightNewBatteries] = useState(0);
    const [comment, setCmoment] = useState("");
    const [priceofusedbattery, setPriceUsed] = useState("");        
    const [data, setData] = useState({});
    const [statusOfDelivery, setStatusDelivery] = useState("Dlivery");
    const [error, setError] = useState("");
 

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
    useEffect(() => {
      let id = +props;
  
      try {
        if (show && props) {
          fetchOneClientDeliveryReady(id).then((data) => {
          setData(data);
          setCityId(data.cityid);
          setManager(data.manager);
          setRegion(data.directionid);
          setWeightNewBatteries(data.weightnewbatteries);
          setWeightUsedBattery(data.weightusedbattery);
          setCmoment(data.comment)
          });
         
        }
      } catch (error) {}
    }, [show, props,manager]);

    function update() {
      fetchDeliveryRedy().then((data) => {
      ready.SetReady(data);
    });

    }


  const addDelivery = async (e) => {
    e.preventDefault();
    try {
      const id = +props;
      const payment = pay();
      const client = oneClient();
      const address = clientAddress();
      const contact = clientСontact();
      const directionid = +region;
      // const manager = manager;
      // const cityid = cityid;
      const weightusedbattery =  deliveryWeightUsedBattery();
      const weightnewbatteries =  deliveryWeightNewBatteries();
      const comment = commentDelivery();
    const priceofusedbattery = priceUsed()

      const updateOneClient = await updateClientDelivery(
        id,
        payment,
        client,
        address,
        contact,
        directionid,
        manager,
        cityid,
        weightusedbattery,
        weightnewbatteries,
        comment,
      priceofusedbattery
       
      );
      //  console.log(updateOneClient)
      if ( updateOneClient) {
    
        update();
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
        setError("");
      }
    } catch (error) {
      // setError(error.response.data.message)
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
          <div className={classes.modal__content}>
            <div className={classes.modal__content__left}>
              <label className={classes.modal__label}>
                Способ оплаты
                <input
                  className={classes.modal__input}
                  type="text"
                  placeholder={data.payment}
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                />
              </label>

              <label className={classes.modal__label}>
                Клиент
                <input
                  className={classes.modal__input}
                  type="text"
                  placeholder={data.client}
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                />
              </label>

              <label className={classes.modal__label}>
                Адрес доставки
                <textarea
                  className={classes.modal__textarea}
                  type="text"
                  placeholder={data.address}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <label className={classes.modal__label}>
                Контакты
                <textarea
                  className={classes.modal__textarea}
                  type="text"
                  placeholder={data.contact}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
            </div>
            <div className={classes.modal__content__right}>
              <label className={classes.modal__label}>
                Вес новых АКБ
                <input
                 className={classes.modal__input}
                  placeholder={data.weightnewbatteries}
                  type="number"
                  onChange={(e) => setWeightNewBatteries(e.target.value)}
                />
              </label>
              <label className={classes.modal__label}>
                Вес Б/У АКБ
                <input
                 className={classes.modal__input}
                placeholder={data.weightusedbattery}
                type="number"
                onChange={(e) => setWeightUsedBattery(e.target.value)}
              />
              </label>
              
              <label className={classes.modal__label} >
                Цена бу
                <input
                className={classes.modal__input}
                type="text"
                placeholder={data.priceofusedbattery}
                value={priceofusedbattery}
                onChange={(e) => setPriceUsed(e.target.value)}
              />
              </label>
              
              <label className={classes.modal__label} >
                Комментарий
                <textarea
                className={classes.modal__textarea}
                type="text"
                placeholder={data.comment}
                value={comment}
                onChange={(e) => setCmoment(e.target.value)}
              />
              </label>
              
            </div>
          </div>

          <div className={classes.modal__btn_box}>
            <Button className={classes.modal__btn} onClick={closeModal}>
              Закрыть
            </Button>
            <button className={classes.modal__btn} type="submit">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
})

export default ModalUpdateClientReady