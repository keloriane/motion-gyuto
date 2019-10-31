import React from "react";
import Mandala from "./assets/images/mandala.svg";

const Home = () => {
  return (
    <div id="background">
      <div id="container">
        <img src={Mandala} alt="" />
      </div>
    </div>
  );
};

export default Home;
