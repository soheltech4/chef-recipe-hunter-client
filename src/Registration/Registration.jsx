import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value
        console.log(email, password, name, photo)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user 
            console.log(createdUser)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    return (
        <div className="container mx-auto border border-2 border-warning rounded bg-blue m-5" style={{ width: '30rem' }}>
            <h3 className="text-center mt-3">Registration Here</h3>
            <Form className="m-5" onSubmit={handleRegister}>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control className="mb-2" type="name" name="name"  placeholder="Enter Name" required />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                    <Form.Label className="mt-2">Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo URL" name="photo" required />
                </Form.Group>
                <Button className="mt-2" variant="primary" type="submit">Registration</Button>
                <p className="mt-3 text-center">If you have an Account Please<span> <Link to="/login"> Login </Link> </span></p>
            </Form>
        </div>
    );
}

export default Registration;
