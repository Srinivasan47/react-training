import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import Post from './Page/Post/Post';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import MainLayout from './Page/Layout/MainLayout';
import AuthLayout from './Page/Layout/AuthLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route index element={<App />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<AuthLayout />} >
          <Route path="/post/:postId" element={<Post />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route
          path="/dashboard"
         >
          <Route path='profile' element={<h1>Profile</h1>} />
          <Route path='settings' element={<h1>Settings</h1>} />
         </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
