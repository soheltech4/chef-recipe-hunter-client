import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import { FaArrowRight, FaHeart, FaRegThumbsUp, FaThumbsUp, FaThumbtack } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const Recipe = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const { chef_name, bio, years_of_experience, num_of_recipes, recipes, picture_url, likes } = item
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => { { data.chefs.find(i => { if (i.id == id) setItem(i) }) } })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='d-flex container gap-5 mt-5 ps-4'>
            <div>
                <Card className='border border-2 border-warning' style={{ width: '25rem' }}>
                    <LazyLoad threshold={0.95}>
                        <Card.Img className='w-full ' variant="top" src={picture_url} />
                    </LazyLoad>
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <Card.Text>{bio}</Card.Text>
                        <Card.Text className='fw-semibold'>{years_of_experience} years of experience</Card.Text>
                        <Card.Text className='fw-semibold'>Total numbers of recipes : {num_of_recipes}</Card.Text>
                        <div className='d-flex justify-content-between align-items-center' >
                            <Card.Text><FaThumbsUp className='text-warning' /> <span className='tex-warning fw-semibold'>{likes}</span></Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='mb-5'>
                {
                    recipes?.map(r => <ChefRecipe recipes={r}></ChefRecipe>)
                }
                <button className='' type="button" class="btn btn-warning fw-semibold"><Link to="/" className='text-decoration-none text-black'>Go to Home <FaArrowRight /></Link></button>
            </div>
        </div>
    );
};

export default Recipe;