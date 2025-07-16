import { observer } from 'mobx-react-lite'
import React from 'react'
import classNames from 'classnames';
import classes from './TableDirections.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderTabelDirections from './HeaderTabelDirections/HeaderTabelDirections';
import ButtonDelivery from '../../Delivery/ButtonDelivery/ButtonDelivery';



const TableDirections = observer(({direction}) => {

  // const [cl, setCl] = useState()
  


  // useEffect(() => {
   
  // direction.direction.map((i) => {
 
  //    i.city.map((n) => {

  //     n.client.map((k) =>{
  //            setCl(k)

  //     })
  //    })
  // })
   
  // }, [direction.direction, cl,])
  
// console.log(direction.direction.map((i) => {
//    console.log(i.region)
//     i.city.map((n) => {
//      console.log(n)
//      n.client.map((k) =>{
//             setCl(k.client)
//
//      })
//     })
//  }))


  return (
    <div>
        <ul className={classes.list}>
        {direction.direction.map((i) => (
          
          //  cl ?
           <li key={i.id} className={classes.list__item}>
            <h4>{i.region}</h4>
            {i.city.map((m) => (
              <div key={m.id}>
                <h6 className={classes.title}><span className={classes.title__span}>Город доставки:</span> {m.city}</h6>
                  <HeaderTabelDirections/>
                {m.client.map((k) => (              
                  
                  <div className={classNames(classes.list__content)}  key={k.id}>                             
                    <p >{k.payment}</p>
                    <p >{k.client}</p>
                    <p >{k.address}</p>
                    <p >{k.contact}</p>
                    <p>{k.comment}</p>

                    <div>
                     <ButtonDelivery clientId={k.id}/>

                    </div>

                  </div>
                
                )
                
                )}
                <div>
                 
                </div>
              </div>
            ))}

          </li>
        //  :
        //  <div key={i.id}>Привет</div>
        
        ))}
      </ul>
    </div>
  )
})

export default TableDirections