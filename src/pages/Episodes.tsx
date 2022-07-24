import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useMainContext} from '../context/MainContext';
import {useGetAllEpisodesQuery} from '../data/graphQl/queries/getAllEpisodesQuery';

const Episodes = () => {
  const {count, currentPage, episodes, getEpisodes, getMoreEpisodes, nextPage} =
    useGetAllEpisodesQuery();
  const {setEpisode} = useMainContext();

  useEffect(() => {
    getEpisodes({
      variables: {
        mypage: 1,
      },
    });
    nextPage && getMoreEpisodes(currentPage + 1);
    //will refactor
    episodes && setEpisode(episodes);
  }, [getEpisodes, nextPage]);

  //first 3 words for episodesArr
  let episodesArr: string[] = [];
  let arr = [];
  episodes?.map((item) => {
    episodesArr.includes(item.episode.slice(0, 3))
      ? episodesArr
      : episodesArr.push(item.episode.slice(0, 3));
  });

  return (
    <div className='text-light'>
      <div className='d-flex flex-wrap justify-content-center '>
        {episodesArr?.map((episode, index) => {
          return (
            <NavLink
              to={`./${episode.toLowerCase()}`}
              className='bg-info d-flex justify-content-center align-items-center m-2 hover fs-1 text-light'
              style={{width: '360px', height: '360px', cursor: 'pointer'}}
              key={index}
            >
              {episode}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Episodes;
