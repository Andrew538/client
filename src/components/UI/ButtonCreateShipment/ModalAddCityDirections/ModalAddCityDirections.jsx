import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalAddCityDirections = ({ show, onHide, props }) => {
  return (
     <Modal
      {...props}
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div>
        <h1>Добавить клиента</h1>
        
        <form action="">
          <button type="submit">Сохранить</button>
          <button type="button">Закрыть</button>
        </form>
      </div>
    </Modal>
  )
}

export default ModalAddCityDirections