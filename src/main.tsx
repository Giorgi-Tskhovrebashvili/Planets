import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Earth,
  EarthLast,
  EarthMiddle,
  Home,
  Jupiter,
  JupiterLast,
  JupiterMiddle,
  Mars,
  MarsLast,
  MarsMiddle,
  Mercury,
  MercuryLast,
  MercuryMiddle,
  Neptune,
  NeptuneLast,
  NeptuneMiddle,
  Saturn,
  SaturnLast,
  SaturnMiddle,
  Uranus,
  UranusLast,
  UranusMiddle,
  Venus,
  VenusLast,
  VenusMiddle,
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
    path: "/Mercury-structure",
    element: (
      <MainLayout>
        <MercuryMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Mercury-geology",
    element: (
      <MainLayout>
        <MercuryLast />
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
    path: "/Venus-structure",
    element: (
      <MainLayout>
        <VenusMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Venus-geology",
    element: (
      <MainLayout>
        <VenusLast />
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
    path: "/Earth-structure",
    element: (
      <MainLayout>
        <EarthMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Earth-geology",
    element: (
      <MainLayout>
        <EarthLast />
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
    path: "/Mars-structure",
    element: (
      <MainLayout>
        <MarsMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Mars-geology",
    element: (
      <MainLayout>
        <MarsLast />
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
    path: "/Jupiter-structure",
    element: (
      <MainLayout>
        <JupiterMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Jupiter-geology",
    element: (
      <MainLayout>
        <JupiterLast />
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
    path: "/Saturn-structure",
    element: (
      <MainLayout>
        <SaturnMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Saturn-geology",
    element: (
      <MainLayout>
        <SaturnLast />
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
    path: "/Uranus-structure",
    element: (
      <MainLayout>
        <UranusMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Uranus-geology",
    element: (
      <MainLayout>
        <UranusLast />
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
    path: "/Neptune-structure",
    element: (
      <MainLayout>
        <NeptuneMiddle />
      </MainLayout>
    ),
  },
  {
    path: "/Neptune-geology",
    element: (
      <MainLayout>
        <NeptuneLast />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: <h1 style={{ color: "red" }}>Page Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
