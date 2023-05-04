import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div className='container mx-auto'>
            <Navbar className='rounded mt-2' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='text-bold'> <img style={{width: '50px'}} src="../../public/logo.PNG" alt="" /> Chef <span className='text-warning'>Food</span> Hunter</Navbar.Brand>
                    <div className='d-flex gap-5'>
                        <div className="d-flex gap-5 me-auto tex-center text-decoration-none">
                            <Link className='text-decoration-none text-white' to="/">Home</Link>
                            <Link className='text-decoration-none text-white' to="/blogs">Blogs</Link>
                            <Link className='text-decoration-none text-white'>About</Link>
                            <Link className='text-decoration-none text-white' to="/contact">Contact</Link>
                        </div>
                        <div>
                            <div className="me-auto text-decoration-none">
                                <Link className='text-decoration-none text-white me-2'><FaUserCircle style={{ fontSize: '2rem' }}/></Link>
                                <Link className='text-decoration-none text-white' to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;