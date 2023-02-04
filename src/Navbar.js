import React, { useState } from 'react';
import './Navbar.css';
function Navbar(props) {

  return (
    <>
        <div className="container">
            <div className="tools">
                <button>Login</button>
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