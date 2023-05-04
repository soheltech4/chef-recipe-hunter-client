import React from 'react';
import { Card } from 'react-bootstrap';

const ChefRecipe = ({recipes}) => {
    console.log(recipes.recipe_name)
    return (
        <div>
           <div className='container'>
                <Card className='mb-2 border border-2 border-primary' style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title>Recipe Name : {recipes.recipe_name}</Card.Title>
                        <Card.Text> <span className='fw-semibold text-decoration-underline'>Ingredients:</span> <br /> {recipes.ingredients}</Card.Text>
                        <Card.Text> <span className='fw-semibold text-decoration-underline'>Cooking Method:</span> <br /> {recipes.cooking_method}</Card.Text>
                        <Card.Text>Rating: {recipes.rating}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ChefRecipe;