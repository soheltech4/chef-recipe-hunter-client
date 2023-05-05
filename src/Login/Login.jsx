import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaFacebookSquare, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import app from "../Firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
function LoginForm() {
    const [error, setError] = useState()
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        setError("")
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedGoogleUser = result.user
            console.log(loggedGoogleUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedGithubUser = result.user
            console.log(loggedGithubUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <div className="container mx-auto border border-2 border-warning rounded bg-blue m-5" style={{ width: '30rem' }}>
            <h3 className="text-center mt-3">Login Here</h3>
            <Form className="m-5" onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
                    />
                </Form.Group>
                <Button className="mt-2 mb-2" variant="primary" type="submit">Login</Button>
                <div>
                    <div className="border border-2 border-warning rounded p-2">
                        <p className="text-center fw-semibold">Login with</p>
                        <div className="d-flex text-center justify-content-between">
                            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline-warning"><FaGoogle /> Google</button>
                            <button type="button" className="btn btn-outline-primary"> <FaFacebookSquare /> Facebook</button>
                            <button onClick={handleGithubSignIn} type="button" className="btn btn-outline-secondary"> <FaGithub /> Github</button>
                        </div>
                    </div>
                    <p className="mt-3 text-center">If you have no Account Please<span> <Link to="/registration"> Registration </Link> </span></p>
                </div>
                <div className="container text-center text-danger fw-semibold"><p>{error}</p></div>
            </Form>
        </div>
    );
}

export default LoginForm;
