import React from 'react';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import './App.css';


class App extends React.Component {
  render() {
    return (<>
      <div className="header-container">
        <header>Warehouse Information</header>
      </div>
      <div className="app">
        <SearchPage/>
        {/* <DetailsPage/> */}
      </div>
    </>    
    );
  }
  
}

export default App;

