import {useEffect} from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useMainContext} from '../context/MainContext';
import {useGetAllEpisodesQuery} from '../data/graphQl/queries/getAllEpisodesQuery';

const Episodes = () => {
  const {currentPage, episodes, getEpisodes, getMoreEpisodes, nextPage} =
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
            <Nav.Link
              className='d-flex justify-content-center align-items-top m-2 hover fs-1 text-light'
              style={{
                width: '360px',
                height: '260px',
                cursor: 'pointer',
                backgroundImage: `url(./src/assets/episodes/${episode}.gif)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              as={NavLink}
              to={`./${episode.toLowerCase()}`}
              key={index}
            >
              <div className='fs-1 text-primary '>
                <span>{episode}</span>
              </div>
            </Nav.Link>
          );
        })}
      </div>
    </div>
  );
};

export default Episodes;
