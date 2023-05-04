import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Login from "../Login/Login";
import User from "../User/User";
import Recipe from "../Blogs/Recipe/Recipe";
import Contact from "../Contact/Contact";
import Registration from "../Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
            {
            path : '/',
            element : <Main></Main>,
            errorElement : <ErrorPage></ErrorPage>,
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
                    path : '/login',
                    element : <Login></Login>
                },
                {
                    path : ':id',
                    element : <Recipe></Recipe>,
                },
                {
                    path : '/contact',
                    element : <Contact></Contact>
                },
                {
                    path : '/registration',
                    element : <Registration></Registration>
                }
            ]
        }
])

export default router