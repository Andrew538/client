import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index'
import classes from './Guarantee.module.css'
import classNames from 'classnames';
import AddEntry from '../../UI/modals/AddEntry';
import { delExam, fetchExam} from '../../http/guaranteeAPI';

import ModalUpdate from '../../UI/ModalUpdate/ModalUpdate';
import ModalNotification from '../../UI/ModalNotification/ModalNotification';

const  Guarantee = observer(() => {
  const {examination}  = useContext(Context)
  const [modalShow, setModalShow] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification ] = useState(false)
  // const [active, setActive] = useState(true)
  let [numId, setNumId] = useState('')
  let [notId, setNotId] = useState('')


  const [itemProps, setItemProps] = useState()
  // console.log(itemProps)



//  const inRef = useRef()

//   function inputActive (id, index) {
//     console.log(id, index + 1)
    
//     if (id === index + 1 ) {
//       setActive(false)
//     } else {
//       setActive(true)
//     }
//   }




  // const [date, setDate] = useState('')
  // const [client, setclient] = useState('')
  // const [manager, setManager] = useState('')
  // const [product, setProduct] = useState('')
  // const [releaseDate, setReleaseDate] = useState()
  // const [result, setResult] = useState()
  // const [addRec, setAddRec] = useState()

  // const delRec = async (id) => {
  
  //   setModalNotification(true)
  //   if(modalNotification === false) {
  //     return
  //   } else {
  //     await delExam({id})
     
  //   }
  //   await fetchExam(null, null).then(data => {
  //     examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))      
  //     // examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))

  //   })

  // }

  useEffect(() => {
   
    fetchExam(null, null).then(data => {
      setItemProps(data)

      examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
      // console.log(data.sort())
    })
  },[examination])

  // const newRec = async (item) => {
  //   const id = parseInt(item.id)
  //   // const id = item.id

  //   // console.log(id)

  //  try {
  //   await updateRecord( id, releaseDate)
  //   fetchExam(null, null).then(data => {
  //     examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
  //     console.log(data.sort())
  //   })
  //   setReleaseDate('')
    
  //  } catch (error) {
  //    console.log(error)
  //  }
  // }



  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
      <AddEntry  show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ul className={classNames(classes.list__column__names)}>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_one)}>Дата поступления</li>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_two)}>Клиент</li>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_three)}>Менеджер</li>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_four)}>Название товара</li>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_five)}>Дата выдачи</li>
        <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_six)}>Заключение</li>
      </ul>
        <ol>
        {examination.examination.map((item, index) =>             
          <li className={classes.list} key={item.id}>
           <div className={classes.list__box}>
              <div className={classes.list__content} >            
                <div className={classNames(classes.list__item, classes.list__item_one)}>{item.date}</div> 
                <div className={classNames(classes.list__item, classes.list__item_two)}>{item.client}</div> 

                <div className={classNames(classes.list__item, classes.list__item_three)}>{item.manager}</div> 
                <div className={classNames(classes.list__item, classes.list__item_four)}>{item.product}</div> 
                <div className={classNames(classes.list__item, classes.list__item_five)}>{item.releaseDate}</div>
                <div className={classNames(classes.list__item, classes.list__item_six)}>{item.result}</div>   
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

export default Guarantee