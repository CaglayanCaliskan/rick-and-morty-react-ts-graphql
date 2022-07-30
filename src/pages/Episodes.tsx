import {useEffect} from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useMainContext} from '../context/MainContext';
import {useGetAllEpisodesQuery} from '../data/graphQl/queries/getAllEpisodesQuery';
import s01 from '../assets/episodes/s01.gif';
import s02 from '../assets/episodes/s02.gif';
import s03 from '../assets/episodes/s03.gif';
import s04 from '../assets/episodes/s04.gif';
import s05 from '../assets/episodes/s05.gif';

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
  episodes?.map((item) => {
    episodesArr.includes(item.episode.slice(0, 3))
      ? episodesArr
      : episodesArr.push(item.episode.slice(0, 3));
  });

  const imgs = [s01, s02, s03, s04, s05];

  return (
    <main className='text-light'>
      <div className='d-flex flex-wrap justify-content-center '>
        {episodesArr?.map((episode, index) => {
          const es = episode.toLowerCase();
          return (
            <Nav.Link
              className='d-flex border border-warning rounded flex-column justify-content-center align-items-center m-3 hover text-light '
              as={NavLink}
              to={`./${episode.toLowerCase()}`}
              key={index}
            >
              <div className='fs-3 text-light ho text-uppercase fw-bold onhover'>
                <span>{episode.replace('S0', 'Season ')}</span>
              </div>
              <div
                style={{
                  width: '300px',
                  height: '260px',
                  cursor: 'pointer',
                  backgroundImage: `url(${imgs[index]})`,
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
