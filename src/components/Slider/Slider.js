import React, { useState, useRef, useEffect } from "react";
import Header from "./../Animation/Header/Header";
import "./../Animation/animation.scss";
import { TimelineMax, TweenMax, Power4 } from "gsap";
import leftArrow from "./../../assets/images/svg/leftArrow.svg";
import rightArrow from "./../../assets/images/svg/rightArrow.svg";
import mandala from "./../../assets/images/image3.jpg";
import timeline from "./../../assets/images/svg/timeline.svg";

const Slider = () => {
  const sliderContent = [
    {
      id: 1,
      theme: "/MONASTERY",
      title: "GYUTO MONASTERY",
      image: [
        `${require("./../../assets/images/image32.jpg")}`,
        `${require("./../../assets/images/image2.jpg")}`,
        `${require("./../../assets/images/image30.jpg")}`,
        `${require("./../../assets/images/image29.jpg")}`,
        `${require("./../../assets/images/image22.jpg")}`,
        `${require("./../../assets/images/image27.jpg")}`
      ],
      alt: "Gyuto monastery image",
      quote: "lorem ipsum ",
      bgImage: `${require("./../../assets/images/image42.jpg")}`
    },
    {
      id: 2,
      theme: "/MANDALA",
      title: "/MANDALA DE TERRE",
      image: `${require("./../../assets/images/image32.jpg")}`,
      quote: "lorem ipsum "
    },
    {
      id: 3,
      theme: "/SCHOOL",
      title: "/GYUTO SCHOOL",
      image: `${require("./../../assets/images/image32.jpg")}`,
      quote: "lorem ipsum "
    }
  ];

  let imageList = useRef(null);
  let textElement = useRef(null);
  let titleList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    console.log(imageList.children);
    console.log(titleList);

    // Split each word from a tag
    let titleArray = [];
    const chars = document.querySelectorAll(".chars");
    let letterTitle = [];
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
        titleArray.push(letter);
        console.log(titleArray);
      });

      TweenMax.to(".chars", 1, { y: "100%" });
      const enterSlider = new TimelineMax();
      enterSlider
        .from(".information--navigation", 0.6, { opacity: 0, x: "-100%" })
        .from([".logo-icon", ".head-title-slider"], 0.5, {
          opacity: 0,
          x: "-100%",
          delay: -0.6
        })
        .from(".gallery-container", 1.1, {
          x: "-100%",
          opacity: 0,
          delay: -1
        })
        .from(imageList.children, 0.7, {
          x: "-100%",
          ease: Power4.easeOut
        })
        .from(".gallery-text", 1, { opacity: 0, delay: -0.8 })
        .from(".text-letter", 1, { opacity: 0, delay: -0.9 })
        .to("#main-img", 50, {
          x: -25,
          y: 75,
          rotationZ: 0.01,
          scale: 1.3,
          delay: -1
        });
    }); // .from(titleList, 1, { y: "-100%", delay: -2 });

    const slideLeft = () => {};
    const slideRight = () => {};
    const scale = () => {};
    const titleTransistion = () => {};
  }, []);
  return (
    <div id="gallery">
      <div id="main-img"></div>
      <div id="main" className="monstery">
        <Header title={sliderContent[0].theme} id={sliderContent[0].id} />
        <div id="main-gallery">
          <img src={timeline} alt="" />
          <div className="blur-container">
            <div className="gallery-container">
              <div className="title-container ">
                <h4
                  className="text-letter"
                  id="char-split"
                  ref={el => (titleList = el)}
                >
                  {sliderContent[0].title}
                </h4>
              </div>
              <div className="content-media">
                <span>
                  <img src={leftArrow} alt="" />
                </span>
                <div className="image-container">
                  <ul ref={el => (imageList = el)}>
                    <li>
                      <img src={sliderContent[0].image[0]} alt="" />
                    </li>
                    <li>
                      <img src={sliderContent[1].image[1]} alt="" />
                    </li>
                    <li>
                      <img src={sliderContent[0].image[2]} alt="" />
                    </li>
                    <li>
                      <img src={sliderContent[0].image[3]} alt="" />
                    </li>
                  </ul>
                </div>
                <span>
                  <img src={rightArrow} alt="" />
                </span>
                <div className="text-container gallery-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ducimus minus voluptatum dignissimos harum atque vel
                    consequatur quasi vitae ipsam consequuntur, magnam accusamus
                    iusto possimus, esse ipsa error temporibus necessitatibus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
