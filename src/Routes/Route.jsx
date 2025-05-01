// router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Navbar va Layout bu yerda
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home", 
        element: <Home />,
      },
    ],
  },
]);
