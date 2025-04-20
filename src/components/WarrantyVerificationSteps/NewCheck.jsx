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
import ButtonDelete from '../UI/ButtonDelete/ButtonDelete';
import ButtonUpdate from '../UI/ButtonUpdate/ButtonUpdate';
import TabelList from '../UI/TabelList/TabelList';





const  NewCheck = observer(() => {
  const {examination, status, users}  = useContext(Context)
  const [modalShow, setModalShow] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification ] = useState(false)
  let [numId, setNumId] = useState('')
  let [notId, setNotId] = useState('')
  let [Id, setId] = useState('')


  useEffect(() => {   
    fetchExam().then(data => {
      examination.SetExamination(data)
      status.SetStatus(data)
      
    })
  },[examination])


    // useEffect(() => {
    //   try {        
    //     const id = numId
    //     fetchOneExam(id).then(data => {
    //       setId(data)
    //       console.log(data)
    //     })     
    //     }        
    //    catch (error) {
    //     console.log(error)
    //    }
    // }, [examination])





  const [sort, setSort] = useState('')

  let sortedtable = useMemo(() => {
   if(sort) {
    return examination.examination.filter(list => list.manager.toLowerCase().includes(sort))
   } else {
    return examination.examination

   }
  }, [sort, examination.examination])

//  console.log(Array.isArray(sortedtable))
  return (
    <div className={classes.list}>
      <button
        className={classes.list__button}
        onClick={() => setModalShow(true)}
      >
        Добавить запись
      </button>
      <AddEntry show={modalShow} onHide={() => setModalShow(false)} />
      <SelectSort
        value={sort}
        onChange={setSort}
        defaultValue="Сортировка по менеджеру"
        options={[
          { value: "туркин", name: "Туркин" },
          { value: "задоркин", name: "Задоркин" },
          { value: "коновалова", name: "Коновалова" },
        ]}
      />
      <WarrantyTableHeader />
        <TabelList
          list={sortedtable}
        />
      {/* <ol className={classes.list}>
        {sortedtable.map((item) => (
          <li className={classes.item} key={item.id}>
            <div className={classes.item__box}>
              <div className={classes.table}>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_one
                  )}
                >
                  {item.date}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_two
                  )}
                >
                  {item.client}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_three
                  )}
                >
                  {item.city}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_four
                  )}
                >
                  {item.manager}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_five
                  )}
                >
                  {item.product}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_six
                  )}
                >
                  {item.productionDate}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_seven
                  )}
                >
                  {item.numberReturnDocument}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_eight
                  )}
                >
                  {item.plantDocumentNumber}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_nine
                  )}
                >
                  {item.movingToDefectWarehouse}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_ten
                  )}
                >
                  {item.releaseDate}
                </div>
                <div
                  className={classNames(
                    classes.table__item,
                    classes.table__item_eleven
                  )}
                >
                  {item.result}
                </div>
              </div>
              <div className={classNames(classes.list__button__box)}>
                <ButtonUpdate numberId={item.id} />

                <ButtonDelete setid={item.id} />
              </div>
            </div>
          </li>
        ))}
      </ol> */}
      <ModalUpdate
        props={Id}
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
      />
    </div>
  );
})

export default NewCheck