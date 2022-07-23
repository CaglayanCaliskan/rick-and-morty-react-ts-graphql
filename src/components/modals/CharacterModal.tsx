import {Card, Modal} from 'react-bootstrap';
import {useMainContext} from '../../context/MainContext';

type CharacterModalProps = {
  id: number | null;
  name: string | null;
  show: boolean;
};

const CharacterModal = () => {
  const {showCharacterModal, setShowCharacterModal} = useMainContext();

  const handleCloseCharacterModal = () => {
    setShowCharacterModal({id: null, name: null, show: false});
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
          {showCharacterModal.id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light d-flex justify-content-around fs-3'>
        <Card>selam</Card>
        <div className='d-flex gap-2 align-items-center'>
          <label htmlFor='morty'>Morty</label>
          <input
            type='checkbox'
            id='morty'
            style={{marginLeft: '10px', transform: 'scale(2)'}}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CharacterModal;
