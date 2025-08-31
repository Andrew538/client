import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import classes from './TableDirections.module.css'
import HeaderTabelDirections from '../TableDirections/HeaderTabelDirections/HeaderTabelDirections';
import ExportToExcel from '../../SaveExcel/ExportToExcel';
import ButtonDeleteDelivery from '../../ButtonDelete/ButtonDeleteDelivery/ButtonDeleteDelivery';
import ButtonDeleteClient from '../../ButtonDelete/ButtonDeleteClient/ButtonDeleteClient';




const TableArhive = observer(({arhivedelivery}) => {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

console.log(arhivedelivery)
  return (
    <div>
      <ul>
        {arhivedelivery.arhivedelivery.map((i, index) => (
          <li key={i.id} className={classNames(classes.list__item)} onClick={() => toggleItem(index)} >
            <div>
              <div>{i.dateofcreation}</div>
              {openIndex === index && (
                <div className={classes.accordion__content}>

                 {i.directionsredy.map((d, index) => (
              <div key={index} >
                <div>{d.dateofcreation}</div>
                <div>
                  <h2 className={classes.list__item__title}>
                    Направление доставки {d.region}
                  </h2>
                </div>
                {d.citydirectionsredy
                  .slice()
                  .sort((a, b) => (a.city > b.city ? 1 : -1))
                  .map((c) => (
                    <div key={c.id}>
                      <h3>г. {c.city.city}</h3>
                      <HeaderTabelDirections arhive={arhivedelivery} />
                      {c.delivery.map((d) => (
                        <div className={classes.list__content} key={d.id}>
                          <p>{d.payment}</p>
                          <p>{d.client}</p>
                          <p>{d.address}</p>
                          <p>{d.contact}</p>
                          <p>{d.weightnewbatter}</p>
                          <p>{d.weightusedbatte}</p>
                          <p>{d.comment}</p>
                          <div className={classes.button__box}>
                            <ButtonDeleteClient
                              idDelivery={d.id}
                              idDirection={d.directionid}
                              dateCreate={d.dateofcreation}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                <ExportToExcel id={i.id} fileName={d.region} />
              </div>
            ))}
                </div>
              )}
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
})

export default TableArhive