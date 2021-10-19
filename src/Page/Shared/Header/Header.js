import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Header.css'
const Header = () => {
    const history = useHistory()
    const {user,logOut} = useAuth()

    //login route push after click on login btn in nav bar
    const loginHandle= () => {
        history.push('/login')
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky= 'top' className='py-3'>
        <Container>
        <Navbar.Brand className='logo' as={Link} to="/home">Triangle Care</Navbar.Brand>
        <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/about">About</Nav.Link>
                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                 
             <Navbar.Text>
                {user?.email || user?.displayName ? <h6 className='me-3 my-3 fw-bold text-white'><i  className="fas fa-user-check fs-5 text-primary"></i> {user?.displayName}</h6> : ''}
             </Navbar.Text>
            {
                user?.email || user?.displayName ? 
                <button onClick={logOut} className="btn btn-danger">Logout</button>
                :
                <button onClick={loginHandle} className="btn btn-danger">Login</button>
            }
                         
             </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;