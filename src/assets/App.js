import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../public/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png';

const NotFound = () => {
    return (
        <Container className="mt-4 text-center">
            <img src={NotFoundImage} alt="404 Not Found" />
            <h2 className="mt-4">Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to homepage</Link>
        </Container>
    );
};

export default NotFound;