import React, { useContext, useEffect, useState } from 'react'
import classes from './WarrantyList.module.css'
import classNames from 'classnames';
import { fetchExam } from '../../http/guaranteeAPI';


import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import ModalUpdate from '../../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../../UI/ModalNotification/ModalNotification';

const WarrantyList = observer(() => {


 
  const {examination, status}  = useContext(Context)

    let [numId, setNumId] = useState('')
    let [notId, setNotId] = useState('')
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalNotification, setModalNotification ] = useState(false)
        useEffect(() => {
        fetchExam(null, null).then(data => {
            examination.SetExamination(data)
            status.SetStatus(data.map(i => i.statusExam))            
        })
    },[examination])
    
    

  return (
    <div>
         <ol className={classes.list}>
            {examination.examination.map((item, index) =>    
                <li className={classes.item} key={item.id}>
                <div className={classes.item__box}>
                  <div className={classes.table}>    
                    <div className={classNames(classes.table__item, classes.table__item_one)}>{item.date}</div> 
                    <div className={classNames(classes.table__item, classes.table__item_two)}>{item.client}</div> 
                    <div className={classNames(classes.table__item, classes.table__item_three)}>{item.city}</div> 
                    <div className={classNames(classes.table__item, classes.table__item_four)}>{item.manager}</div> 
                    <div className={classNames(classes.table__item, classes.table__item_five)}>{item.product}</div>
                    <div className={classNames(classes.table__item, classes.table__item_six)}>{item.productionDate}</div>  
                    <div className={classNames(classes.table__item, classes.table__item_seven)}>{item.numberReturnDocument}</div>
                    <div className={classNames(classes.table__item, classes.table__item_eight)}>{item.plantDocumentNumber}</div> 
                    <div className={classNames(classes.table__item, classes.table__item_nine)}>{item.movingToDefectWarehouse}</div>  
                    <div className={classNames(classes.table__item, classes.table__item_ten)}>{item.releaseDate}</div>
                    <div className={classNames(classes.table__item, classes.table__item_eleven)}>{item.result}</div>   
                  </div>
                  <div className={classNames(classes.list__button__box, )}>              
                    <button
                    className={classNames(classes.list__button, classes.list__button_size )}
                      type='button' 
                          onClick={() => {
                            setNumId(item.id)
                            setModalUpdate(true)
                        }} 
                        >Изменить</button> 
                        <ModalUpdate
                        props={numId}             
                        show={modalUpdate}
                        onHide={() => setModalUpdate(false)}
                        />
                        <ModalNotification
                        props={notId}             
                        show={modalNotification}
                        onHide={() => setModalNotification(false)}
                        />             
                      <button className={classNames(classes.list__button, classes.list__button_size)} onClick={() =>
                        {    
                            setNotId(item.id)
                            setModalNotification(true)
                        }
                        }>Удалить</button>
                  </div>                              
                </div>                   
                </li> 

                        
              
              )}
          
       </ol>
    </div>
  )
})

export default WarrantyList