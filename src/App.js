import React from "react";

import "./App.css";
// import Animation from './components/Animation/Animation'
import Cursor from "./components/Cursor/Cursor";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Mandala/Home";

import Mandala from "./components/Mandala/Mandala";

function App() {
  return (
    <div className="App" id="App">
      <Cursor />
      {/* <Mandala /> */}
      {/* <Animation /> */}
      {/* <Home />  */}
      <Gallery />
    </div>
  );
}

export default App;
