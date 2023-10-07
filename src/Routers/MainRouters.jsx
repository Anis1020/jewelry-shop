import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import AllJewelry from "../Pages/AllJewelryPage/AllJewelry";
import MyJewelryPage from "../Pages/MyJewelryPage/MyJewelryPage";
import AddJewelryPage from "../Pages/AddJewelryPage/AddJewelryPage";
import Blogs from "../Pages/BlogsPage/Blogs";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/allJewelry",
        element: <AllJewelry />,
      },
      {
        path: "/myJewelry",
        element: <MyJewelryPage />,
      },
      {
        path: "/addJewelry",
        element: <AddJewelryPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);
