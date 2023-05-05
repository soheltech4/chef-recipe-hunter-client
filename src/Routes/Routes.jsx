import { createBrowserRouter } from "react-router-dom/dist";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Login from "../Login/Login";
import Recipe from "../../src/Recipe/Recipe";
import Contact from "../Contact/Contact";
import Registration from "../Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                    element : <PrivateRoute><Recipe></Recipe></PrivateRoute>,
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