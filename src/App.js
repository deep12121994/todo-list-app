import React from 'react';
import {BrowserRouter as Router , useRoutes} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import './App.css';

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <SearchPage /> },
    { path: "/details", element: <DetailsPage /> },
  ]);
  return routes;
};

class App extends React.Component {

  render() {
    return (<>
      <div className="header-container">
        <header>Warehouse Information</header>
      </div>
      <div className="app">      
        <Router >    
          <AppRoute/>
        </Router>
      </div>
    </>    
    );
  }
  
}

export default App;

