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
  const [addRec, setAddRec] = useState({})
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
  const [statusExam, setStatus] = useState(addRec.setStatus)


  const allValue = {numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam}


  function newVall(f1, f2) {
  
    console.log(f1, f2)
   
  }

    newVall(allValue, addRec )

    // console.log(releaseDate)
    // console.log(addRec)

  //   function UPDATE() {
  //            const id = +props;
  //       const utdateRec = updateRecord(id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam)

  // const allValue = [numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam]
  //   // console.log(addRec)

  //            for (let Val of allValue) {
  //              console.log(allValue[Val])
  //   console.log(addRec)

  //              if (allValue[Val]) {

                setNumberReturnDocument(addRec.numberReturnDocument)
                 setplantDocumentNumber(addRec.plantDocumentNumber)
                 setMovingToDefectWarehouse(addRec.movingToDefectWarehouse)
                 setReleaseDate(addRec.releaseDate)
                 setResult(addRec.result)
  //               //  const numberReturnDocument = addRec.numberReturnDocument;
  //               //  const plantDocumentNumber = addRec.plantDocumentNumber;
  //               //  const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
  //               //  const releaseDate = addRec.releaseDate;
  //               //  const result = addRec.result;
  //               //  console.log(Val);
  //                updateRecord(
  //                  id,
  //                  numberReturnDocument,
  //                  plantDocumentNumber,
  //                  movingToDefectWarehouse,
  //                  releaseDate,
  //                  result
  //                );
  //              } 
               
  //               if(allValue[Val] != '') {
  //               // const numberReturnDocument = addRec.numberReturnDocument;
  //               //  const plantDocumentNumber = addRec.plantDocumentNumber;
  //               //  const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
  //               //  const releaseDate = addRec.releaseDate;
  //               //  const result = addRec.result;
  //               //  setNumberReturnDocument(addRec.numberReturnDocument)
  //               //  setplantDocumentNumber(addRec.plantDocumentNumber)
  //               //  setMovingToDefectWarehouse(addRec.movingToDefectWarehouse)
  //               //  setReleaseDate(addRec.releaseDate)
  //               //  setResult(addRec.result)
  //               //    updateRecord(
  //               //    id,
  //               //    numberReturnDocument,
  //               //    plantDocumentNumber,
  //               //    movingToDefectWarehouse,
  //               //    releaseDate,
  //               //    result
  //               //  );
  //              } 
  //             //  else if(numberReturnDocument === '') {
  //             //    const numberReturnDocument =  null;
  //             //    const plantDocumentNumber = addRec.plantDocumentNumber;
  //             //    const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
  //             //    const releaseDate = addRec.releaseDate;
  //             //    const result = addRec.result;
  //             //      updateRecord(
  //             //      id,
  //             //      numberReturnDocument,
  //             //      plantDocumentNumber,
  //             //      movingToDefectWarehouse,
  //             //      releaseDate,
  //             //      result
  //             //    );
  //             //  }
  //             //  else if (Val != "") {

  //             //    for (let item in addRec) {
  //             //      // console.log(item, addRec[item]);
  //             //    }
  //             //  }
  //            }
  //          }

          //  UPDATE()
    const {examination, examinationcharger, examinationworks, examinationready} = useContext(Context)

    const options = [
      { value: 'New', label: 'Выбрать статус'},
      { value: 'Charger', label: 'На зарядке'},
      { value: 'Works', label: 'Проверка на заводе'},
      { value: 'Ready', label: 'Готов к отправке клиенту'},
      { value: 'Arhive', label: 'В архив (выдан клиенту или обмен брака )'},

    ];

    // function UPDATE() {
    //   const id = +props

    //         for (let Val of allValue) {
    //           if ( Val === '') {
    //             const numberReturnDocument = addRec.numberReturnDocument;
    //             const plantDocumentNumber = addRec.plantDocumentNumber;
    //             const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
    //             const releaseDate = addRec.releaseDate;
    //             const result = addRec.result;
    //             console.log(Val);
    //             updateRecord(
    //               id,
    //               numberReturnDocument,
    //               plantDocumentNumber,
    //               movingToDefectWarehouse,
    //               releaseDate,
    //               result
    //             );
    //           } 
    //           // else if (Val != "") {
                
    //           //   for (let item in addRec) {
    //           //     // console.log(item, addRec[item]);
    //           //   }
    //           // }
    //         }
    //       }

          // UPDATE()

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


     const newRec = async (props) => {
      console.log(props)
      const id = +props
        const utdateRec = updateRecord(id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam)
        // const utdateRec = updateRecord(null, null, 1, 2)


      try {


          //  function UPDATE() {
          //   //  const id = +props;

          //    for (let Val of allValue) {
          //      if (Val != "") {
          //       //  const numberReturnDocument = addRec.numberReturnDocument;
          //       //  const plantDocumentNumber = addRec.plantDocumentNumber;
          //       //  const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
          //       //  const releaseDate = addRec.releaseDate;
          //       //  const result = addRec.result;
          //       //  console.log(Val);
          //        utdateRec(
          //          id,
          //          numberReturnDocument,
          //          plantDocumentNumber,
          //          movingToDefectWarehouse,
          //          releaseDate,
          //          result
          //        );
          //      } 
               
          //      else if(plantDocumentNumber === '' || numberReturnDocument === '') {
          //        const numberReturnDocument = null;
          //        const plantDocumentNumber = null;
          //        const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
          //        const releaseDate = addRec.releaseDate;
          //        const result = addRec.result;
          //          updateRecord(
          //          id,
          //          numberReturnDocument,
          //          plantDocumentNumber,
          //          movingToDefectWarehouse,
          //          releaseDate,
          //          result
          //        );
          //      } 
          //      else if(numberReturnDocument === '') {
          //        const numberReturnDocument =  null;
          //        const plantDocumentNumber = addRec.plantDocumentNumber;
          //        const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
          //        const releaseDate = addRec.releaseDate;
          //        const result = addRec.result;
          //          updateRecord(
          //          id,
          //          numberReturnDocument,
          //          plantDocumentNumber,
          //          movingToDefectWarehouse,
          //          releaseDate,
          //          result
          //        );
          //      }
          //      else if (Val != "") {

          //        for (let item in addRec) {
          //          // console.log(item, addRec[item]);
          //        }
          //      }
          //    }
          //  }
          // UPDATE()


        // if(releaseDate.length && result.length && movingToDefectWarehouse.length && plantDocumentNumber.length && numberReturnDocument.length && statusExam.length) {
        //   // const utdateRec = updateRecord( id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam)
        //   await utdateRec()
        //   Update()
     
        // } 
        //  else if(result === '' && movingToDefectWarehouse === '' && plantDocumentNumber === '' && numberReturnDocument === '' && releaseDate.length) {
        //   const numberReturnDocument = addRec.numberReturnDocument
        //   const plantDocumentNumber = addRec.plantDocumentNumber
        //   const movingToDefectWarehouse = addRec.movingToDefectWarehouse
        //   const releaseDate = releaseDate
        //   const result = addRec.result
          
        //   await updateRecord( id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result)
              
        // }   
        // else if(releaseDate === '' && result === '' && movingToDefectWarehouse === '' && plantDocumentNumber === '' && numberReturnDocument === '' ) {
        //   const numberReturnDocument = addRec.numberReturnDocument
        //   const plantDocumentNumber = addRec.plantDocumentNumber
        //   const movingToDefectWarehouse = addRec.movingToDefectWarehouse
        //   const  releaseDate = addRec.releaseDate
        //   const result = addRec.result
          
        //   await updateRecord( id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result)
              
        // }   
        
        
       
      
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
      console.log(statusExam)
      
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
                  <Button className={classes.modal__btn} onClick={onHide} >Закрыть</Button>
                  <button className={classes.modal__btn} onClick={() => newRec(addRec.id)}>Сохранить</button>           
              </div>
               
          </form>         
      </div>                        
      
      
      
    </Modal>
  );
})

export default ModalUpdate


    async upgrade(req, res) {
        const {id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam } = req.body
        try {
            const updateFull = await Examination.update(
                {  
                    releaseDate: releaseDate,
                    result: result,
                    plantDocumentNumber: plantDocumentNumber,
                    numberReturnDocument: numberReturnDocument,
                    movingToDefectWarehouse: movingToDefectWarehouse,
                    statusExam: statusExam
                },
                {
                    where: {
                       id: id
                    }
                }
                
            )
            // return res.json(updateFull)
            
        } catch (error) {
            return error.message
            
        }
    
    }