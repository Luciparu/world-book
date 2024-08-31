import React from "react";
import "../Styles/home.css";
import Global from '../img/earth.gif';

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 id="earth">Earth </h1>
        <div className="image"> 
        <h1 className="greet">Welcome to</h1>
          <img src={Global} alt="img"/>
        </div>
        <h1 id="book">Book</h1>
      </div>
    </>
  );
}

export default Home;
