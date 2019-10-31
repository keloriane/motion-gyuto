import React, { useEffect } from "react";
import "./Mountain.scss";
import ScrollMagic from "scrollmagic";
import { TweenLax, TimelineMax, TweenMax } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import Himalaya from "./../../assets/images/image79.png";

const Mountain = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const parralaxImg = new TimelineMax();
    parralaxImg
      .from(".brush", 1, { x: 900 }, "-=4")
      .to(".c-frame", 4, { y: "-50px", delay: 1 }, "-=4")
      .to(".w-image", 4, { y: "50px" }, "-=4");

    const mountainScene = new ScrollMagic.Scene({
      triggerElement: ".c-mountain",
      reverse: true
    })
      .setTween(parralaxImg)
      .addTo(controller);
  });
  return (
    <div className="c-mountain">
      <div className="c-frame">
        <div className="wrapper-text">
          <p className="mountain-text">
            Haut perché dans l’Himalaya indien, le monastère tibétain de Gyütö
            est une université reconnue du bouddhisme tantrique et abrite 400
            moines. Les monastères bouddhistes tibétains ont été interdits en
            Chine ; certains d’entre eux ont pu se refonder ailleurs comme Gyütö
            en Inde. Le monastère est tout proche de Dharamsala, centre
            névralgique du gouvernement du Tibet en exil et du monastère du
            Dalaï-Lama. Gyütö vit au rythme du calendrier tibétain et de ses
            rites riches d’une histoire de 500 ans.
          </p>
          <p className="mountain-text">
            A Gyütö, les chants profonds des rituels se prolongent tard dans la
            nuit et résonnent dans les couloirs des bâtiments attenant au grand
            temple, berçant le sommeil des moines. Avant le lever du jour, les
            sutras (enseignements de Bouddha) résonnent déjà dans ces mêmes
            couloirs accueillant les âmes revenues du pays des rêves. Nous
            sommes immergés dans la réalité sonore du monastère, qui traverse
            tous les films.
          </p>
        </div>
      </div>
      <div className="w-image">
        <img src={Himalaya} alt="" className="brush" />
      </div>
    </div>
  );
};

export default Mountain;
