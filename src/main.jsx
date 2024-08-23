import React from 'react'


import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


import GalleryPage from './assets/pages/gallery';
import BookNow from './assets/pages/book-now';
import AboutPage from './assets/pages/about';

import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
    </Router>
  </React.StrictMode>

);
