import React, { useContext,  useState } from 'react'
import CallDaysTabContent from './CallDaysTabContent';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../..';

const CallDaysTab = observer(({items, id}) => {
  
  let number = localStorage.getItem("numberTabDay");
  const [active, setActive] = useState(number);

  const numberAc = localStorage.setItem("numberTabDay", active);
  const className = localStorage.setItem("cl", "active");

  const openTab = (e) => {
    setActive(+e.target.dataset.index[0]);
  };


  return (
    <div>
        <div >
        {items.map((n, i) => (
 
          <button
            key={n.indexd}
            className={`tablinks ${i == active ? "active" : ""}`}
            onClick={openTab}
            data-index={i}
            
          >
            {n.title}
          </button>
        ))}
      </div>
      {items[active] && <CallDaysTabContent {...items[active]} id={id} />}
    </div>
  )
})

export default CallDaysTab