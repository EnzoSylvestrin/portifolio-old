import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/home/Home';
import Header from './Components/header/Header';
import About from './Components/about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
  </React.StrictMode>
);
