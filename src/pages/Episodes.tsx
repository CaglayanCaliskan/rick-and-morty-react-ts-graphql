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
    <main className='text-light'>
      <div className='d-flex flex-wrap justify-content-center '>
        {episodesArr?.map((episode, index) => {
          return (
            <Nav.Link
              className='d-flex flex-column justify-content-center align-items-center m-3 hover text-light '
              as={NavLink}
              to={`./${episode.toLowerCase()}`}
              key={index}
            >
              <div className='fs-3 text-light ho text-uppercase fw-bold onhover'>
                <span>{episode.replace('S0', 'Season ')}</span>
              </div>
              <div
                style={{
                  width: '360px',
                  height: '260px',
                  cursor: 'pointer',
                  backgroundImage: `url(./src/assets/episodes/${episode}.gif)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='rounded'
              ></div>
            </Nav.Link>
          );
        })}
      </div>
    </main>
  );
};

export default Episodes;
