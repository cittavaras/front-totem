import React from "react";
import ReactDOM from "react-dom";
import ReactStars from "react-rating-stars-component";

import "./preguntas.css";

function App() {
  return (
    <div className="App">
     
      <ReactStars
        size={110}
        half={false}
        onChange={newRating => {
          console.log(newRating);
        }}
      />
    </div>
  );
}

export default App;