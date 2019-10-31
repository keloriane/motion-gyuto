import React, { useEffect } from "react";
import { TweenMax } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import "./animation.scss";
import mandala from "./../../assets/images/image3.jpg";
import timeline from "./../../assets/images/svg/timeline.svg";
import Header from "./Header/Header";

const Animation = () => {
  console.log("before");
  useEffect(() => {
    console.log("after");
    // TweenMax.staggerFrom(
    //   ".char",
    //   1.3,
    //   {
    //     y: 70,
    //     rotation: 90,
    //     rotationX: -50,
    //     opacity: 0,
    //     transformOrigin: "50% 50%"
    //   },
    //   0.05
    // );

    const galleryContainer = document.getElementsByClassName(
      "gallery-container"
    );
    // const galleryScene = new TimelineMax();

    // galleryScene.from(galleryContainer, 1, { width: 0 });

    function splitWord(word) {
      return [...word]
        .map(letter => `<span class="chars">${letter}</span>`)
        .join("");
    }
    const words = [...document.querySelectorAll(".text-letter")];
    words.map(word => {
      word.innerHTML = splitWord(word.textContent);
      const newLetter = [...word.querySelectorAll(".chars")];
      console.log(newLetter);
      newLetter.map(letter => {
        console.log(letter);
        TweenMax.from(letter, 3, {
          opacity: 0
        });
      });
    });
  });
  return (
    <div id="main" className="monstery">
      <Header />
      <div id="main-gallery">
        <img src={timeline} alt="" />
        <div className="blur-container">
          <div className="gallery-container">
            <div className="title-container ">
              <h4 className="text-letter" id="char-split">
                MANDALA DE TERRE
              </h4>
            </div>
            <div className="content-media">
              <div className="image-container">
                <img src={mandala} alt="" />
              </div>
              <div className="text-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  ducimus minus voluptatum dignissimos harum atque vel
                  consequatur quasi vitae ipsam consequuntur, magnam accusamus
                  iusto possimus, esse ipsa error temporibus necessitatibus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
