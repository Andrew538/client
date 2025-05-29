import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalUpdate.module.css'
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import {fetchExam, fetchExamCharger, fetchExamReady, fetchExamWorks, fetchOneExam, updateMovingToDefectWarehouse, updateNumberReturnDocument, updatePlantDocumentNumber, updateRecord, updateReleaseDate } from '../../http/guaranteeAPI';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import { check } from '../../http/userAPI';
import { keys } from 'mobx';
import { useMemo } from 'react';


const ModalUpdate = observer(({show, onHide,  props}) => {

 const {examination, examinationcharger, examinationworks, examinationready} = useContext(Context)

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
  const [statusExam, setStatus] = useState(addRec.setStatus)

    const id = +props
       
    function fullUdate() {
        function resultUpdate() {
            if (result === "") {
              const result = addRec.result;
               updateRecord(id, result, statusExam);
            } else if (result.length) {
               updateRecord(id, result, statusExam);
            }
          }
          resultUpdate()
           function numberReturnDocumentUdate() {
            if (numberReturnDocument === "") {
              const numberReturnDocument = addRec.numberReturnDocument;
               updateNumberReturnDocument(id, numberReturnDocument, statusExam);
            } else {
               updateNumberReturnDocument(id, numberReturnDocument, statusExam);
            }
          }
          numberReturnDocumentUdate()
         function plantDocumentNumberUpdate() {
            if (plantDocumentNumber === "") {
              const plantDocumentNumber = addRec.plantDocumentNumbert;
               updatePlantDocumentNumber(id, plantDocumentNumber, statusExam);
            } else {
               updatePlantDocumentNumber(id, plantDocumentNumber, statusExam);
            }
          }
          plantDocumentNumberUpdate()

         function movingToDefectWarehouseUpdate() {
            if (movingToDefectWarehouse === "") {
              const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
               updateMovingToDefectWarehouse(id, movingToDefectWarehouse, statusExam);
            } else {
               updateMovingToDefectWarehouse(id, movingToDefectWarehouse, statusExam);
            }
          }
          movingToDefectWarehouseUpdate()
           function ReleaseDateUpdate() {
            if (releaseDate === "") {
              const releaseDate = addRec.releaseDate;
               updateReleaseDate(id, releaseDate, statusExam);
            } else {
               updateReleaseDate(id, releaseDate, statusExam);
            }
          }
          ReleaseDateUpdate()
    }
           

    const options = [
      { value: 'New', label: 'Выбрать статус'},
      { value: 'Charger', label: 'На зарядке'},
      { value: 'Works', label: 'Проверка на заводе'},
      { value: 'Ready', label: 'Готов к отправке клиенту'},
      { value: 'Arhive', label: 'В архив (выдан клиенту или обмен брака )'},

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

 
     const newRec = () => {
       try {
          setTimeout(() => {
            fullUdate()
          }, 300);
        // ReleaseDateUpdate();
        //resultUpdate();
        // numberReturnDocumentUdate();
       // plantDocumentNumberUpdate();
       // movingToDefectWarehouseUpdate();
        Update()
        
        setDate("");
        setclient("");
        setManager("");
        setProduct("");
        setReleaseDate("");
        setProductionDate("");
        setplantDocumentNumber("");
        setNumberReturnDocument("");
        setMovingToDefectWarehouse("");
        setCity("");
        setResult("");
        setReleaseDate("");
        onHide();
       } catch (error) {
         console.log(error);
       }
     };



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

             <label className={classes.modal__label} htmlFor="">№ документа возврата от клиента</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.numberReturnDocument}
                value={numberReturnDocument}
                onChange={e => setNumberReturnDocument(e.target.value)}
                />


          <label className={classes.modal__label} htmlFor="">№ акта для завода</label>
                <input 
                className={classes.modal__input} 
                type="text" 
                placeholder={addRec.plantDocumentNumber}
                value={plantDocumentNumber}
                onChange={e => setplantDocumentNumber(e.target.value)}
                />

                   <label className={classes.modal__label} htmlFor="">№ перемещения на склад БРАК</label>
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
                  {/* <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button> */}
                  <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button>

                  <button className={classes.modal__btn} onClick={() => newRec(addRec.id)}>Сохранить</button>           
                  {/* <button className={classes.modal__btn} type='submit'>Сохранить</button>            */}
              </div>
               
          </form>         
      </div>                        
      
      
      
    </Modal>
  );
})

export default ModalUpdate

