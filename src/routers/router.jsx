import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Cart from "../components/Cart";
import Product from "../dashboard/Product";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/payment",
        element: <Payment />
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
          {
            path:"/admin/dashboard",
            element: <PrivateRoute><Dashboard/></PrivateRoute>
          },
          {
            path:"/admin/dashboard/upload",
            element: <UploadBook/>
          },
          {
            path:"/admin/dashboard/manage",
            element: <ManageBooks/>
          },
          {
            path:"/admin/dashboard/product",
            element: <Product />
          },
          {
            path:"/admin/dashboard/edit-books/:id",
            element: <EditBooks/>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
          }
        ]
      }
    ]
  },
  {
    path:"signup",
    element: <Signup/>
  },
  {
    path:"login",
    element: <Login/>
  },
  {
    path:"logout",
    element: <Logout/>
  }
]);

export default router;