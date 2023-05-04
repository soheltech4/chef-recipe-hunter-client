import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Chef Food Hunter</Navbar.Brand>
                    <div className='d-flex gap-5'>
                        <div className="me-auto text-decoration-none">
                            <Link className='text-decoration-none text-white me-5' to="/">Home</Link>
                            <Link className='text-decoration-none text-white' to="/blogs">Blogs</Link>
                        </div>
                        <div>
                            <div className="me-auto text-decoration-none">
                                <Link className='text-decoration-none text-white me-5' to="/user">User</Link>
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