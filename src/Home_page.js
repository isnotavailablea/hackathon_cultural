import React from "react";
import "./Home_page.css";
function Home_page() {
  const arr = [
    "Assam",
    "arunachalpradesh",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujrat",
    "Haryana",
    "Jharkhand",
    "Kashmir",
    "kerala",
    "Ladakh",
    "madhyapradesh",
    "maharashtra",
    "Manipur",
    "Meghalaya",
    "Nagaland",
    "Odisha",
    "Punjab",
    "rajasthan",
    "TamilNadu",
    "Telangana",
    "UttarPradesh","Karnataka"
  ];
  return (
    <>
      <div className="entryPic">
        <img src={require("./entrypic.jpg")} alt="" />
      </div>
      <div className="allstates">
        {arr.map(function (name, index) {
          return (
            <div key={index}>
              <img src={require(`./States/${name}.jpg`)} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home_page;
