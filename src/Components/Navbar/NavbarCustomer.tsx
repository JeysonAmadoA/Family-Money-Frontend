import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../Routes/Private.Routes';

function NavbarCustomer() {
    return (
      <>
        <Navbar className="navbar" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">MoneyTrees</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link  as={Link} to={PrivateRoutes.GROUPS}>Grupos</Nav.Link>
              <Nav.Link  as={Link} to={PrivateRoutes.MEMBERS}>Miembros</Nav.Link>
              <Nav.Link as={Link} to={PrivateRoutes.MONEY_REGISTER}>Registros</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

export default NavbarCustomer