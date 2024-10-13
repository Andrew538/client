import React from 'react'
import classes from './AddEntry.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddEntry({show, onHide}) {
  



  return (

    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
    // <div className={classes.modal} > 
    //     <div className={classes.modal__box}>
    //     <h2>Добавить запись</h2>
    //     <button className={classes.modal__button} >Закрыть</button>
    //         <input placeholder='Дата поступления' className={classes.modal__input} type="text" />
    //         <input placeholder='Клиент' className={classes.modal__input} type="text" />
    //         <input placeholder='Менеджер' className={classes.modal__input} type="text" />
    //         <input placeholder='Название' className={classes.modal__input} type="text" />
    //         <input placeholder='Дата выдачи' className={classes.modal__input} type="text" />
    //         <input placeholder='Заключение' className={classes.modal__input} type="text" />

    //     </div>
    // </div>
  )
}

export default AddEntry