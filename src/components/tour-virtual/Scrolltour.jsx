import Edificio from "./img/qr/Edificioqr.png";
import Patio from "./img/qr/Patioqr.png";
import Torre from "./img/qr/Torreqr.png";
import EdificioB from "./img/Fondos/EdificioB.png";
import PatioB from "./img/Fondos/PatioB.png";
import TorreB from "./img/Fondos/TorreB.png";
import React, { useState } from "react";
import { useEffect } from "react";
import "./tourvirtual.css";
const App = () => {
  const [Position, setposition] = useState(0);

  const handleScroll = (Event) => {
    console.log('scrolltop:', Event.currentTarget.scrollTop);
    setposition(Event.currentTarget.scrollTop);
  };
  return (
      <div style={{ display: "flex", gap: "9rem", marginTop: "45rem", marginLeft: "15rem", position: "absolute", }}>
      <div
        onScroll={handleScroll}
        style={{
          border: "black",
          width: "300px",
          height: "100px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          fontsize: "70",
        }}
      >
        <p>EDIFICIO VARAS</p>
        <p>TORRE</p> 
        <p>PATIO</p>
      </div>
     
      <div>
        {Position <= 99 &&  <div>  <img src={Edificio}alt="Edificio"/> </div> } 
        
        {Position >= 100 && Position <=211 &&  <div> <img src={Torre}alt="Torre"/></div> } 

        {Position === 212 && <div> <img src={Patio}alt="Patio"/></div>}  

      </div>
    </div>
  );
};

export default App;
