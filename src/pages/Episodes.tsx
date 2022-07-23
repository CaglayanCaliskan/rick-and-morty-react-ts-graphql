import {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useGetAllEpisodesQuery} from '../data/graphQl/queries/getAllEpisodesQuery';

const Episodes = () => {
  const {count, currentPage, episodes, getEpisodes, getMoreEpisodes, nextPage} =
    useGetAllEpisodesQuery();

  useEffect(() => {
    getEpisodes({
      variables: {
        mypage: 1,
      },
    });
    nextPage && getMoreEpisodes(currentPage + 1);
  }, [getEpisodes, nextPage]);
  let filterArr: string[] = [];

  episodes?.map((item) => {
    filterArr.includes(item.episode.slice(0, 3))
      ? filterArr
      : filterArr.push(item.episode.slice(0, 3));
  });

  return (
    <div className='text-light'>
      <div className='d-flex flex-wrap justify-content-center '>
        {filterArr?.map((episode, index) => {
          return (
            <div
              className='bg-success m-2 text-center hover'
              style={{width: '360px', height: '360px'}}
              key={index}
            >
              {episode}
            </div>
          );
        })}
      </div>
      <NavLink to='./test'>goo</NavLink>
    </div>
  );
};

export default Episodes;
