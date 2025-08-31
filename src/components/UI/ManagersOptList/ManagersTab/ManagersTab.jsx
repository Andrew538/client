import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useState } from 'react';
import TabContent from '../../Tab/TabContent';
import { useContext } from 'react';
import { Context } from '../../../..';
import TableDirections from '../../Directions/TableDirections/TableDirections';
import ManagersTabContent from './ManagersTabContent';
import { fetchDay } from '../../../http/mapApi';


import classNames from 'classnames';
import classes from './ManagersTab.module.css'


const ManagersTab = observer(({items}) => {
//  let userid = localStorage.getItem("c")  

  const {direction} = useContext(Context)
    

 let number = localStorage.getItem("numberTabManager");
  const [active, setActive] = useState(number);
  const [userId, setUserId] = useState('');
// localStorage.setItem("numberTabDay", '');


  const numberAc = localStorage.setItem("numberTabManager", active);
  const className = localStorage.setItem("manager", "active");

  const openTab = (e) => {

    setActive(+e.target.dataset.index[0]);
  };


  // useEffect(() =>{
  //   function tab() {
  
    
  //       let day = number + 1
  //         fetchDay(userid, day).then((data) => {
  //          direction.SetDirection(data);
      
  //         })
  
  // }
  //   tab() 
  
  // }, [direction])

    
  return (
    <div>
      <div className={classes.box}>
        {items.map((n, i) => (
          <button
            key={n.id}
            className={classNames(`tablinks ${i == active ? "active" : ""} button`, classes.tab__button)}
            
            onClick={openTab}
            data-index={i}
          >
            {n.name + " " + n.surname}
          </button>
        ))}
      </div>
      {items[active] && (
        <ManagersTabContent direction={direction} {...items[active]} />
      )}
    </div>
  );
})

export default ManagersTab