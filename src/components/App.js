// React
import React  from 'react';
//Components
import Header from './header/Header';
import AppRoutes from '../routes';

const App = () => {
    return (
      <div className="App">
        <Header/>
        <AppRoutes/>
      </div>
    );
};

export default App;
