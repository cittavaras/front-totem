import Edificio from "./img/qr/Edificioqr.png";
import Patio from "./img/qr/Patioqr.png";
import Torre from "./img/qr/Torreqr.png";
import EdificioB from "./img/Fondos/EdificioB.png";
import PatioB from "./img/Fondos/PatioB.png";
import TorreB from "./img/Fondos/TorreB.png";
import fondoqr from './img/iconos/fondo-qr.png';
import btntp from './img/iconos/btn-top.png';
import React, { useState } from "react";
import { useEffect } from "react";
import "./tourvirtual.css";

const App = ({ }) => {

  const [Position, setposition] = useState(1);



  const handleScroll = (Event) => {
    console.log('scrolltop:', Event.currentTarget.scrollTop);
    setposition(Event.currentTarget.scrollTop);
  };

  return (
    <div style={{ display: "flex", gap: "9rem", marginTop: "45rem", marginLeft: "15rem", position: "absolute", alignItems: "center", top: "70px" }}>
      <img className='fondo-qr' src={fondoqr} />
      
      <img className='img-btn btn-b' onClick={() => {
        if (Position === 1) {
          return;
        } setposition(Position - 1);
        console.log(Position);
      }} 
      src={btntp} />
      <img className='img-btn btn-a'
        onClick={() => {
          if (Position === 3) {
            return;
          } setposition(Position + 1);
          console.log(Position);

        }}
        src={btntp} />
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
          position: "absolute"
        }}
        className='scroll'
      >

        <p>EDIFICIO VARAS</p>
        <p>TORRE</p>
        <p>PATIO</p>

      </div>

      <div className='img-qr'>
        {Position === 1 && <div>  <img src={Edificio} alt="Edificio" /> </div>}

        {Position === 2 && <div> <img src={Torre} alt="Torre" /></div>}

        {Position === 3 && <div> <img src={Patio} alt="Patio" /></div>}

      </div>
    </div>
  );
};

export default App;
