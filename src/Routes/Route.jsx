// router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import Course from "../Components/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Navbar va Layout bu yerda
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home", 
        element: <Home />,
      },
      {
        path: "/contact", 
        element: <Contact />,
      },
      {
        path: "/profile", 
        element: <Profile />,
      },
      {
        path: "/course", 
        element: <Course />,
      },
    ],
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/register", 
    element: <Register />,
  }
]);
