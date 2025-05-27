import React, { useContext, useEffect, useState } from 'react'
import TabContent from './TabContent';
import classes from './TabGuarantee.module.css'
import classNames from 'classnames';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import { Link, NavLink } from 'react-router-dom';
import { fetchExam, fetchExamCharger, fetchExamReady, fetchExamWorks } from '../../http/guaranteeAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';

const TabGuarantee = observer (({items}) => {

const {examination, examinationcharger, examinationworks, examinationready}  = useContext(Context)


    let number = localStorage.getItem('numberTab' )
    const [ active, setActive ] = useState(number);

    // const openTab = e => setActive(+e.target.dataset.index[0]);

    const numberAc = localStorage.setItem('numberTab', active )
    const className = localStorage.setItem('cl', 'active')

    useEffect(() => {
      
    },[items])

const    openTab = (e) => { 
    Update()

          setActive(+e.target.dataset.index[0])
        }

      function Update () {
  
        fetchExam(null, null).then(data => {
          examination.SetExamination(data)        
        })
  
        fetchExamCharger(null, null).then(data => {
          examinationcharger.SetExaminationCharger(data)
        })
  
        fetchExamWorks(null, null).then(data => {
          examinationworks.SetExaminationWorks(data)
        })
  
        fetchExamReady(null, null).then(data => {             
          examinationready.SetExaminationReady(data)                        
        })
      }


  return (
    <div>
     
    <div className={classNames(classes.tab)}>
      {items.map((n, i) => (
      
        
        <button key={n.index}

          className={`tablinks ${i == active ? 'active' : ''}`}
          onClick={openTab}
          data-index={i}
         
        >{n.title}</button>
      ))}
    </div>
    {items[active] && <TabContent {
      

      ...items[active]
      
      } />}
  </div>
  )
})

export default TabGuarantee