import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'

import classes from './NewCheck.module.css'
import classNames from 'classnames';
import { Context } from '../..';
import { fetchExam, getStatus } from '../http/guaranteeAPI';
import AddEntry from '../UI/modals/AddEntry';
import ModalUpdate from '../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../UI/ModalNotification/ModalNotification';
import WarrantyTableHeader from './WarrantyTableHeader/WarrantyTableHeader';



const  NewCheck = observer(() => {
  const {examination, status}  = useContext(Context)


  const [modalShow, setModalShow] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification ] = useState(false)
  // const [active, setActive] = useState(true)
  let [numId, setNumId] = useState('')
  let [notId, setNotId] = useState('')


  const [itemProps, setItemProps] = useState()



  useEffect(() => {
   
    fetchExam(null, null).then(data => {
      setItemProps(data)
      // console.log(data.map(i => i.statusExam))
      examination.SetExamination(data)
      status.SetStatus(data.map(i => i.statusExam))
      // console.log(data.map(i => 
      //   i.status
      // ))
    })
  },[examination])



  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
      <AddEntry  show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <WarrantyTableHeader/>
        <ol>
            { examination.examination.map((item, index) =>    
                <li className={classes.list} key={item.id}>
                <div className={classes.list__box}>
                  <div className={classes.list__content} >    
                    <div className={classNames(classes.list__item, classes.list__item_one)}>{item.date}</div> 
                    <div className={classNames(classes.list__item, classes.list__item_two)}>{item.client}</div> 
                    <div className={classNames(classes.list__item, classes.list__item_three)}>{item.city}</div> 
                    <div className={classNames(classes.list__item, classes.list__item_four)}>{item.manager}</div> 
                    <div className={classNames(classes.list__item, classes.list__item_five)}>{item.product}</div>
                    <div className={classNames(classes.list__item, classes.list__item_six)}>{item.productionDate}</div>  
                    <div className={classNames(classes.list__item, classes.list__item_seven)}>{item.numberReturnDocument}</div>
                    <div className={classNames(classes.list__item, classes.list__item_eight)}>{item.plantDocumentNumber}</div> 
                    <div className={classNames(classes.list__item, classes.list__item_nine)}>{item.movingToDefectWarehouse}</div>  
                    <div className={classNames(classes.list__item, classes.list__item_ten)}>{item.releaseDate}</div>
                    <div className={classNames(classes.list__item, classes.list__item_eleven)}>{item.result}</div>   
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

export default NewCheck