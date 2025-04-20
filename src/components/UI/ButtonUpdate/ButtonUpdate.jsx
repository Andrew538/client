import React, { useState } from 'react'
import classes from '../ButtonUpdate/ButtonUpdate.module.css'
import ModalUpdate from '../ModalUpdate/ModalUpdate';

const ButtonUpdate = ({ numberId }) => {
  const [modalUpdate, setModalUpdate] = useState(false);
  let [id, setId] = useState("");

  return (
    <div>
      <button
        className={classes.button__update}
        onClick={() => {
          setId(numberId);
          setModalUpdate(true);
        }}
      />
      <ModalUpdate
        props={id}
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
      />
    </div>
  );
};

export default ButtonUpdate;