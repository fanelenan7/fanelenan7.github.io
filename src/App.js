import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from './Pages';
import Footer from './Footer';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Pages />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
