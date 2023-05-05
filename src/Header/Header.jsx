import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <Navbar className='rounded' bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand className='text-bold'> <img style={{ width: '50px' }} src="https://i.ibb.co/jL2SHH7/logo.png" alt="" /> Chef <span className='text-warning'>Food</span> Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                            <Link className={`text-decoration-none me-5 text-warning ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            <Link className={`text-decoration-none me-5 text-warning ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
                            <Link className={`text-decoration-none me-5 text-warning ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            <Link className={`text-decoration-none me-5 text-warning ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                        </Nav>
                        <Nav className="text-center">
                            {user &&
                                <Nav.Link className='text-white me-2'><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>
                            }
                            {user ?
                                <button className="btn btn-outline-light" onClick={handleLogOut}>
                                    <Link className={`text-white fw-bold ${location.pathname === '/login' ? 'active' : ''}`}>Logout</Link>
                                </button> :
                                <button className="btn btn-outline-light">
                                    <Link className={`text-white fw-bold ${location.pathname === '/' ? 'active' : ''}`} to="/login">Login</Link>
                                </button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
