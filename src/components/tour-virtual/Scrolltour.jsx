import Edificio from "./img/qr/Edificioqr.png";
import Patio from "./img/qr/Patioqr.png";
import Torre from "./img/qr/Torreqr.png";
import fondoqr from './img/iconos/fondo-qr.png';
import btntp from './img/iconos/btn-top.png';
import "./tourvirtual.css";

const App = ({ Position, setposition }) => {

  



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
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          fontsize: "70",
          position: "absolute"
          
        }}
        className='scroll'
      >
        {Position === 1 && <li className="contenedor-qr">
        <h1 className="VarasA">EDIFICIO VARAS</h1>
          <h1 className="torreA">EDIFICIO TORRE</h1>
          <h1 className="PatioA">PATIO CENTRAL</h1>
          <img className="img-qr" src={Edificio} alt="Edificio" />

        </li>}

        {Position === 2 && <li className="contenedor-qr">
        <h1 className="TorreB">EDIFICIO TORRE </h1>
          <h1 className="VarasB">EDIFICiO VARAS </h1>
          <h1 className="PatioB">PATIO CENTRAL</h1>
          <img className="img-qr" src={Torre} alt="Torre" />

        </li>}
        {Position === 3 && <li className="contenedor-qr">
        <h1 className="PatioC">PATIO CENTRAL </h1>
          <h1 className="EdificioC">EDIFICIO TORRE </h1>
          <h1 className="VarasC">EDIFICIO VARAS</h1>
          <img className="img-qr" src={Patio} alt="Patio" />

        </li>}



      </div>


    </div>
  );
};

export default App;
