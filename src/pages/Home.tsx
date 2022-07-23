const Home = () => {
  return (
    <div className='container' style={{backgroundImage: 'url(/bg.svg)'}}>
      <h1>Home page</h1>

      <div>
        <img
          className='rounded-circle'
          src='https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1300&quality=85&fit=max&s=11e496bb63097812289495ecea7cfb18'
          alt='HomePage'
          style={{maxWidth: '100%'}}
        />
      </div>
    </div>
  );
};

export default Home;
