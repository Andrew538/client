import React, { useState } from "react";
import ModalDelivery from "../ModalDelivery/ModalDelivery";

const ButtonDelivery = ({ clientId }) => {
  const [modalDelivery, setModalDelivery] = useState(false);

  const [id, setId] = useState(undefined);

  return (
    <div>
      <button
        onClick={() => {
          setId(clientId);
          setModalDelivery(true);
        }}
      >
        В доставку
      </button>
      <ModalDelivery
        props={id}
        show={modalDelivery}
        onHide={() => setModalDelivery(false)}
      />
    </div>
  );
};

export default ButtonDelivery;
