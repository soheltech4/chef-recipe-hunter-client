import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaFacebookSquare, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.target
        // const email = form.value.email
        // console.log(email)
    };

    return (
        <div className="container mx-auto border border-2 border-warning rounded bg-blue m-5" style={{ width: '30rem' }}>
            <h3 className="text-center mt-3">Login Here</h3>
            <Form className="m-5" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    />
                </Form.Group>

                
                <Button className="mt-2 mb-2" variant="primary" type="submit">Login</Button>
                <div className="border border-2 border-warning rounded p-2">
                    <p className="text-center fw-semibold">Login with</p>
                    <div className="d-flex text-center justify-content-between">
                        <button type="button" className="btn btn-outline-warning"><FaGoogle /> Google</button>
                        <button type="button" className="btn btn-outline-primary"> <FaFacebookSquare /> Facebook</button>
                        <button type="button" className="btn btn-outline-secondary"> <FaGithub /> Github</button>
                    </div>
                </div>
                <p className="mt-3 text-center">If you have no Account Please<span> <Link to="/registration"> Registration </Link> </span></p>
            </Form>
        </div>
    );
}

export default LoginForm;
