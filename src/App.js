import React from "react";

import "./App.css";
// import Animation from './components/Animation/Animation'
import Cursor from "./components/Cursor/Cursor";
import Slider from "./components/Slider/Slider";
import Home from "./components/Mandala/Home";

import Mandala from './components/Mandala/Mandala'


function App() {
  return (
    <div className="App" id="App">
      <Cursor />
      {/* <Mandala /> */}
      {/* <Animation /> */}
      {/* <Home />  */}
      <Slider />
    </div>
  );
}

export default App;
