import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import classes from './ClientModal.module.css'
import { createClient, fetchCity, fetchDay, fetchRegion } from '../../../http/mapApi';
import { useEffect } from 'react';
import ClientsSelectList from './ClientsSelect/ClientsSelectList';
import { useMemo } from 'react';
import { useContext } from 'react';
import { Context } from '../../../..';
import { allUsers } from '../../../http/userAPI';
import CitySelect from '../../City/CitySelect/CitySelect';

const ClientModal = observer(({ show, onHide, props }) => {
  const {allcity, allUser, alldirection, direction} = useContext(Context)
  let number = localStorage.getItem("numberTabDay");
  let managerid = localStorage.getItem("c");

  const [client, setClient] = useState("");
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [manager, setManager] = useState("");
  const [cityid, setCityId] = useState("");
  const [getCity, setGetCity] = useState([])
  const [directionid, setDirectionid] = useState("");
  const [comment, setCmoment] = useState("");
  const [listCity, setListCity] = useState([]);
  const [listManager, setListManager] = useState([]);
  const [listDirection, setListDirection] = useState([]);


  const addClient = async (e) => {
      e.preventDefault();
      try {
      const weightusedbattery = 0
      const  weightnewbatteries = 0
      const newClient = await createClient(client, payment, address, contact, directionid, manager, cityid,  weightusedbattery, weightnewbatteries, comment )
        let userid = Number(managerid);

        let day = Number(number) + 1;
        fetchDay(userid, day).then((data) => {
          direction.SetDirection(data);
        });
        console.log(newClient);
        if (newClient) {
          clearForm ()
          onHide()
        }
      } catch (error) {
        console.log(error)
      }
  }
  const clearForm = () => {
    setDirectionid("");
    setListCity([]);
    setClient("");
    setPayment("");
    setAddress("");
    setContact("");
    setCmoment("");
    setCityId("");
    setManager("");
  };

  const closeModal = () => {
    clearForm()
    onHide()
  }
 
  useEffect(() =>{
    try {

      allUsers().then((data) => {
        allUser.setAllUser(data);
      });
      fetchRegion().then((data) => {
        alldirection.SetAllDirection(data);
      });

      if (onHide) {
        clearForm();
      }
    } catch (error) {
      console.log(error)
    }
  }, [show, onHide, props, ])



    let options = useMemo(() => {
      // const allDirection = listDirection.filter(
      //   (item, index) => (listDirection.indexOf(item) == index) & (item != "")
      // );
      // console.log(allDirection)

      

      const newDirection = alldirection.alldirection.map((item) => {
        return item;
      });

      setListDirection(newDirection);
      fetchCity(Number(directionid)).then((data) => {
        allcity.SetAllCity(data);
       
      });
      return listDirection.map((item) => (
        <option key={item.id} value={item.id}>
          {item.region}
        </option>
      ));
    }, [alldirection.alldirection, show, directionid]);

  let optionsAllCity = useMemo(() => {

  if(options.length) {
  
 const newAllCity = allcity.allcity.map((item) => {
      return item;
    });
    setListCity(newAllCity);
    return listCity.map((item) => (
      <option key={item.id} value={item.id}>
        {item.city }   
      </option>
    ));
  }
   
  }, [ options, allcity.allcity,]);


  

  let optionsManager = useMemo(() => {
    const newAllManager = allUser.allUser.map((item) => {
      return item;
    });
    setListManager(newAllManager);
    return listManager.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name + ' ' + item.surname} 
      </option>
    ));
  }, [options,  allUser.allUser, ]);

 
  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className={classes.modal__wrapper}>
        <form className={classes.modal__form} onSubmit={addClient}>
          <div className={classes.modal__box}>
                      <h1 className={classes.modal__title}>Добавить клиента</h1>

            <div className={classes.modal__content}>

              <div className={classes.modal__content__left}>
                <label className={classes.modal__label}>
                  Название организации
                  <input
                    className={classes.modal__input}
                    placeholder="Организация"
                    required
                    type="text"
                    onChange={(e) => setClient(e.target.value)}
                  />
                </label>
                <label className={classes.modal__label}>
                  Способ оплаты
                  <input
                    className={classes.modal__input}
                    placeholder="Способ оплаты"
                    type="text"
                    required
                    onChange={(e) => setPayment(e.target.value)}
                  />
                </label>
                <label className={classes.modal__label}>
                  Адрес доставки
                  <textarea
                    cols={28}
                    className={classes.modal__textarea}
                    placeholder="Адрес доставки"
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
                <label className={classes.modal__label}>
                  Контакты
                  <textarea
                    cols={28}
                    className={classes.modal__textarea}  
                    placeholder="Контактные данные"
                    type="text"
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
              </div>
              <div className={classes.modal__content__right}>
                <CitySelect
                  value={directionid}
                  onChange={setDirectionid}
                  options={options}
                  defaultValue="Выберите направление доставки"
                  //show={show}
                />
                <ClientsSelectList
                  allCity={cityid}
                  // dirId={directionid}
                  setAllCity={setCityId}
                  optionsAllCity={optionsAllCity}
                  manager={manager}
                  setManager={setManager}
                  optionsManager={optionsManager}
                />
                <label className={classes.modal__label}>
                  Комментарий
                  <textarea
                    cols={28}
                    className={classes.modal__textarea}
                    placeholder="Комментарий"
                    type="text"
                    onChange={(e) => setCmoment(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className={classes.modal__btn_box}>
              <button className={classes.modal__btn} type="submit">Сохранить</button>
              <button className={classes.modal__btn} type="button" onClick={closeModal}>
                Закрыть
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
})

export default ClientModal