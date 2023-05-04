import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    const location = useLocation();

    return (
        <div className='container mx-auto'>
            <Navbar className='rounded mt-2' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='text-bold'> <img style={{width: '50px'}} src="https://i.ibb.co/jL2SHH7/logo.png" alt="" /> Chef <span className='text-warning'>Food</span> Hunter</Navbar.Brand>
                    <div className='d-flex gap-5'>
                        <div className="d-flex gap-5 me-auto tex-center text-decoration-none">
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                        </div>
                        <div>
                            <div className="me-auto text-decoration-none">
                                <Link className='text-decoration-none text-white me-2'><FaUserCircle style={{ fontSize: '2rem' }}/></Link>
                                <Link className={`text-decoration-none text-white ${location.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
