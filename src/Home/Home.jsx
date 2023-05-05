import React, { useEffect, useState } from 'react';
import Chefs from '../Chef/Chefs';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Spinner } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const [chefs, setChef] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://chef-food-hunter-server-sohelranagtc.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                setChef(data.chefs)
                console.log(data.chefs)
                
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [])

    if (loading) {
        return (
            <div className='d-flex justify-content-center mt-5'>
                <Spinner animation="border" variant="warning" />
            </div>
        );
    }

    return (
        <div className='container mx-auto mt-5'>
            <div className='d-flex gap-5 p-4 justify-content-between align-items-center'>
                <div className=''>
                    <h1 className='fw-bold'>Chef <span className='text-warning'>Food</span> Hunter</h1>
                    <p className=''>Welcome to our food website, where you can discover delicious recipes and cooking inspiration from around the world. Our team of experienced chefs and food enthusiasts are passionate about sharing their knowledge and love for food with our readers. From simple weeknight meals to impressive dinner party dishes, we've got you covered with a wide range of recipes to suit every taste and occasion!</p>
                    <button type="button" className="btn btn-warning fw-semibold"><Link to="/" className='text-decoration-none text-black'>Top Recipes <FaArrowRight /></Link></button>
                </div>
                <div>
                        <img src="https://i.ibb.co/71JmxSM/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png" alt="" />
                </div>
            </div>
            <h2 className='text-center mb-4 mt-5 bg-warning rounded'>Our Chef</h2>
            <div className='md:grid row row-cols-3 mx-auto'>
                {
                    chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;
