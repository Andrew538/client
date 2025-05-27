import React, { useContext, useMemo } from 'react'
import classes from './SelectSort.module.css'
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../..';
import { fetchExam, fetchExamCharger, fetchExamReady, fetchExamWorks } from '../../../http/guaranteeAPI';

const SelectSort = observer (({options, defaultValue, value, onChange}) => {


  

const {examination, examinationcharger, examinationworks, examinationready}  = useContext(Context)


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

// console.log(options)
  return (
    <div className={classNames(classes.box)}>
        <select className={classNames(classes.sort)}
                value={value}
                onChange={event => onChange(event.target.value)}
                onClick={Update}
            >
            <option disabled value="">{defaultValue}</option>
            {options}
        </select>
      <button 
        className={classNames(classes.button)}
        onClick={() => onChange('')}
      ></button>


    </div>
   
  )
})

export default SelectSort