import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalUpdate.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import {fetchExam, fetchExamCharger, fetchExamReady, fetchExamWorks, fetchOneExam, updateRecord } from '../../http/guaranteeAPI';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import { check } from '../../http/userAPI';


const ModalUpdate = observer(({show, onHide,  props}) => {

  const {users}  = useContext(Context)

  const [itemProps, setItemProps] = useState()
  const [dateOne, setDate] = useState('')
  const [client, setclient] = useState('')
  const [city, setCity] = useState('')
  const [productionDate, setProductionDate] = useState('')
  const [plantDocumentNumber, setplantDocumentNumber] = useState('')
  const [numberReturnDocument, setNumberReturnDocument] = useState('')
  const [movingToDefectWarehouse, setMovingToDefectWarehouse] = useState('')
  const [manager, setManager] = useState('')
  const [product, setProduct] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [result, setResult] = useState('')  
  const [addRec, setAddRec] = useState({})
  const [statusExam, setStatus] = useState('')


   const navigate = useNavigate()
      const singout = useAuth()
  
   useEffect(() => {
       
          // setUser(localStorage.getItem('token'))
          try {
              if(localStorage.getItem('token')) {
                  check()
                  .then(data => {
                     
                      if(localStorage.getItem('token') && data) {
                          users.setUser(true)
                          users.setIsAuth(true)
                          users.setRole(data.role)
                          users.setEmail(data.email)
                      } else if(localStorage.getItem(' ', ) && !data) {
                          localStorage.clear();
                          navigate('/', {replace: true})
                          singout(()=> 
                              navigate('/', {replace: true})
                          )
                      }
                  }) 
                  // .catch(function(error) {
                  //     console.log(error.response.status)
                  //     if(error.response.status === 401) {
                  //     navigate('/home', {replace: true})
  
                  //     }
                  // })
              } 
            
          } catch (error) {
              if(error.error) {
                navigate('/home', {replace: true})
  
              }
              console.log(error)
              console.log(error)
          }
         
      }, [])
  
  









  const allValue = [ releaseDate, result, statusExam]

  // allValue.map(item => {
  //   if(item.length) {
  //     console.log('Привет')
  //   }
  // })

  // console.log(addRec)
    const {examination, examinationcharger, examinationworks, examinationready} = useContext(Context)


    const options = [
      { value: 'New', label: 'Выбрать статус'},
      { value: 'Charger', label: 'На зарядке'},
      { value: 'Works', label: 'Проверка на заводе'},
      { value: 'Ready', label: 'Готов к отправке клиенту'},
      { value: 'Arhive', label: 'В архив (выдан клиенту или обмен брака )'},

    ];


    // console.log(addRec)

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

      })
    },[examination])
    
    function Update () {
      fetchExam(null, null).then(data => {
        examination.SetExamination(data)        
      })

      fetchExamCharger(null, null).then(data => {
        examinationcharger.SetExaminationCharger(data)
      })

      fetchExamWorks(null, null).then(data => {
        examinationworks.SetExaminationWorks(data)
      })

      fetchExamReady(null, null).then(data => {             
        examinationready.SetExaminationReady(data)                        
      })
    }


    const newRec = async (props) => {
      console.log(props)
      const id = +props
      const utdateRec = updateRecord( id,releaseDate, result, statusExam)
      try {
        if(releaseDate.length && result.length && statusExam.length ) {
          await utdateRec( id, releaseDate, result, statusExam)
          Update()
    
        } else if (releaseDate === '' && result.length && statusExam.length) {
         const  releaseDate = addRec.releaseDate
          await utdateRec(releaseDate)
          Update()

        } else if(releaseDate.length && statusExam.length && result === '') {
          const result = addRec.result
          await utdateRec
          Update()

        } else if(releaseDate === '' && result === '' && statusExam.length ) {
         const  releaseDate = addRec.releaseDate
          const result = addRec.result
          await utdateRec( id,releaseDate, result, statusExam)
          Update()

        }
      
      // else if(releaseDate === '' && result.length && statusExam == '') {
      //   const  releaseDate = addRec.releaseDate
      //    await updateRecord( id, releaseDate, result, statusExam)
      //    fetchExam(null, null).then(data => {
      //      examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
          
      //    })
      //  }
      setDate('')
      setclient('')
      setManager('')
      setProduct('')
      setReleaseDate('')
      setProductionDate('')
      setplantDocumentNumber('')
      setNumberReturnDocument('')
      setMovingToDefectWarehouse('')
      setCity('')
    
      setResult('')
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

<div  className={classes.modal__wrapper}> 
  
          <form className={classes.modal__box}>
          <h2 className={classes.modal__title}>Редактировать запись</h2>
            <div className={classes.madal__content}>
            <div className={classes.modal__left}>
          <label className={classes.modal__label} htmlFor="">
                  Дата поступления
                </label>               
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

                <label className={classes.modal__label} htmlFor="">Город</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.city}
                value={city}
                onChange={e => setCity(e.target.value)}
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

                <label className={classes.modal__label} htmlFor="">Дата выпуска "Маркировка"</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.productionDate}
                value={productionDate}
                onChange={e => setProductionDate(e.target.value)}
                />
          </div>
                
          <div className={classes.modal__right}>
          <label className={classes.modal__label} htmlFor="">№ акта для завода</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.numberReturnDocument}
                value={numberReturnDocument}
                onChange={e => setNumberReturnDocument(e.target.value)}
                />
                   <label className={classes.modal__label} htmlFor="">№ перемещения на склад БРАК</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.plantDocumentNumber}
                value={plantDocumentNumber}
                onChange={e => setplantDocumentNumber(e.target.value)}
                />
                     <label className={classes.modal__label} htmlFor="">№ документа возврата от клиента</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.movingToDefectWarehouse}
                value={movingToDefectWarehouse}
                onChange={e => setMovingToDefectWarehouse(e.target.value)}
                />

                <label className={classes.modal__label} htmlFor="">Дата выдачи</label>
                <input            
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.releaseDate}
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
                />
                <label className={classes.modal__label} htmlFor="">Заключение</label>
                <input               
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.result}
                value={result}
                onChange={e => setResult(e.target.value)}
                />
                <Select className={classes.modal__select}
                        defaultValue={options[0]}
                        onChange={(status) => setStatus(status.value)}
                        options={options}
                      />
          </div>

            </div>
     
                
              <div className={classes.modal__btn_box}>
                  <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button>
                  <button className={classes.modal__btn} onClick={() => newRec(addRec.id)}>Сохранить</button>           
              </div>
               
          </form>         
      </div>                        
      
      
      
    </Modal>
  );
})

export default ModalUpdate

