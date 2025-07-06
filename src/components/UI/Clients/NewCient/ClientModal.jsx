import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import classes from './ClientModal.module.css'
import { createClient, fetchCity } from '../../../http/mapApi';
import { useEffect } from 'react';
import ClientsSelectList from './ClientsSelect/ClientsSelectList';
import { useMemo } from 'react';
import { useContext } from 'react';
import { Context } from '../../../..';
import { allUsers } from '../../../http/userAPI';
import { useCallback } from 'react';

const ClientModal = observer(({ show, onHide, props }) => {
  const {users, allcity, allUser} = useContext(Context)
  const [client, setClient] = useState("");
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const [manager, setManager] = useState('');
  const [cityid, setCityId] = useState('');

  const [weightusedbattery, setWeightUsedBattery] = useState(0)
  const [weightnewbatteries, setWeightNewBatteries] = useState(0)
  const [comment, setCmoment] = useState("");

  // console.log(weightusedbattery)

  const [listCity, setListCity] = useState([])
  const [listManager, setListManager] = useState([])



const addClient = async (e) => {
    e.preventDefault();
    try {
     const newClient = await createClient(client, payment, address, contact, manager,cityid, weightusedbattery, weightnewbatteries, comment )
     console.log(newClient)
      if(newClient) {
        setClient('')
        setPayment('')
        setAddress('')
        setContact('')
        setCmoment('')
        setCityId('')
        setManager('')
        setWeightNewBatteries('')
        setWeightUsedBattery('')
        onHide()
      }
    } catch (error) {
      console.log(error)
    }
}

  const closeModal = () => {
    onHide();
  
  };



  useEffect(() =>{
    try {
      fetchCity().then((data) => {
        allcity.SetAllCity(data)
      })
      allUsers().then((data) => {
        allUser.setAllUser(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [show, onHide, props ])

    let optionsAllCity = useMemo(() => {
   
      const newAllCity = allcity.allcity.map((item) => {
        return item;
      });
      setListCity(newAllCity);
      return listCity.map((item) => (
        <option key={item.id} value={item.id}>
          {item.city}
        </option>
      ));
    }, [ allcity.allcity, show]);

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
    }, [allUser.allUser, show]);


  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className={classes.content}>
        <h1>Добавить клиента</h1>
        <form action="" onSubmit={addClient}>
          <input
            placeholder="Организация"
            type="text"
            onChange={(e) => setClient(e.target.value)}
          />
           <input
            placeholder="Способ оплаты"
            type="text"
            onChange={(e) => setPayment(e.target.value)}
          />
          <input
            placeholder="Адрес доставки"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            placeholder="Контактные данные"
            type="text"
            onChange={(e) => setContact(e.target.value)}
          />
             {/* <input
            placeholder="Менеджер"
            type="text"
            onChange={(e) => setManager(e.target.value)}
          /> */}
          <ClientsSelectList
              allCity={cityid}
              setAllCity={setCityId}
              optionsAllCity={optionsAllCity}
              manager={manager}
              setManager={setManager}
              optionsManager={optionsManager}
             
              
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
             
          <input
            placeholder="Комментарий"
            type="text"
            onChange={(e) => setCmoment(e.target.value)}
          />
      
          <button type="submit">Сохранить</button>
          <button type="button" onClick={closeModal}>Закрыть</button>
        </form>
      </div>
    </Modal>
  )
})

export default ClientModal