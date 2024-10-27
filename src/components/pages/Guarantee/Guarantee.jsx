import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index'
import classes from './Guarantee.module.css'
import classNames from 'classnames';
import AddEntry from '../../UI/modals/AddEntry';
import { delExam, fetchExam } from '../../http/guaranteeAPI';

const  Guarantee = observer(() => {
  const {examination}  = useContext(Context)
  
  const [modalShow, setModalShow] = useState(false);
 
  const delRec = async (id) => {
    alert('Подтвердите удаление записи')
    await delExam({id})
    await fetchExam(null, null).then(data => {
        examination.SetExamination(data)
       
      })
   
  }

  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
      <AddEntry  show={modalShow}
      onHide={() => setModalShow(false)}
        />

        <ol  >
        {examination.examination.map(item => 

        <li key={item.id}>
          <div className={classes.list__box} >
          <div className={classNames(classes.list__item, classes.list__item_two)}>{item.date}</div> 
            <div className={classNames(classes.list__item, classes.list__item_three)}>{item.manager}</div> 
            <div className={classNames(classes.list__item, classes.list__item_four)}>{item.product}</div> 
            <div className={classNames(classes.list__item, classes.list__item_five)}>{item.releaseDate}</div> 
            <div className={classNames(classes.list__item, classes.list__item_six)}>{item.result}</div> 
          <button onClick={() => delRec(item.id)}>Удалить</button>

          </div>
            
        </li>
        
  
   

  /* </ol> */
    /* <div className={classNames(classes.list__item, classes.list__item_one)}>{item.id}</div> 
    <div className={classNames(classes.list__item, classes.list__item_two)}>{item.date}</div> 
    <div className={classNames(classes.list__item, classes.list__item_three)}>{item.manager}</div> 
    <div className={classNames(classes.list__item, classes.list__item_four)}>{item.product}</div> 
    <div className={classNames(classes.list__item, classes.list__item_five)}>{item.releaseDate}</div> 
    <div className={classNames(classes.list__item, classes.list__item_six)}>{item.result}</div>  */
/* </div> */
 
)}
        </ol>
      
      
    </div>
  )
})

export default Guarantee