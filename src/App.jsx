import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import CoinListPage from './pages/CoinListPage';
import CoinDetailPage from './pages/CoinDetailPage';

const App = () => {
  return (
    <Route>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={CoinListPage} />
        <Route path='/coin/:id' component={CoinDetailPage} />
      </BrowserRouter>
    </Route>
    
  )
}

export default App;