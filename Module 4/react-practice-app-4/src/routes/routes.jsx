import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/products',
            element: <Products/>
        },
        {
            path: '/products/:id',
            element: <ProtectedRoutes><ProductsDetails/></ProtectedRoutes>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
  },
]);