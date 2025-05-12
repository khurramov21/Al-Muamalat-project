// router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
