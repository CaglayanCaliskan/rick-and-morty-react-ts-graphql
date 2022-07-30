import React from 'react';
import {Form, Modal} from 'react-bootstrap';
import {useMainContext} from '../../context/MainContext';

const FilterModal = () => {
  const {setShowFilterModal, showFilterModal} = useMainContext();
  const handleClose = () =>
    setShowFilterModal((prev) => ({...prev, show: false}));
  return (
    <Modal show={showFilterModal.show} onHide={handleClose} size='sm' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body className=' fs-3'>
        <Form
          className='d-flex justify-content-between'
          onChange={(e) =>
            setShowFilterModal((prev) => ({
              ...prev,
              filter: (e.target as HTMLInputElement).value,
            }))
          }
        >
          <Form.Check label='Rick' name='filter' type='radio' value='rick' />
          <Form.Check label='Morty' name='filter' type='radio' value='morty' />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
