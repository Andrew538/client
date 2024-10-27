import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './AddEntry.module.css'
import './modal.css'

import { Context } from '../../../index';
import { createRecord, fetchExam } from '../../http/guaranteeAPI';
import { observer } from 'mobx-react-lite';


const AddEntry = observer(({show, onHide, props}) => {
  
const {examination} = useContext(Context)

const [date, setDate] = useState('')
const [client, setclient] = useState('')
const [manager, setManager] = useState('')
const [product, setProduct] = useState('')
const [releaseDate, setReleaseDate] = useState()
const [result, setResult] = useState()

const [addRec, setAddRec] = useState()

useEffect(() => {

  fetchExam(null, null).then(data => {
    examination.SetExamination(data)
  })

  
}, [ ])




const addRecrod = async () => {
  try {

    const rec = await createRecord(date, client, manager, product, releaseDate, result)
    setAddRec(rec)
    fetchExam(null, null).then(data => {
      examination.SetExamination(data)
    })

   
    if(rec) {
      onHide()
    }
  } catch (error) {
    
  }


}

  return (
    
        <Modal
              {...props}
              show={show}
              onHide={onHide}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"          
            >
     <div  className={classes.modal__content}> 
          <div className={classes.modal__box}>
          <h2 className={classes.modal__title}>Добавить запись</h2>
       
              <input 
                placeholder='Дата поступления' 
                className={classes.modal__input} 
                type="text" 
                alue={date}
                onChange={e => setDate(e.target.value)}
              />
              <input 
                placeholder='Клиент' 
                className={classes.modal__input} 
                type="text" 
                value={client}
                onChange={e => setclient(e.target.value)}
                />
              <input 
                placeholder='Менеджер' 
                className={classes.modal__input} 
                type="text" 
                value={manager}
                onChange={e => setManager(e.target.value)}
              />
              <input 
                placeholder='Название' 
                className={classes.modal__input} 
                type="text" 
                value={product}
                onChange={e => setProduct(e.target.value)}
              />
              <input 
                placeholder='Дата выдачи' 
                className={classes.modal__input} 
                type="text" 
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
              />
              <input 
                placeholder='Заключение' 
                className={classes.modal__input} 
                type="text" 
                value={result}
                onChange={e => setResult(e.target.value)}
              />
              <div className={classes.modal__btn_box}>
                  <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button>
                  <button className={classes.modal__btn} onClick={addRecrod}>Сохранить</button>           
              </div>
               
          </div>         
      </div>                        
    </Modal>
  )
})

export default AddEntry