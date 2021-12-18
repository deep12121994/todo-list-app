import React from 'react';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import './App.css';


class App extends React.Component {
  render() {
    return (<>
      <header>Warehouse Information</header>
      <div className="app">
        <SearchPage/>
        {/* <DetailsPage/> */}
      </div>
    </>    
    );
  }
  
}

export default App;

