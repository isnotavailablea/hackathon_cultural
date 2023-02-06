import React, { useContext } from 'react';
import './Navbar.css';
import { AllContexts } from './Prime';
function Navbar(props) {
    const obj=useContext(AllContexts);
  return (
    <>
        <div className="nav-container">
            <div className="tools">
                <button onClick={obj.useloginpg}>Login</button>
            </div>
            <div className="logo">
                <img src={require("./haritage.png")} alt="logo not found" />
            </div>
            <div className="search">
                <input type="text" />
                <button>search</button>
            </div>
        </div>
    </>
  )
}

export default Navbar