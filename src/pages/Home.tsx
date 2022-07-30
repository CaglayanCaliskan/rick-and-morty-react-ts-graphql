import {Carousel} from 'react-bootstrap';
import bg from '../assets/photos/thumb-1920-1099810.jpg';
import bg1 from '../assets/photos/bg1.gif';
import bg4 from '../assets/photos/bg4.webp';
const Home = () => {
  return (
    <div
      className='text-light text-center d-flex flex-column justify-content-between '
      style={{height: '80vh'}}
    >
      <div className='my-1'>
        <h3>Wellcome to Rick & Morty World</h3>
        <Carousel fade className='mt-5 '>
          <Carousel.Item>
            <img className='d-block w-100 rounded' src={bg} alt='First slide' />
            <Carousel.Caption>
              <p className='text-dark'>Find Your Favorite Characters</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded'
              src={bg4}
              alt='Second slide'
            />

            <Carousel.Caption>
              <p className='text-dark'>Find Your Favorite Episodes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded'
              src={bg1}
              alt='Third slide'
            />

            <Carousel.Caption>
              <p className='text-dark'>Play Puzzle Game</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <p>
        for more info:{' '}
        <a
          href='https://github.com/CaglayanCaliskan/rick-and-morty-react-ts-graphql'
          target='blank'
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Home;
