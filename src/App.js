import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import './App.css';


class App extends React.Component {
  render() {
    return (<>
      <div className="header-container">
        <header>Warehouse Information</header>
        <button id="btn-item">Item</button>
      </div>
      <div className="app">      
        <BrowserRouter>
          <Routes>
          <Route path="/" component={SearchPage}/>
          <Route path="/details" component={DetailsPage}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>    
    );
  }
  
}

export default App;

