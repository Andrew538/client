import { observer } from 'mobx-react-lite'
import React from 'react'
import { useState } from 'react';
import TabContent from '../../Tab/TabContent';
import { useContext } from 'react';
import { Context } from '../../../..';

const DirectionTab = observer(({items}) => {

 let number = localStorage.getItem("numberTabDirection");
  const [active, setActive] = useState(number);


  const numberAc = localStorage.setItem("numberTabDirection", active);
  const className = localStorage.setItem("direction", "active");

  const openTab = (e) => {


    setActive(+e.target.dataset.index[0]);
  };

    
  return (
    <div>
      <div>
        {items.map((n, i) => (
          <button
            key={n.id}
            className={`tablinks ${i == active ? "active" : ""}`}
            onClick={openTab}
            data-index={i}
          >
            {n.region}
          </button>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  )
})

export default DirectionTab