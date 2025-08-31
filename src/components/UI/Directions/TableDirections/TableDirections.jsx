import { observer } from 'mobx-react-lite'
import React from 'react'
import classNames from 'classnames';
import classes from './TableDirections.module.css'
import './Direction.css'
import HeaderTabelDirections from './HeaderTabelDirections/HeaderTabelDirections';
import ButtonDelivery from '../../Delivery/ButtonDelivery/ButtonDelivery';
import ButtonUpdateClient from '../../ModalUpdateClient/ButtonUpdateClient';
import ButtonDeleteClient from '../../ButtonDelete/ButtonDeleteClient/ButtonDeleteClient';

const TableDirections = observer(({ direction, id }) => {




  return (
    <div>
      <ul className={classes.list}>
        {direction.direction.map((i) => (
          <li key={i.id} className={classes.list__item}>
            <h4>Направление : <span className={classes.title__stan}>{i.region}</span></h4>
            {i.city.slice().sort((a, b) => a.city > b.city ? 1 : -1).map((m) => (
              <div key={m.id}>
                <h6 className={classes.title}>                 
                  {m.city}
                </h6>
                <HeaderTabelDirections />
                {m.client.slice().sort((a, b) => a.client - b.client).map((k) => (
                    <div
                      className={classNames(classes.list__content)}
                      key={k.id}
                    >
                      <p>{k.payment}</p>
                      <p>{k.client}</p>
                      <p>{k.address}</p>
                      <p>{k.contact}</p>
                      <p>{k.comment}</p>                    
                        <div className={classes.button__box}>
                          <ButtonDelivery clientId={k.id} cityid={k.cityid}/>
                          <ButtonUpdateClient clientId={k.id} manager={id} />
                          <ButtonDeleteClient clientid={k.id}/>
                        </div>
                      
                    </div>
                  ))}
                
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TableDirections;