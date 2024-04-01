import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Earth,
  Home,
  Jupiter,
  Mars,
  Mercury,
  MercuryMiddle,
  Neptune,
  Saturn,
  Uranus,
  Venus,
} from "./pages/index.ts";
import { MainLayout } from "./components/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/Mercury",
    element: (
      <MainLayout>
        <Mercury />
      </MainLayout>
    ),
  },
  {
    path: "/Mercury/:MercuryMiddle",
    element: (
      <MainLayout>
        <MercuryMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Venus",
    element: (
      <MainLayout>
        <Venus />
      </MainLayout>
    ),
  },
  {
    path: "/Earth",
    element: (
      <MainLayout>
        <Earth />
      </MainLayout>
    ),
  },
  {
    path: "/Mars",
    element: (
      <MainLayout>
        <Mars />
      </MainLayout>
    ),
  },
  {
    path: "/Jupiter",
    element: (
      <MainLayout>
        <Jupiter />
      </MainLayout>
    ),
  },
  {
    path: "/Saturn",
    element: (
      <MainLayout>
        <Saturn />
      </MainLayout>
    ),
  },
  {
    path: "/Uranus",
    element: (
      <MainLayout>
        <Uranus />
      </MainLayout>
    ),
  },
  {
    path: "/Neptune",
    element: (
      <MainLayout>
        <Neptune />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <h1 style={{color: 'red'}}>Page Not Found</h1>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
