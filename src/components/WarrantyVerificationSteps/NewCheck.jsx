import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'

import classes from './NewCheck.module.css'


import classNames from 'classnames';
import { Context } from '../..';
import { fetchExam, fetchOneExam } from '../http/guaranteeAPI';
import AddEntry from '../UI/modals/AddEntry';
import ModalUpdate from '../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../UI/ModalNotification/ModalNotification';
import WarrantyTableHeader from './WarrantyTableHeader/WarrantyTableHeader';

import SelectSort from '../UI/Select/SelectSort/SelectSort';
import { check } from '../http/userAPI';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';





const  NewCheck = observer(() => {
  const {examination, status, users}  = useContext(Context)
  const [modalShow, setModalShow] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification ] = useState(false)
  let [numId, setNumId] = useState('')
  let [notId, setNotId] = useState('')
  let [Id, setId] = useState('')

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






  useEffect(() => {   
    fetchExam().then(data => {
      examination.SetExamination(data)
      status.SetStatus(data)
      
    })
  },[examination])


    useEffect(() => {
      try {        
        const id = numId
        fetchOneExam(id).then(data => {
          setId(data)
          console.log(data)
        })     
        }        
       catch (error) {
        console.log(error)
       }
    }, [])





  const [sort, setSort] = useState('')

  let sortedtable = [] = useMemo(() => {
   if(sort) {
    return examination.examination.clice().filter(list => list.manager.toLowerCase().includes(sort))
   } else {
    return examination.examination

   }
  }, [sort, examination])

 console.log(Array.isArray(sortedtable))
  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
      <AddEntry  show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
     
        <ol className={classes.list}>
 
            {sortedtable.map((item) =>    
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
                            setId(item.id)
                            setModalUpdate(true)
                            console.log('Привет')
                        }} 
                        >Изменить </button> 
                              
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
       <ModalUpdate
          props={Id}             
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

export default NewCheck