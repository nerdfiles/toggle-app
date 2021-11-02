import React from 'react';
import './App.css';

import List from './shared/components/List/List';
import Sidebar from './shared/components/Sidebar/Sidebar';
import Navigation from './shared/components/Navigation/Navigation';
import Footer from './shared/components/Footer/Footer';
import Header from './shared/components/Header/Header';

// import ModularHomePageIndex from './modules/home/pages/Index'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Sidebar />
      <List />
      <Footer />
    </div>
  );
}

export default App;
