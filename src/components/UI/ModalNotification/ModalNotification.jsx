import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalNotification.module.css'

import { observer } from 'mobx-react-lite';
import { delExam, fetchExam } from '../../http/guaranteeAPI';
import { Context } from '../../../index';


const ModalNotification = observer(({show, onHide, props,}) => {
    const {examination}  = useContext(Context)
    const ok = () => {
        return true
    }
    
  const delRec = async (props) => {
        const id = +props
        try {
            if(ok === ok && props && delRec) {
                await delExam({id})
            onHide()
            await fetchExam(null, null).then(data => {
                examination.SetExamination(data)   
    //   examination.setTotalCount(data.count)
    //   .sort((a, b) => a.id > b.id ? 1 : -1)
            })
            } else {return}
            
        } catch (error) {
            console.log(error.error)
        }
    }


    
    return (        
        <Modal
            {...props}
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"          
            >
            <div  className={classes.modal__content}> 
                <div className={classes.modal__box}>
                    <h2 className={classes.modal__title}>Подтвердите удаление</h2>
                    <div className={classes.modal__btn_box}>
                        <Button className={classes.modal__btn} onClick={onHide} >Отмена</Button>
                        <button className={classes.modal__btn} onClick={() =>
                        {ok()
                        delRec(props)}
                        }>Подтвердить удаление</button>           
                    </div>            
                </div>         
            </div>                        
        </Modal>
    )
})
    
export default ModalNotification