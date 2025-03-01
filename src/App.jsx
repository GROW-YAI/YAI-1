import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import AboutProduct from "./pages/home/sections/AboutProduct";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import Showcase from "./pages/home/sections/Showcase";
import Testimonials from "./pages/home/sections/Testimonials";
import Contact from "./pages/home/sections/Contact";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            { path: "about", element: <AboutProduct /> },
            { path: "innovator", element: <AboutInnovator /> },
            { path: "products", element: <Showcase /> },
            { path: "testimonials", element: <Testimonials /> },
            { path: "contact", element: <Contact /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
