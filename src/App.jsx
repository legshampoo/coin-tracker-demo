import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import CoinListPage from './pages/CoinListPage';
import CoinDetailPage from './pages/CoinDetailPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<CoinListPage />} />
          <Route path='/coin/:id' element={<CoinDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;