import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ChefRecipe from '../../ChefRecipe/ChefRecipe';
import { FaHeart, FaRegThumbsUp, FaThumbsUp, FaThumbtack } from 'react-icons/fa';

const Recipe = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [recipe, setRecipe] = useState([])
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
                    <Card.Img className='w-full ' variant="top" src={picture_url} />
                    <Card.Body>
                        <Card.Title>{chef_name}</Card.Title>
                        <Card.Text>{bio}</Card.Text>
                        <Card.Text className='fw-semibold'>{years_of_experience} years of experience</Card.Text>
                        <Card.Text className='fw-semibold'>Total numbers of recipes : {num_of_recipes}</Card.Text>
                        <div className='d-flex justify-content-between align-items-center' >
                            <Card.Text><FaThumbsUp className='text-warning'/> <span className='tex-warning fw-semibold'>{likes}</span></Card.Text>
                            <FaHeart className='text-danger text-center'/>

                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='mb-5'>
                {
                    recipes?.map(r => <ChefRecipe recipes={r}></ChefRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipe;