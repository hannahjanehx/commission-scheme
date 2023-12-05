import React from 'react';
import './App.css';
import Widget from './components/widget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to your Dashboard
        </p>
      </header>
      <Widget title='Commissions Breakdown' />
    </div>
  );
}

export default App;
