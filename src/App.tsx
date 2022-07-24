import './App.css';
import Home from './pages/Home';
import {Container} from 'react-bootstrap';
import Navbar from './components/Navbar';
import {CartProvider, useMainContext} from './context/MainContext';
import {Routes, Route} from 'react-router-dom';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Game from './pages/Game';
import Episode from './pages/Episode';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/episodes/:season' element={<Episode />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
