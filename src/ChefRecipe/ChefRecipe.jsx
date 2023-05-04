import React, { useState } from 'react';
import { Card, ToastHeader } from 'react-bootstrap';
import { FaArrowRight, FaHeart, FaStar, FaStarHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipe = ({ recipes }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setIsLiked(true);
             toast.success('Your Favorite Recipe!');
        }
    };

    return (
        <div className=''>
            <div className='container'>
                <Card className='mb-2 border border-2 border-warning' style={{ width: '50rem' }}>
                    <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <img className='bg-warning p-2 rounded me-3' style={{ width: '10rem', height: '10rem' }} src={recipes.recipe_url} alt="" />
                            <div>
                                <Card.Title>{recipes.recipe_name}</Card.Title>
                                <Card.Text> <span className='fw-semibold text-decoration-underline'>Ingredients:</span> <br /> {recipes.ingredients}</Card.Text>
                                <Card.Text> <span className='fw-semibold text-decoration-underline'>Cooking Method:</span> <br /> {recipes.cooking_method}</Card.Text>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-middle'>
                            <Card.Text className='fw-semibold'> <span className='text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span> {recipes.rating}</Card.Text>
                            <button className='rounded' onClick={handleLike} disabled={isLiked}><FaHeart className='text-danger text-center' /></button>
                        </div>
                    </Card.Body>
                    <ToastContainer
                        position="top-right"
                        reverseOrder={false}
                    />
                </Card>
            </div>
        </div>
    );
};

export default ChefRecipe;
