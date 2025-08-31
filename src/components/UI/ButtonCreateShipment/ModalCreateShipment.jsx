import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { createDeliveryNumber, createDirectionsRady, fetchCitysOfDay, fetchOneDeliveryNumber, fetchTodaysDirections } from '../../http/mapApi';
import ButtonAddCityDirections from './ModalAddCityDirections/ButtonAddCityDirections';
import ModalAddCityDirections from './ModalAddCityDirections/ModalAddCityDirections';



const ModalCreateShipment = ({ show, onHide, props, days }) => {
  let number = localStorage.getItem("numberTabDay");

  const date = new Date() ;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  

  const dateofcreation = `${day}.${month}.${year}`;
  // const numberDay = date.getDay() + 1;
  const numberDay = Number(number) + 1;
  const [newDate, setNewDate] = useState("");
  const [today, setToday] = useState(null)
  const [region, setRegion] = useState('')
  const [directionid, setDirectionid] = useState(null)
  const [deliverynumberid, setDeliveryNumberid] = useState(null)
  const [allDirections, setAllDirections] = useState([])
  console.log(allDirections, today, days)
  const [allCityDirections, setAllCityDirections] = useState([])


 const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    setToday(numberDay);
    if (show === true) {
      const days = today;
      fetchTodaysDirections(days).then((data) => {
        setAllDirections(data);
      });
      fetchCitysOfDay(day).then((data) => {
        // console.log(data)
        setAllCityDirections(data)
      })
    } else if (onHide) {
      return;
    }

  //  if (newDate.length && show === true) {
   // }
  }, [show, today, number]);

 
  const NewShipment = async () => {
  
    const dateofcreation = newDate;

   const create1 =  await createDeliveryNumber(dateofcreation)

   const create2 = await create1.id
   // console.log(create2)  
    const newArrayDirections = {
      newDirections: function () {
        return `${this.region} ${this.day} ${this.directionid} ${this.dateofcreation} 
        ${this.deliverynumberid}`;
      },
    };

  const newRedy = []

  for (let i = 0; i < allDirections.length; i++) {
    //console.log(i)
  const delid = create2
   const {region, day, id} = allDirections[i]
   const newDirectionsRedy = Object.create(newArrayDirections)
   newDirectionsRedy.region = region
   newDirectionsRedy.day = day
   newDirectionsRedy.directionid = +id
   newDirectionsRedy.dateofcreation = dateofcreation
   newDirectionsRedy.deliverynumberid = +delid

   newRedy.push(newDirectionsRedy)
    
  }
  
// console.log(deliverynumberid)
  const arrayDirections = newRedy;
  
  const createDirRedy =  createDirectionsRady(
    deliverynumberid,
    dateofcreation,
   arrayDirections
 ).then((data) => {
   console.log(data)
    data.map((item) => {
     console.log(item.deliverynumberid);
   });
  });
  

  if(createDirRedy) (
    onHide()
  )


//   const newArrayCityDirections = {
//      newDirections: function () {
//        return `${this.region} ${this.day} ${this.directionid} ${this.dateofcreation} 
//        ${this.deliverynumberid}`;
//      },
//    };
//
//  const newRedyCityDirections = []

//  for (let i = 0; i < allDirections.length; i++) {
//  const delid = create2
//   const {region, day, id} = allDirections[i]
//   const newDirectionsRedy = Object.create(newArrayDirections)
//   newDirectionsRedy.region = region
//   newDirectionsRedy.day = day
//   newDirectionsRedy.directionid = +id
//   newDirectionsRedy.dateofcreation = dateofcreation
//   newDirectionsRedy.deliverynumberid = +delid

//   newRedy.push(newDirectionsRedy)
    
//  }
        
 

    // }
  };

  useEffect(() => {
    setToday(numberDay);
    setNewDate(dateofcreation);

  }, [ dateofcreation, number]);




   


  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div>
        <h1>Добавить клиента</h1>
        {/* <ButtonAddCityDirections
            openModal={setModalShow}/>
        <ModalAddCityDirections
          show={modalShow} 
          onHide={() => setModalShow(false)} 
        /> */}
        <form action="">
          <button type="submit">Сохранить</button>
          <button onClick={() => NewShipment()} type='button'>Создать поставку</button>
          <button type="button">Закрыть</button>
        </form>
      </div>
    </Modal>
  );
}

export default ModalCreateShipment