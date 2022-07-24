import React from 'react';
import {useParams} from 'react-router-dom';
import {useMainContext} from '../context/MainContext';

const Episode = () => {
  let {season} = useParams();
  const {episode} = useMainContext();

  let filteredEpisodes = episode?.filter(
    (item) => item.episode.slice(0, 3).toLowerCase() === season
  );

  return (
    <div className='text-light'>
      <h1>{season}</h1>
      {filteredEpisodes?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Episode;
