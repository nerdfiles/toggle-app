import React from 'react';
import './App.css';

import List from './shared/components/List/List';
import Header from './shared/components/Header/Header'
import Footer from './shared/components/Footer/Footer'
import Sidebar from './shared/components/Sidebar/Sidebar'

// import ModularHomePageIndex from './modules/home/pages/Index'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <List />
      <div>
        <a href="https://github.com/nerdfiles/toggle-app" 
           target="_blank">repo</a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
