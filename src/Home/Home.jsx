import React, { useEffect, useState } from 'react';
import Chefs from '../Chef/Chefs';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [chefs, setChef] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data.chefs))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='container mx-auto justify-content-between mt-5'>
            <div className='d-flex gap-5 '>
                <div>
                    <h1 className='fw-bold'>Chef <span className='text-warning'>Food</span> Hunter</h1>
                    <p className=''>Welcome to our food website, where you can discover delicious recipes and cooking inspiration from around the world. Our team of experienced chefs and food enthusiasts are passionate about sharing their knowledge and love for food with our readers. From simple weeknight meals to impressive dinner party dishes, we've got you covered with a wide range of recipes to suit every taste and occasion!</p>
                    <button type="button" class="btn btn-warning fw-semibold"><Link to="/" className='text-decoration-none text-black'>Top Recipes <FaArrowRight/></Link></button>
                </div>
                <div>
                    <img src="../../public/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png" alt="" />
                </div>
            </div>
            <h2 className='text-center mb-4 mt-5 bg-warning rounded'>Our Chef</h2>
            <div className='md:grid row row-cols-3 mx-auto'>
                {
                    chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
        </div>
    );
};

export default Home;