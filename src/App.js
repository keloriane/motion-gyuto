import React from "react";

import "./App.css";
// import Animation from './components/Animation/Animation'
import Cursor from "./components/Cursor/Cursor";
import Slider from "./components/Slider/Slider";
import Home from "./components/Mandala/Home";

function App() {
  return (
    <div className="App" id="App">
      <Cursor />
      {/* <Animation /> */}
      {/* <Home /> */}
      <Slider />
    </div>
  );
}

export default App;
