import {Button, Container, ListGroup, Nav} from 'react-bootstrap';
import {NavLink, useParams} from 'react-router-dom';
import {useMainContext} from '../context/MainContext';

const Episode = () => {
  let {season} = useParams();
  const {episode} = useMainContext();

  let filteredEpisodes = episode?.filter(
    (item) => item.episode.slice(0, 3).toLowerCase() === season
  );

  return (
    <Container className='text-light'>
      <header className='d-flex justify-content-between'>
        <h1>{season?.replace('s0', 'Season ')}</h1>
        <Button className='p-0 m-0 btn-secondary'>
          <Nav.Link as={NavLink} to='/episodes' className='text-light h-full'>
            back
          </Nav.Link>
        </Button>
      </header>
      {filteredEpisodes?.map((item, index) => {
        return (
          <ListGroup key={item.id}>
            <ListGroup.Item className='bg-dark text-light'>
              Episode {index + 1} {item.name}
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
};

export default Episode;
