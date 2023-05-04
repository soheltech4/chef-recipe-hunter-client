import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Login from "../Login/Login";
import User from "../User/User";
import Recipe from "../Blogs/Recipe/Recipe";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
            {
            path : '/',
            element : <Main></Main>,
            children : [
                {
                    path : '/',
                    element : <Home></Home>
                },
                {
                    path : '/blogs',
                    element : <Blogs></Blogs>
                },
                {
                    path : '/user',
                    element : <User></User>
                },
                {
                    path : '/login',
                    element : <Login></Login>
                },
                {
                    path : ':id',
                    element : <Recipe></Recipe>,
                },
                {
                    path : "/contact",
                    element : <Contact></Contact>
                }
            ]
        }
])

export default router