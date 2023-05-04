import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer container mx-auto p-5 bg-black text-white m-5">
            <div className='gap-5 justify-content-between'>
                <div className="">
                    <h3>Get in Touch</h3>
                    <p>Feel free to contact us with any questions or comments.</p>
                    <p>Email: info@foodwebsite.com</p>
                    <p>Phone: 555-123-4567</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
                <div className="footer-social d-flex gap-5">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ fontSize: '2rem' }} /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ fontSize: '2rem' }} /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ fontSize: '2rem' }} /></a>
                </div>
            </div>
            <div className="text-center">
                <p>&copy; 2023 FoodWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;