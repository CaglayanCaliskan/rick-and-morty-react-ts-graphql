import React from 'react';
import {Button, Container, Nav} from 'react-bootstrap';
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
          <div key={item.id}>
            Episode {index + 1} {item.name}
          </div>
        );
      })}
    </Container>
  );
};

export default Episode;
