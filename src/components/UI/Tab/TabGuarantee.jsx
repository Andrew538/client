import React, { useEffect, useState } from 'react'
import TabContent from './TabContent';
import classes from './TabGuarantee.module.css'
import classNames from 'classnames';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import { Link, NavLink } from 'react-router-dom';
function TabGuarantee({items}) {

    // let num = localStorage.setItem('active', 0)
    useEffect(() => {

    }, [])
    let number = localStorage.getItem('numberTab')

    
    let activeClass = localStorage.getItem('activeCl' , items.i)
    const [ active, setActive ] = useState(number);


    const openTab = e => setActive(+e.target.dataset.index);

    console.log(active)
    localStorage.setItem('numberTab', active )


  return (
    <div>
     
    <div className={classNames(classes.tab)}>
      {items.map((n, i) => (
          

        <button key={n.index}
          className={`tablinks ${i === active ? 'active' : ''}`}
          onClick={openTab}
          data-index={i}
        >{n.title}</button>
      ))}
    </div>
    {items[number] && <TabContent {
      

      ...items[number]
      
      } />}
  </div>
  )
}

export default TabGuarantee