import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-tooltip/dist/react-tooltip.css'
import classes from './AddEntry.module.css'
import './modal.css'
import { Context } from '../../../index';
import { createRecord, fetchExam } from '../../http/guaranteeAPI';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';

import MySelect from '../Select/MySelect';
import classNames from 'classnames';
import Tooltip from '../Tooltip/Tooltip';


const AddEntry = observer(({show, onHide, props}) => {
  
const { examination } = useContext(Context);

const [date, setDate] = useState("");
const [client, setclient] = useState("");
const [city, setCity] = useState("");
const [productionDate, setProductionDate] = useState("");
const [plantDocumentNumber, setplantDocumentNumber] = useState("");
const [numberReturnDocument, setNumberReturnDocument] = useState("");
const [movingToDefectWarehouse, setMovingToDefectWarehouse] = useState("");
const [comment, setСomment] = useState("");
const [manager, setManager] = useState("");
const [product, setProduct] = useState("");
const [releaseDate, setReleaseDate] = useState("");
const [result, setResult] = useState("");
const [statusExam, setStatus] = useState("New");
const [addRec, setAddRec] = useState();

const [error, setError] = useState(" ");

const handleClick = () => {
  onHide();
  setError("");
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
  setСomment("");
  setResult("");
};

const addRecrod = async (e) => {
  e.preventDefault();
  try {
    const rec = await createRecord(
      date,
      client,
      city,
      productionDate,
      numberReturnDocument,
      plantDocumentNumber,
      movingToDefectWarehouse,
      comment,
      manager,
      product,
      releaseDate,
      result,
      statusExam
    );

    fetchExam(null, null, 1, 2).then((data) => {
      examination.SetExamination(data);
    });
    fetchExam(examination.SetExamination.id).then((data) => {
      examination.SetExamination(data);
    });
    if (rec) {
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
      setСomment("");
      setResult("");
      onHide();
    }
  } catch (error) {
    setError(error.response.data.message);
  }
};

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
    <form className={classes.modal__form} onSubmit={addRecrod}>
       <div className={classes.modal__form__box}>
       <div className={classes.modal__left}>
      <div className={classes.modal__inputBox}>
      {/* <div className={classes.modal__inputValidate}>{error}</div> */}
      <input 
            placeholder='Дата поступления' 
            className={classes.modal__input} 
            type="text" 
            value={date}
            onChange={e => setDate(e.target.value)}  
            required    
          />
          </div>
          <div className={classes.modal__inputBox}>
          <div className={classes.modal__inputValidate}>{error}</div>
          <input 
            placeholder='Клиент' 
            className={classes.modal__input} 
            type="text" 
            value={client}
            onChange={e => setclient(e.target.value)}
            required
            />
           </div>

          <div className={classes.modal__inputBox}>
          <div className={classes.modal__inputValidate}>{error}</div>
            <input 
            placeholder='Город' 
            className={classes.modal__input} 
            type="city" 
            value={city}
            onChange={e => setCity(e.target.value)}
            required
            />
           </div>
           <div className={classes.modal__inputBox}>
           <div className={classes.modal__inputValidate}>{error}</div>    
          <input 
            placeholder='Менеджер' 
            className={classes.modal__input} 
            type="text" 
            value={manager}
            onChange={e => setManager(e.target.value)}
            required
          />      
       </div>         
        <div className={classes.modal__inputBox}>
          <div className={classes.modal__inputValidate}>{error}</div>
          <input 
          placeholder='Название' 
          className={classes.modal__input} 
          type="text" 
          value={product}
          onChange={e => setProduct(e.target.value)}
          required
        />
        </div>          
            <div className={classes.modal__inputBox}>
            <div className={classes.modal__inputValidate}>{error}</div>
          <input 
            placeholder='Дата выпуска (Маркировка)' 
            className={classes.modal__input} 
            type="text" 
            value={productionDate}
            onChange={e => setProductionDate(e.target.value)}
            required
          />
    </div>
      </div> 
      <div className={classes.modal__right}>
        <input 
        placeholder='№ акта для завода' 
        className={classes.modal__input} 
        type="text" 
        value={numberReturnDocument}
        onChange={e => setNumberReturnDocument(e.target.value)}
        />
          <input 
        placeholder='№ перемещения на склад БРАК' 
        className={classes.modal__input} 
        type="text" 
        value={plantDocumentNumber}
        onChange={e => setplantDocumentNumber(e.target.value)}
        />
          <input 
        placeholder='№ документа возврата от клиента' 
        className={classes.modal__input} 
        type="text" 
        value={movingToDefectWarehouse}
        onChange={e => setMovingToDefectWarehouse(e.target.value)}
        />
        <input 
          placeholder='Дата выдачи' 
          className={classes.modal__input} 
          type="text" 
          value={releaseDate}
          onChange={e => setReleaseDate(e.target.value)}
        />
        <textarea 
          placeholder='Заключение' 
          className={classes.modal__input} 
          type="text" 
          value={result}
          onChange={e => setResult(e.target.value)}
        />
        {/* <textarea 
          placeholder='Комментарий' 
          className={classNames(classes.modal__input, classes.modal__textarea)} 
          type="text" 
          value={comment}
          onChange={e => setСomment(e.target.value)}
          /> */}
      </div>

    
       </div>
     
       <div className={classes.modal__btn_box}>
  
  <button className={classes.modal__btn} type='submit'>Сохранить</button>    
  <Button className={classes.modal__btn} onClick={handleClick} >Закрыть</Button>
            
</div>
    
    </form>  
      
    </div>         
    </div>                        
    </Modal>
  )
})

export default AddEntry