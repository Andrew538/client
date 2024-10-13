import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Context } from '../../../index'
import classes from './Guarantee.module.css'
import classNames from 'classnames';
import AddEntry from '../../UI/modals/AddEntry';

const  Guarantee = observer(() => {
  const {examination}  = useContext(Context)
  // console.log(examination)
  const [ShowModal, setShowModal] = useState(0)

  // console.log(ShowModal)

  

  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setShowModal()} >Добавить запись</button>
      {examination.examination.map(item => 

        <div className={classes.list__box} key={item.id}>
            <div className={classNames(classes.list__item, classes.list__item_one)}>{item.id}</div> 
            <div className={classNames(classes.list__item, classes.list__item_two)}>{item.data}</div> 
            <div className={classNames(classes.list__item, classes.list__item_three)}>{item.manager}</div> 
            <div className={classNames(classes.list__item, classes.list__item_four)}>{item.product}</div> 
            <div className={classNames(classes.list__item, classes.list__item_five)}>{item.releaseDate}</div> 
            <div className={classNames(classes.list__item, classes.list__item_six)}>{item.result}</div> 
        </div>
         
      )}
      <AddEntry />
    </div>
  )
})

export default Guarantee