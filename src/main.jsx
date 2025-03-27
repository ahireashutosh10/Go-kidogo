import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './component/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import City from './pages/City.jsx';
import Partner from './pages/Partner.jsx';
import GokidoTool from './pages/GokidoTool.jsx';
import Login from './pages/Login.jsx';



// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route index element={<Home />} />
    <Route path="City" element={<City />} />
      <Route path="Partner" element={<Partner />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="GokidoTool" element={<GokidoTool />} />
      <Route path="Login" element={<Login />} />
    </Route>
  )
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

