import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../../..';
import { fetchExamWorks } from '../../http/guaranteeAPI';

import ModalUpdate from '../../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../../UI/ModalNotification/ModalNotification';
// import classes from './FactoryСheck.module.css'
import classes from '../GeneralStyles/GeneralStyles.module.css'
import classNames from 'classnames';
import WarrantyTableHeader from '../WarrantyTableHeader/WarrantyTableHeader';
import SelectSort from '../../UI/Select/SelectSort/SelectSort';
import TabelList from '../../UI/TabelList/TabelList';



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


  const sortedtable = useMemo(() => {
   if(sort) {
    return examinationworks.examinationworks.slice().filter(table => table.manager.toLowerCase().includes(sort))

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
            <TabelList
              list={sortedtable}
            />
        {/* <ol className={classes.list}>     
            { sortedtable.map((item, index) =>    
                <li className={classes.item} key={item.id}>
                <div className={classes.item__box}>
                  <div className={classes.table} >    
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
                       
                    
                  </div>                              
                </div>                   
                </li> 

                        
              
              )}
          
       </ol> */}
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