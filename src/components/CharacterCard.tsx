import {Card, Col, Row} from 'react-bootstrap';
import {ICharacter} from '../allTypes';
import {useMainContext} from '../context/MainContext';

const CharacterCard = ({
  name,
  id,
  location,
  image,
  species,
  status,
  gender,
}: ICharacter) => {
  const {handleCharacterModal} = useMainContext();

  return (
    <Card
      className='text-light p-1 m-2'
      style={{background: 'rgb(60, 62, 68)'}}
    >
      <Row>
        <Col className='col-5'>
          <Card.Img
            src={image}
            style={{
              minHeight: '160px',
              objectFit: 'cover',
            }}
          />
        </Col>
        <Col>
          <div>
            <h5
              onClick={() => handleCharacterModal(id, name, image)}
              className='ho text-uppercase fw-bold onhover'
              style={{cursor: 'pointer'}}
            >
              {name}
            </h5>
            <div className='d-flex align-items-center'>
              <div
                className={`bg-${
                  status === 'Alive' ? 'success' : 'danger'
                } rounded-circle me-2`}
                style={{width: '10px', height: '10px'}}
              ></div>
              {status} - {species}
            </div>
            <Card.Text className='d-flex flex-column'>
              <span className='text-muted mb-0'>Last known location: </span>
              <span>{location.name}</span>
              <span>
                {' '}
                <span className='text-muted'>gender:</span> {gender}
              </span>
            </Card.Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default CharacterCard;
