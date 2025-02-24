import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../../..';
import { fetchExamWorks } from '../../http/guaranteeAPI';

import ModalUpdate from '../../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../../UI/ModalNotification/ModalNotification';
import classes from './FactoryСheck.module.css'
import classNames from 'classnames';
import WarrantyTableHeader from '../WarrantyTableHeader/WarrantyTableHeader';
import SelectSort from '../../UI/Select/SelectSort/SelectSort';



const  FactoryСheck = observer (() => {

  const {examinationworks, status}  = useContext(Context)
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification ] = useState(false)
  let [numId, setNumId] = useState('')
  let [notId, setNotId] = useState('')
  const [sort, setSort] = useState('')

  const [itemProps, setItemProps] = useState()



  useEffect(() => {
    fetchExamWorks(null, null).then(data => {
      setItemProps(data)
      examinationworks.SetExaminationWorks(data)
      status.SetStatus(data.map(i => i.statusExam))
    })
  },[examinationworks])


  const sortedList = useMemo(() => {
   if(sort) {
    return examinationworks.examinationworks.slice().filter(list => list.manager.toLowerCase().includes(sort))

   }
    return examinationworks.examinationworks
  }, [sort, examinationworks.examinationworks])

  return (
    <div className={classes.list}>
             <SelectSort
                value={sort}
                onChange={setSort}
                defaultValue="Сортировка по менеджеру"
                options={[
                  {value: 'туркин', name: 'Туркин'},
                  {value: 'задоркин', name: 'Задоркин'},
                  {value: 'коновалова', name: 'Коновалова'}
                ]}
              /> 
            <WarrantyTableHeader/>
            <h1> Аккумуляторы отправленные на завод</h1>
        <ol>     
            { sortedList.map((item, index) =>    
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
    </div>
  )
})

export default FactoryСheck