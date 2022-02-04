import React from 'react';
import Header from './components/Header';
import './App.css';
import Mainrouter from './components/Mainrouter';

function App() {
  return (
    <div className="App" style={{'minHeight':'100vh','height':'100%'}}>
      <Header/>
      <Mainrouter/>
    </div>
  );
}

export default App;
