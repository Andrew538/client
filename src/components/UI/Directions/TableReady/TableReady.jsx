import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import classes from './TableDirections.module.css'
import HeaderTabelDirections from '../TableDirections/HeaderTabelDirections/HeaderTabelDirections';
import ExportToExcel from '../../SaveExcel/ExportToExcel';
import ButtonDeleteDelivery from '../../ButtonDelete/ButtonDeleteDelivery/ButtonDeleteDelivery';
import ButtonDeleteClient from '../../ButtonDelete/ButtonDeleteClient/ButtonDeleteClient';
import ChangeStatusButton from '../ChangeStatusButton/ChangeStatusButton';
import ButtonUpdateClientReady from '../../ModalUpdateClientRady/ButtonUpdateClientReady';




const TableReady = observer(({ready}) => {

  return (
    <div>
      <ul className={classes.list}>
        {ready.ready.map((i) => (
           
          <li key={i.id} className={classes.list__item}>
              <ChangeStatusButton id={i.id} />
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
                    </h2>
                  </div>
                  {d.citydirectionsredy.map((c) => (
                    <div key={c.id}>
                      <h3>{c.city.city}</h3>
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