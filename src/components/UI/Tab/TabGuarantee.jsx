import React, { useEffect, useState } from 'react'
import TabContent from './TabContent';
import classes from './TabGuarantee.module.css'
import classNames from 'classnames';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import { Link, NavLink } from 'react-router-dom';
function TabGuarantee({items}) {

    let number = localStorage.getItem('numberTab' )
    const [ active, setActive ] = useState(number);

    const openTab = e => setActive(+e.target.dataset.index[0]);

    const numberAc = localStorage.setItem('numberTab', active )
    const className = localStorage.setItem('cl', 'active')



  return (
    <div>
     
    <div className={classNames(classes.tab)}>
      {items.map((n, i) => (
      
        
        <button key={n.index}

          className={`tablinks ${i == active ? 'active' : ''}`}
          onClick={openTab}
          data-index={i}
         
        >{n.title}</button>
      ))}
    </div>
    {items[active] && <TabContent {
      

      ...items[active]
      
      } />}
  </div>
  )
}

export default TabGuarantee