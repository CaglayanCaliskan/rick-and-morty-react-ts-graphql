import React from 'react';
import {Modal} from 'react-bootstrap';
import {useMainContext} from '../../context/MainContext';

const FilterModal = () => {
  const {setShowFilterModal, showFilterModal} = useMainContext();
  const handleClose = () => setShowFilterModal(false);
  return (
    <Modal show={showFilterModal} onHide={handleClose} size='sm' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className='bg-light d-flex justify-content-around fs-3'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.checked, e.target.id)
        }
      >
        <div className='d-flex gap-2 align-items-center'>
          <label htmlFor='rick'>Rick</label>
          <input
            type='checkbox'
            id='rick'
            value='rick'
            style={{marginLeft: '10px', transform: 'scale(2)'}}
          />
        </div>
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

export default FilterModal;
