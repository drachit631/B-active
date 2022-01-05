import React from 'react';
import Header from './components/Header';
import Userprofile from './components/Userprofile';
import './App.css';

function App() {
  return (
    <div className="App" style={{'minHeight':'100vh','height':'100%'}}>
      <Header/>
      <Userprofile/>
    </div>
  );
}

export default App;
