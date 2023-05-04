import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaStar, FaStarHalf } from 'react-icons/fa';

const ChefRecipe = ({recipes}) => {
    console.log(recipes.recipe_name)
    return (
        <div className=''>
           <div className='container'>
                <Card className='mb-2 border border-2 border-warning' style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title>Recipe Name : {recipes.recipe_name}</Card.Title>
                        <Card.Text> <span className='fw-semibold text-decoration-underline'>Ingredients:</span> <br /> {recipes.ingredients}</Card.Text>
                        <Card.Text> <span className='fw-semibold text-decoration-underline'>Cooking Method:</span> <br /> {recipes.cooking_method}</Card.Text>
                        <div className='d-flex justify-content-between align-middle'>
                            <Card.Text className='fw-semibold'> <span className='text-warning'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></span> {recipes.rating}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ChefRecipe;