import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalUpdate.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import {fetchExam, fetchOneExam, updateRecord } from '../../http/guaranteeAPI';
import Select from 'react-select';


const ModalUpdate = observer(({show, onHide,  props}) => {
  const [itemProps, setItemProps] = useState()
  const [dateOne, setDate] = useState()
  const [client, setclient] = useState('')
  const [manager, setManager] = useState('')
  const [product, setProduct] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [result, setResult] = useState('')  
  const [addRec, setAddRec] = useState({})
const [statusExam, setStatus] = useState('')
// console.log(status.length)
  const allValue = [{dateOne,client, manager, product, releaseDate, result}]


    const {examination} = useContext(Context)


    const options = [
      { value: 'New', label: 'Выбрать статус'},
      { value: 'Works', label: 'Проверка на заводе'},
      { value: 'Arhive', label: 'В архив ( выдан клиенту или обмен брака'},
    
    ];


    useEffect(() => {
      const id = +props
      if(show === show && props && addRec) {
      try {        
          fetchOneExam(id).
          then(data => setAddRec(data))        
        }        
       catch (error) {
        console.log(error)
      }}   
    }, [show])

    useEffect(() => {
   
      fetchExam(null, null).then(data => {
        setItemProps(data)
  
        examination.SetExamination(data)
        // console.log(data.sort())
      })
    },[examination])
    
    


    const newRec = async (props) => {
      const id = +props
    
     try {
      if(releaseDate.length && result.length && statusExam.length ) {
      await updateRecord( id, releaseDate, result, statusExam)
        fetchExam(null, null).then(data => {
          examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
          
        })
      } else if (releaseDate === '' && result.length && statusExam.length) {
       const  releaseDate = addRec.releaseDate
        await updateRecord( id,releaseDate, result, statusExam)
        fetchExam(null, null).then(data => {
          examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
      
        })
      } else if(releaseDate.length && result === '') {
        const result = addRec.result
        await updateRecord( id,releaseDate, result, statusExam.length)
        fetchExam(null, null).then(data => {
          examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
         
        })
      }
      setResult('')
      setReleaseDate('')
      onHide()
      
     } catch (error) {
       console.log(error)
     }
    }


  return (
    <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<div  className={classes.modal__content}> 
          <div className={classes.modal__box}>
          <h2 className={classes.modal__title}>Редактировать запись</h2>
            <label className={classes.modal__label} htmlFor="">Дата поступления</label>
               
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.date}
                value={dateOne}
                onChange={e => setDate(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Клиент</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.client}
                value={client}
                onChange={e => setclient(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Менеджер</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.manager}
                value={manager}
                onChange={e => setManager(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Название товар</label>
                <input                 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.product}
                value={product}
                onChange={e => setProduct(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Дата выдачи</label>
                <textarea            
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.releaseDate}
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Результат</label>
                <input               
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.result}
                value={result}
                onChange={e => setResult(e.target.value)}
                />
                <Select
                        defaultValue={options[0]}
                        onChange={(status) => setStatus(status.value)}
                        options={options}
                      />
              <div className={classes.modal__btn_box}>
                  <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button>
                  <button className={classes.modal__btn} onClick={() => newRec(addRec.id)}>Сохранить</button>           
              </div>
               
          </div>         
      </div>                        
      
      
      
    </Modal>
  );
})

export default ModalUpdate

