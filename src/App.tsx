import logo from './logo.svg';
import React from 'react';
import './App.css';

import List from './shared/components/List/List';

const App: React.FC = () => {
  return (
    <div className="App">
      <List />
      <div>
        <a href="https://github.com/nerdfiles/toggle-app" 
           target="_blank">repo</a>
      </div>
    </div>
  );
}

export default App;
