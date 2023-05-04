import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="border border-2 bg-warning opacity-10 rounded m-5 container mx-auto p-5">
            <h2 className='text-center'>Contact Us</h2>
            <div>
                <Form className="contact-form">
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                    </Form.Group>
                    <button type="button" className="btn mt-3 btn-light">Send Message</button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;