import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css"
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const location = useLocation();
    const {user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto'>
            <Navbar className='rounded mt-2' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='text-bold'> <img style={{ width: '50px' }} src="https://i.ibb.co/jL2SHH7/logo.png" alt="" /> Chef <span className='text-warning'>Food</span> Hunter</Navbar.Brand>
                    <div className='d-flex gap-5'>
                        <div className="d-flex gap-5 me-auto tex-center text-decoration-none">
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/blogs' ? 'active' : ''}`} to="/blogs">Blogs</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/about' ? 'active' : ''}`} >About</Link>
                            <Link className={`text-decoration-none text-warning ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                        </div>
                        <div>
                            <div className="me-auto text-decoration-none">
                                {user &&
                                    <Link className='text-decoration-none text-white me-2'><FaUserCircle style={{ fontSize: '2rem' }} /></Link>
                                }
                                {user ?
                                    <button onClick={handleLogOut}>
                                        <Link className={`text-decoration-none ${location.pathname === '/login' ? 'active' : ''}`}>Logout</Link>
                                    </button> :
                                    <button>
                                        <Link className={`text-decoration-none ${location.pathname === '/' ? 'active' : ''}`} to="/login">Login</Link>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
