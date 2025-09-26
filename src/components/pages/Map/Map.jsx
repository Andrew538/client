import React, {  useEffect} from 'react'
import { observer } from 'mobx-react-lite';
import ButtonCreateDirection from '../../UI/Directions/DirectionButton/ButtonCreateDirection';
import DirectionModal from '../../UI/Directions/CreateDirection/DirectionModal';
import { useState } from 'react';
import { fetchRegion } from '../../http/mapApi';
import { useContext } from 'react';
import { Context } from '../../..';
import ButtonCrateCity from '../../UI/City/CityButton/ButtonCrateCity';
import CityModal from '../../UI/City/CityModal';
import Monday from '../../UI/CallDays/CallDaysPages/Monday ';
import Tuesday from '../../UI/CallDays/CallDaysPages/Tuesday ';
import Wednesday from '../../UI/CallDays/CallDaysPages/Wednesday';
import Thursday from '../../UI/CallDays/CallDaysPages/Thursday';
import Friday from '../../UI/CallDays/CallDaysPages/Friday';

import SuppliesArchive from '../../UI/CallDays/CallDaysPages/SuppliesArchive';
import ClientModal from '../../UI/Clients/NewCient/ClientModal';
import ButtonCreateClient from '../../UI/Clients/NewCient/ClientButton/ButtonCreateClient';
import ManagersOptList from '../../UI/ManagersOptList/ManagersOptList';
import classNames from 'classnames';
import classes from './Map.module.css'
import Ready from '../../UI/CallDays/CallDaysPages/Ready';




const Map = observer(() => {
  const [modalShow, setModalShow] = useState(false);
  const [modalCityShow, setModalCityShow] = useState(false);
  const [modalClientShow, setModalClientShow] = useState(false);

  const { direction } = useContext(Context);


  useEffect(() => {
    try {
     // fetchRegion().then((data) => {
     //   setD(data);
     // });

      // check().then((data) => {
      //   const directionID = 1;
      //   fetchRegion(Number(directionID)).then((data) => {
      //     direction.SetDirection(data);

      //   });
      // });
    } catch (error) {
      console.log(error);
    }
  }, [direction.direction]);

  const items = [
    { title: "Понедельник", content: <Monday />, indexd: 0 },
    { title: "Вторник", content: <Tuesday />, indexd: 1 },
    { title: "Среда", content: <Thursday />, indexd: 2 },
    { title: "Четверг", content: <Wednesday/>, indexd: 3 },
    { title: "Пятница", content: <Friday />, indexd: 4 },
    { title: "Готовы к отгрузке", content: <Ready />, indexd: 5 },
    { title: "Архив поставок", content: <SuppliesArchive />, indexd: 6 },
  ]; 

  return (
    <div className={classes.box}>
      <div className={classes.box__left}>
        <ManagersOptList />
      </div>
      <div className={classes.box__right}>
        {/* <h3 className={classes.title}>Информация</h3>
        <p className={classes.text}>Направление {'->'}<br/> Город {'->'} Клиет</p> */}
        <ol className={classes.box__list}>
          <li className={classes.box__list__item}>
            <ButtonCreateDirection openModal={setModalShow} />
          </li>
          <li className={classes.box__list__item}>
            <ButtonCrateCity openModal={setModalCityShow} />
          </li>
          <li className={classes.box__list__item}>
            <ButtonCreateClient openModal={setModalClientShow} />
          </li>
        </ol>
        <DirectionModal 
          show={modalShow} 
          onHide={() => setModalShow(false)} 
        />
        <CityModal
          show={modalCityShow}
          onHide={() => setModalCityShow(false)}
        />
        <ClientModal
          show={modalClientShow}
          onHide={() => setModalClientShow(false)}
        />
      </div>
    </div>
  );
});

export default Map