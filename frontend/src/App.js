import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Mainrouter from './components/Mainrouter';
import './App.css';
import Userprofile from './components/Userprofile';

function App() {
  return (
    <div>
    <Header />
    <Userprofile/>
    </div>
  );
}

export default App;
