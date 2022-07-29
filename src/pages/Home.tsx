import bg from '../assets/photos/thumb-1920-1099810.jpg';
const Home = () => {
  return (
    <div className='container text-light text-center d-flex flex-column '>
      <h1>Wellcome to Rick & Morty </h1>
      <div className='my-1'>
        <img src={bg} alt={bg} style={{width: '100%'}} />
      </div>
      <h2 className=''>You can find your favorite character and episodes </h2>
      <p>
        for more info: <a href=''>Github</a>
      </p>
    </div>
  );
};

export default Home;
