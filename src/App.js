import React from 'react';
import './App.css';
import Home_page from './Home_page';
import Navbar from './Navbar';

function App() {
  return (
    <>
     <Navbar login={false}/>
     <Home_page/>
     </>
  );
}

export default App;
