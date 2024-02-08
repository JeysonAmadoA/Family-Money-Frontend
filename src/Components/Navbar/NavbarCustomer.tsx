import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../Routes/Private.Routes';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../Redux/States/User.State';
import { logOut } from '../../Redux/States/Login.State';

function NavbarCustomer() {

  const dispatch = useDispatch();

    const logOutUser = () => {
      dispatch(logOut());
      dispatch(resetUser());
    } 

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
            <Navbar.Collapse id="navbarNav">
                <Nav className="ms-auto">
                    <NavDropdown title="Cuenta">
                        <NavDropdown.Item >Mi cuenta</NavDropdown.Item>
                        <NavDropdown.Item onClick={logOutUser}>Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }

export default NavbarCustomer