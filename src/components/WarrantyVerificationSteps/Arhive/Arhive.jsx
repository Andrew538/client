import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index';
import { fetchExamArhive } from '../../http/guaranteeAPI';
import ModalUpdate from '../../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../../UI/ModalNotification/ModalNotification';
import classes from './Arhive.module.css'
import classNames from 'classnames';


const Arhive = observer(() => {
    const {examinationarhive, status}  = useContext(Context)


    const [modalShow, setModalShow] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalNotification, setModalNotification ] = useState(false)
    // const [active, setActive] = useState(true)
    let [numId, setNumId] = useState('')
    let [notId, setNotId] = useState('')
  
  
    const [itemProps, setItemProps] = useState()
  
  
  
    useEffect(() => {
     
        fetchExamArhive(null, null).then(data => {
        setItemProps(data)
   
        // console.log(data.map(i => i.statusExam))
        examinationarhive.SetExaminationArhive(data)
        status.SetStatus(data.map(i => i.statusExam))
        // console.log(data.map(i => 
        //   i.status
        // ))
      })
    },[examinationarhive])
  
  
  
    return (
      <div className={classes.list}>
        {/* <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
        <AddEntry  show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        <ul className={classNames(classes.list__column__names)}>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_one)}>Дата поступления </li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_two)}>Клиент</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_three)}>Город</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_four)}>Менеджер</li>        
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_five)}>Название АКБ</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_six)}>Дата выпуска (Маркировка)</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_seven)}>Номер документа возврата от клиента</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_eight)}>№ Акта для завода</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_nine)}>№ перемещения на склад БРАК</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_ten)}>Дата отправки клиенту</li>
          <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_eleven)}>Комментарий</li>
        </ul>
         
          <ol>     
              { examinationarhive.examinationarhive.map((item, index) =>    
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
                      {/* <button
                      className={classNames(classes.list__button, classes.list__button_size )}
                        type='button' 
                            onClick={() => {
                              setNumId(item.id)
                              setModalUpdate(true)
                          }} 
                          >Изменить</button>  */}
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
                        {/* <button className={classNames(classes.list__button, classes.list__button_size)} onClick={() =>
                          {    
                            setNotId(item.id)
                          setModalNotification(true)
                          }
                          }>Удалить</button> */}
                    </div>                              
                  </div>                   
                  </li> 
  
                          
                
                )}
            
         </ol>
      </div>
    )
})

export default Arhive