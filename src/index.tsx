import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './page/home';
import Header from './components/header';
import AboutPage from './page/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
  </BrowserRouter>
);