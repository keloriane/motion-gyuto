import React, { useEffect } from "react";
import Sky from "./../assets/parallax/sky.png";
import Ground from "./../assets/parallax/ground.png";
import Mountain from "./../assets/parallax/mountain.png";
import GroundMontain from "./../assets/parallax/ground-mountain.png";
import "./header.scss";
import ScrollMagic from "scrollmagic";
import TimelineMax from "gsap";

const Header = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoader", () => {
      let controller = new ScrollMagic.Controller();
      let headerTl = new TimelineMax();
      headerTl.to("#ground", 6, { y: -500 });
      let scene = new ScrollMagic.Scene({
        triggerElement: "header",
        duration: "200%",
        triggerHook: 0
      })
        .setTween(headerTl)
        .setPin("header")
        .addTo(controller);
    });
  });
  return (
    <header>
      <div className="header-hero">
        <div className="images-layers">
          <div className="image-wrapper">
            <img src={Sky} alt="" id="sky" />
          </div>
          <div className="image-wrapper">
            <img src={Mountain} alt="" id="mountain" />
          </div>
          <div className="image-wrapper">
            <img src={GroundMontain} alt="" id="ground-mountain" />
          </div>
          <div className="image-wrapper" id="ground">
            <img src={Ground} alt="" />
          </div>
        </div>
        <div className="blur"></div>
      </div>
    </header>
  );
};

export default Header;
