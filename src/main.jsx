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
    <Route path="city" element={<City />} />
      <Route path="our-partners" element={<Partner />} />
      <Route path="about-us" element={<About />} />
      <Route path="become-a-partner" element={<Contact />} />
      <Route path="our-solution" element={<GokidoTool />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

