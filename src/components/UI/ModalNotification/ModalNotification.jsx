import React, { useContext,} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './ModalNotification.module.css'
import { observer } from 'mobx-react-lite';
import { delExam, fetchExam, fetchExamArhive, fetchExamCharger, fetchExamReady, fetchExamWorks } from '../../http/guaranteeAPI';
import { Context } from '../../../index';
import { deleteClient, deleteDelivery, fetchDay, fetchDelivery } from '../../http/mapApi';


const ModalNotification = observer(({show, onHide, props, idDelivery, idDirection, dateCreate, idClient}) => {
    const {examination, examinationcharger, examinationworks, examinationready, examinationarhive, ready, direction}  = useContext(Context)
    

    let managerid = localStorage.getItem("c");
    let number = localStorage.getItem("numberTabDay");

     function updateClient() {
       let userid = Number(managerid);
       let day = Number(number) + 1;
       fetchDay(userid, day).then((data) => {
         direction.SetDirection(data);
       });
     }

    const ok = () => {
        return true
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
      fetchExamArhive().then((data) => {           
        examinationarhive.SetExaminationArhive(data);        
      });
    }

 
  const delRec = async (props, idDelivery, idDirection, dateCreate, idClient) => {
    const id = +props;
    try {
      if (ok && props && delRec) {
        await delExam({ id });
        onHide();
        Update();
        await fetchExam(null, null).then((data) => {
          examination.SetExamination(data);
        });
      } else if(idDelivery && idDirection && delRec) {
        const id = +idDelivery
        const iddirection = +idDirection
        // const dateCreate = dateCreate
        await deleteDelivery({id, iddirection, dateCreate})
        // fetchDelivery().then(data => {ready.SetReady(data)})        
        onHide();
      } else if(idClient) {
        const id = +idClient
        await deleteClient({id})
        onHide()
        updateClient()
      }
       
    } catch (error) {
      console.log(error.error);
    }
  };
    
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
                        delRec(props, idDelivery, idDirection, dateCreate, idClient )}
                        }>Подтвердить удаление</button>           
                    </div>            
                </div>         
            </div>                        
        </Modal>
    )
})
    
export default ModalNotification