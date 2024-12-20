import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({show, close, props }) {
  return (
    <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog 
        {...props}
        show={show}
        close={close}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"  onClick={close}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalDelete;