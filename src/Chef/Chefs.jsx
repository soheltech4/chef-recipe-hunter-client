import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const { id, chef_name, years_of_experience, num_of_recipes, recipes, picture_url, likes } = chef
    return (
        <div className='mb-5'>
            <Card className='border border-2 border-warning' style={{ width: '25rem' }}>
                <LazyLoad threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                    <Card.Img className='w-full' variant="top" src={picture_url} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text className='fw-semibold'>{years_of_experience} years of experience</Card.Text>
                    <Card.Text className='fw-semibold'>Total numbers of recipes : {num_of_recipes}</Card.Text>
                    <div className='d-flex justify-content-between align-items-center' >
                        <Card.Text className='fw-semibold'><FaThumbsUp className='text-warning' /> {likes}</Card.Text>
                        <Link to={`/${id}`}><Button variant="warning"> View Recipe <FaArrowRight></FaArrowRight> </Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chefs;