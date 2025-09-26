import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames';
import classes from './TableReady.module.css'
import HeaderTabelDirections from '../TableDirections/HeaderTabelDirections/HeaderTabelDirections';
import ExportToExcel from '../../SaveExcel/ExportToExcel';
import ButtonDeleteDelivery from '../../ButtonDelete/ButtonDeleteDelivery/ButtonDeleteDelivery';
import ButtonDeleteClient from '../../ButtonDelete/ButtonDeleteClient/ButtonDeleteClient';
import ChangeStatusButton from '../ChangeStatusButton/ChangeStatusButton';
import ButtonUpdateClientReady from '../../ModalUpdateClientRady/ButtonUpdateClientReady';
import TotalWeight from '../TotalWeight/TotalWeight';
import { fetchAllTotal } from '../../../http/mapApi';
import { Context } from '../../../..';




const TableReady = observer(({ready, totalweghtnewofcity }) => {
 

useEffect(() => {
      
  ready.ready.map((item) => {
    item.directionsredy.map((d) => {
      // console.log(d.dateofcreation)
    })
  })
 
}, [ ready, ])

 
  return (
    <div>
      <ul className={classes.list}>
        {ready.ready.map((i) => (
          <li key={i.id} className={classes.list__item}>
            <div className={classes.box__button__arhive}>
              <ChangeStatusButton id={i.id} />
            </div>
            {i.directionsredy.map((d) => (
              <div key={d.id} className={classes.list__item__box}>
                <div className={classes.list__item__date}>
                  <div className={classes.list__item__date__box}>
                    {d.dateofcreation}
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className={classes.list__item__title}>
                      Направление доставки {d.region}
                       <div>
                          Вес новых акб &nbsp;
                          {d.weightnewbatteries.reduce((sum, del) => {
                            return sum + del;
                          }, 0)}
                        </div>
                        <div>
                          Вес БУ &nbsp;
                           {d.weightusedbattery.reduce((sum, del) => {
                            return sum + del;
                          })}  
                        </div>
                    </h2>
                  </div>
                  {d.citydirectionsredy.map((c) => (
                    <div key={c.id}>
                      <div className={classes.list__item__title__box}>
                        <h3>{c.city.city}
                                           
                        </h3>
                        <span>
                          Вес новых акб &nbsp;
                          {c.weightnewbatteries.reduce((sum, del) => {
                            return sum + del;
                          }, 0)}
                        </span>
                        <div>
                          Вес БУ &nbsp;
                           {c.weightusedbattery.reduce((sum, del) => {
                            return sum + del;
                          })}  
                        </div>
                      </div>

                      <HeaderTabelDirections ready={ready} />

                      {c.delivery.map((d) => (
                        <div className={classes.list__content} key={d.id}>
                          <p className={classes.list__item__text}>
                            {d.payment}
                          </p>
                          <p className={classes.list__item__text}>{d.client}</p>
                          <p className={classes.list__item__text}>
                            {d.address}
                          </p>
                          <p className={classes.list__item__text}>
                            {d.contact}
                          </p>
                          <p className={classes.list__item__text}>
                            {d.weightnewbatteries}
                          </p>
                          <p className={classes.list__item__text}>
                            {d.weightusedbattery}
                          </p>
                          <p className={classes.list__item__text}>
                            {d.comment}
                          </p>
                          <p className={classes.list__item__text}>
                            {d.priceofusedbattery}
                          </p>
                          <div className={classes.button__box}>
                            <ButtonDeleteClient
                              idDelivery={d.id}
                              idDirection={d.directionid}
                              dateCreate={d.dateofcreation}
                            />
                            <ButtonUpdateClientReady clientidRady={d.id} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <ExportToExcel id={i.id} fileName={d.region} />
                {/* <ButtonExportToExcel id={i.id} fileName={d.region}/> */}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default TableReady