import {Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import homeicon from '../assets/homeicon.svg';

const Navbar = () => {
  return (
    <NavbarBs
      className='mb-4 sticky-top  bg-dark'
      style={{gap: '.7em', fontSize: '1.5em'}}
    >
      <Nav className='me-auto'>
        <Nav.Link className='text-light ' to='/' as={NavLink}>
          <img src={homeicon} width='40px' alt='homei' />
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className='text-light' to='/characters' as={NavLink}>
          Characters
        </Nav.Link>
        <Nav.Link className='text-light' to='/episodes' as={NavLink}>
          Episodes
        </Nav.Link>
        <Nav.Link className='text-light' to='/game' as={NavLink}>
          Game
        </Nav.Link>
      </Nav>
    </NavbarBs>
  );
};

export default Navbar;
