import {Card, Modal} from 'react-bootstrap';
import {useMainContext} from '../../context/MainContext';

const CharacterModal = () => {
  const {showCharacterModal, setShowCharacterModal} = useMainContext();

  const handleCloseCharacterModal = () => {
    setShowCharacterModal({id: null, name: null, image: null, show: false});
  };
  return (
    <Modal
      show={showCharacterModal.show}
      onHide={handleCloseCharacterModal}
      centered
      size='sm'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {showCharacterModal.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light d-flex justify-content-around fs-3'>
        <div className='d-flex gap-2 align-items-center'>
          {showCharacterModal.image && (
            <img src={showCharacterModal.image} width='100%' />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CharacterModal;
