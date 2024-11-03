import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../../index'
import classes from './Guarantee.module.css'
import classNames from 'classnames';
import AddEntry from '../../UI/modals/AddEntry';
import { delExam, fetchExam, updateRecord } from '../../http/guaranteeAPI';
import ModalDelete from '../../UI/ModalDelete/ModalDelete';
import MyInput from '../../UI/MiInput/MyInput';

const  Guarantee = observer(() => {
  const {examination}  = useContext(Context)
  const [modalShow, setModalShow] = useState(false);
  const [active, setActive] = useState(true)
  let [numId, setNumId] = useState(null)

 const inRef = useRef()
console.log(inRef.current)
function inputActive (item) {
  // console.log(item.id)

  examination.examination.map(i => {
    if (item.id === i.id) {
      
      setActive(false)
      console.log('Привет')
    } else {
      setActive()
    }
    // console.log(i.id)
  })
  

 
   if (numId ) {
    setActive()
   } else {setActive(false)}
  }



  const [date, setDate] = useState('')
  const [client, setclient] = useState('')
  const [manager, setManager] = useState('')
  const [product, setProduct] = useState('')
  const [releaseDate, setReleaseDate] = useState()
  const [result, setResult] = useState()
  const [addRec, setAddRec] = useState()

  const delRec = async (id) => {
  
    if (delExam) {
     
    }
    await delExam({id})
    await fetchExam(null, null).then(data => {
      examination.SetExamination(data)       
    })

  }

  

  const newRec = async (item) => {
    const id = parseInt(item.id)
    // const id = item.id

    console.log(id)

   try {
    await updateRecord( id, releaseDate)
    fetchExam(null, null).then(data => {
      examination.SetExamination(data.sort((a, b) => a.id > b.id ? 1 : -1))
      console.log(data.sort())
    })
    setReleaseDate( '')
    
   } catch (error) {
     console.log(error)
   }
  }

  return (
    <div className={classes.list}>
      <button className={classes.list__button} onClick={() => setModalShow(true)} >Добавить запись</button>
      <AddEntry  show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <ol>
        {examination.examination.map(item => 

          <li key={item.id} >
           <div className={classes.list__box} >
            <div className={classNames(classes.list__item, classes.list__item_two)}>{item.date}</div> 
              <div className={classNames(classes.list__item, classes.list__item_three)}>{item.manager}</div> 
              <div className={classNames(classes.list__item, classes.list__item_four)}>{item.product}</div> 
              <div className={classNames(classes.list__item, classes.list__item_five)}>{item.releaseDate}</div> 
              <textarea className={classNames(classes.list__item, classes.list__item_six)} value={releaseDate}  onChange={e => setReleaseDate(e.target.value)} disabled={active} >{item.result}</textarea>
              <button  type='button' onClick={(e)=> {
                e.stopPropagation()
                inputActive(item)
                }}>Изменить</button> 
              <button onClick={() => newRec(item)}>Сохранить</button>
              <button className={classes.button} onClick={() => delRec(item.id)}>Удалить</button>
            </div>              
           </li> 
        )}
       </ol>
    </div>
  )
})

export default Guarantee