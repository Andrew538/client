import React, { useState } from 'react'
import TabContent from './TabContent';
import classes from './TabGuarantee.module.css'
import classNames from 'classnames';
function TabGuarantee({items}) {


    const [ active, setActive ] = useState(0);



    const openTab = e => setActive(+e.target.dataset.index);

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
    {items[active] && <TabContent {
      

      ...items[active]
      
      } />}
  </div>
  )
}

export default TabGuarantee