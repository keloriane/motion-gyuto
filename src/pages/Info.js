import React, { useEffect } from "react";
import { TweenMax, Power4 } from "gsap";
import ScrollMagic from "scrollmagic";
import Header from "./../components/Header/Header";
import Wave from "./../components/Wave/Waves";
import Quotation from "./../components/Quotation/Quotation";
import Animation from "./../components/Animation/Animation";
import Mountain from "./../components/Mountain/Mountain";
import "./info.scss";
const Info = () => {
  useEffect(() => {
    function splitWord(word) {
      return [...word]
        .map(letter => `<span class="char">${letter}</span>`)
        .join("");
    }
    const words = [...document.querySelectorAll(".cover-date")];
    words.map(word => {
      word.innerHTML = splitWord(word.textContent);
      const newLetter = [...word.querySelectorAll(".char")];
      console.log(newLetter);
      newLetter.map(letter => {
        console.log(letter);
        TweenMax.staggerFrom(letter, 3, {
          x: -400,
          opacity: 0,
          yoyo: true
        });
      });
    });
    const innerTitle = document.getElementsByTagName("h3");
    const flag = document.getElementsByClassName("image-flag");
    const brush = document.getElementsByClassName("image-brush");
    const titleAnime = TweenMax.from(innerTitle, 2, {
      x: "-100%",
      ease: Power4.easeInOut
    });
    TweenMax.from(flag, 2, { height: 0, ease: Power4.easeInOut });
    const brushAnim = TweenMax.from(brush, 2, {
      width: 0,
      ease: Power4.easeInOut
    });
    //Ink transition
    const inkTriggers = [...document.querySelectorAll(".js-ink-trigger")];
    const controller = new ScrollMagic.Controller();
    inkTriggers.map(ink => {
      const sceneInk = new ScrollMagic.Scene({
        triggerElement: ink,
        triggerHook: "onEnter"
      })
        .setClassToggle(ink, "is-active")
        .reverse(false)
        .addTo(controller)
        .setTween(titleAnime);
    });
    const brushScene = new ScrollMagic.Scene({
      triggerElement: ".image-brush",
      triggerHook: "onEnter"
    })
      .addTo(controller)
      .setTween(brushAnim);
    const letters = [...document.querySelectorAll(".letter")];
    const titleLogo = document.getElementsByClassName("Gyuto-logo");
    console.log(letters);
    TweenMax.from(titleLogo, 6, { y: 200, ease: Power4.easeOut });
    TweenMax.staggerFrom(
      letters,
      2,
      { y: 200, ease: Power4.easeOut, yoyo: true },
      0.1
    );
  });
  return (
    <div>
      <Header />
      <Wave />
      <nav>
        <img src="" alt="" className="icon-gyuto" />
      </nav>
      <div className="image-brush">
        <img
          src="https://accm.ie/wp-content/themes/accm/img/img-brush-01.png"
          alt=""
        />
      </div>
      <Animation />
      <Quotation />
      <Mountain />
      <div className="c-exposure">
        <div className="w-text--quotation">
          <p>
            En partageant notre état d’extrême conscience avec un public non
            averti des pratiques tantriques, nous exorcisons les forces
            négatives en présence, et le simple fait d’être en interaction avec
            nous génère un effet bienfaisant’. Tashi
          </p>
        </div>
        <div className="exposure--image"></div>
      </div>
      <div className="exposure--description">
        <div className="w-text--exposure">
          <p>
            Ce projet commence en 2012, quand mon compagnon, fasciné par le
            chant rituel de ces moines, leur propose une collaboration avec son
            groupe de jazz contemporain Octurn. Durant la rencontre, les moines
            proposent de construire un mandala. Ils ont apporté dans leurs
            valises le sable et les pigments nécessaires, mais il leur manque
            des compas, des règles et des équerres pour en tracer les contours.
            Gaia, Nemo et Yuna partagent ainsi leurs ustensiles scolaires avec
            eux et suivent de près la construction du mandala... 5 jours au
            cours desquels des liens presque familiaux se tissent. A la fin de
            chaque jour, elles leur font visiter la ville et s’amusent de les
            voir s’extasier devant des grosses voitures et se prendre en photo
            devant les bâtiments les plus improbables. Un groupe de touristes
            chinois leur demandent de poser ensemble avec les moines… comme une
            photo de famille où ils deviennent un instant leurs grands frères.
            Ce sont des moments légers, mais je sais que derrière l’apparente
            bonhomie des moines se cache une profondeur spirituelle
            vertigineuse. Pendant que je filme un concert, je me retrouve sur la
            scène derrière les 6 moines chanteurs pour un plan de dos face
            public. Je suis très proche d’eux, et d’un coup je suis transportée
            par la puissance vibratoire de leur chant, à tel point que je dois
            m’arrêter de filmer tant l’émotion est intense. Le temps se suspend
            pendant quelques minutes, quelque chose de très profond se passe en
            moi… A la fin du concert, j’explique à l’un des moines ce que j’ai
            ressenti. Il sourit et me répond : ‘En partageant notre état
            d’extrême conscience avec un public non averti des pratiques
            tantriques, nous exorcisons les forces négatives en présence, et le
            simple fait d’être en interaction avec nous génère un effet
            bienfaisant’. Ce projet est né d’un élan irrépressible
            d’expérimenter cette intensité vibratoire à la source, de comprendre
            la place qu’elle occupe dans le quotidien des moines, d’aller
            approfondir ce qui me touche dans la philosophie bouddhiste et de
            m’immerger complètement dans l’expérience que je rencontre.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Info;
