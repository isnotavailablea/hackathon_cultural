import React, {useContext } from 'react';
import './App.css';
import Home_page from './Home_page';
import Navbar from './Navbar';

import { AllContexts } from './Prime'
import Footer from "./Footer"
import Helpbtn from './Helpbtn';
import Loginpage from './Loginpage';
function App() {
  const obj=useContext(AllContexts);

  return (
    <>
     {!obj.loginpg.show && <Navbar login={false}/>}
     <Helpbtn/>
     {obj.loginpg.show && <Loginpage/>}
      {obj.homepage.show && <Home_page/>}
      {!obj.loginpg.show && <Footer/>}
     </>
  );
}

export default App

