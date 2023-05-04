import React, { useEffect, useState } from 'react';
import Chefs from '../Chef/Chefs';

const Home = () => {
    const [chefs, setChef] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChef(data.chefs))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='md:grid row row-cols-3 mt-5 container mx-auto'>
            {               
                chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
            }
        </div>
    );
};

export default Home;