import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/sharedPages/Login/Login";
import Register from "../pages/sharedPages/Register/Register";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import NotFound from "../pages/sharedPages/NotFound/NotFound";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: "/mytoys",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/alltoys",
        element:<AllToys></AllToys>
      },
      {
        path: '/addtoy', 
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>, 
        // loader: ({params}) => fetch(`https://localhost:5000/addatoy/${params.id}`)
      },
      {
        path: "/toy/:id",
        element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://assignment-11-server-alpha-five.vercel.app/${params.id}`),
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
