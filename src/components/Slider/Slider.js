import React, { useState, useRef, useEffect } from "react";
import Header from "./../Animation/Header/Header";
import "./../Animation/animation.scss";
import { TimelineMax, TweenMax, Power4 } from "gsap";
import leftArrow from "./../../assets/images/svg/leftArrow.svg";
import rightArrow from "./../../assets/images/svg/rightArrow.svg";
import mandala from "./../../assets/images/image3.jpg";
import timeline from "./../../assets/images/svg/timeline.svg";

const sliderContent = [
  {
    id: 1,
    theme: "/MONASTERY",
    title: "GYUTO MONASTERY",
    image: [
      `${require("./../../assets/images/image22.jpg")}`,
      `${require("./../../assets/images/image32.jpg")}`,
      `${require("./../../assets/images/image30.jpg")}`,
      `${require("./../../assets/images/image29.jpg")}`,
      `${require("./../../assets/images/image2.jpg")}`,
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
    image: [
      `${require("./../../assets/images/image12.jpg")}`,
      `${require("./../../assets/images/image16.jpg")}`,
      `${require("./../../assets/images/image10.jpg")}`,
      `${require("./../../assets/images/image19.jpg")}`,
      `${require("./../../assets/images/image1.jpg")}`,
      `${require("./../../assets/images/image17.jpg")}`
    ],
    alt: "Gyuto monastery image",
    quote: "lorem ipsum ",
    bgImage: `${require("./../../assets/images/image32.jpg")}`
  },
  {
    id: 3,
    theme: "/SCHOOL",
    title: "/GYUTO SCHOOL",
    image: [
      `${require("./../../assets/images/image12.jpg")}`,
      `${require("./../../assets/images/image16.jpg")}`,
      `${require("./../../assets/images/image10.jpg")}`,
      `${require("./../../assets/images/image19.jpg")}`,
      `${require("./../../assets/images/image1.jpg")}`,
      `${require("./../../assets/images/image17.jpg")}`],
    alt: "Gyuto monastery image",
    quote: "lorem ipsum ",
    bgImage: `${require("./../../assets/images/image33.jpg")}`
  }
];
const Slider = () => {

  let imageList = useRef(null);
  let textElement = useRef(null);
  let titleList = useRef(null);
  const imageWidth = 500;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false
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
    }); // .from(titleList, 1, { y: "-100%", delay: -2 });

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
      // .from(imageList.children, 0.7, {
      //   x: "-100%",
      //   ease: Power4.easeOut
      // })
      .from(".gallery-text", 1, { opacity: 0, delay: -0.8 })
      .from(".text-letter", 1, { opacity: 0, delay: -0.9 })
      .to("#main-img", 50, {
        x: -25,
        y: 75,
        rotationZ: 0.01,
        scale: 1.3,
        delay: -1
      });
  }, []);
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenMax.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power4.easeOut
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenMax.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power4.easeOut
    });
  };

  const scale = (index, duration) => {
    TweenMax.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power4.easeOut
    });
  };

  //Content transition

  // const fadeOut = (index, duration) => {
  //   TweenMax.to(testimonialList.children[index], duration, {
  //     opacity: 0
  //   });
  // };

  // const fadeIn = (index, duration) => {
  //   TweenMax.to(testimonialList.children[index], duration, {
  //     opacity: 1,
  //     delay: 1
  //   });
  // };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);

      slideLeft(2, 1);
      slideLeft(2, 0);

    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);


    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive3: true, isActive4: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);

      //content transition

    } else if (imageList.children[3].classList.contains("active")) {
      setState({ isActive1: true, isActive4: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);

      //content transition

    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);

      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion

    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);

      //content transtion

    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);

      //content transtion

    } else if (imageList.children[3].classList.contains("active")) {
      setState({ isActive3: true, isActive4: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);

      //content transtion

    }
  };

  const redLineAnimation = () => {

  }

  return (
    <div id="gallery">
      <div id="main-img" style={{ backgroundImage: `url(${sliderContent[1].bgImage})` }}></div>
      <div id="main" className="monstery">
        <Header title={sliderContent[1].theme} id={sliderContent[1].id} />
        <div id="main-gallery">
          <svg width="20" height="644" viewBox="0 0 20 644" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10.5" y1="20" x2="10.5" y2="639" stroke="white" stroke-width="3" />
            <line x1="10.5" y1="10" x2="10.5" y2="485" stroke="#FF0505" className="redline" />
            <circle cx="10" cy="10" r="5" fill="green " className="circle1" />
            <circle cx="10" cy="166" r="5" fill="white" className="circle2" />
            <circle cx="10" cy="322" r="5" fill="blue" className="circle3" />
            <circle cx="10" cy="478" r="5" fill="yellow" className="circle4" />
            <circle cx="10" cy="634" r="5" fill="#FF0000" className="circle5" />
            <circle cx="10" cy="10" r="10" fill="white" />
            <circle cx="10" cy="166" r="10" fill="white" />
            <circle cx="10" cy="322" r="10" fill="white" />
            <circle cx="10" cy="478" r="10" fill="white" />
            <circle cx="10" cy="634" r="10" fill="white" />
          </svg>
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
                  <img src={leftArrow} alt="" onClick={nextSlide} />
                </span>
                <div className="image-container t-image">
                  <ul ref={el => (imageList = el)}>
                    <li className={state.isActive1 ? "active" : ""}>
                      <img src={sliderContent[1].image[0]} alt="" />
                    </li>
                    <li className={state.isActive2 ? "active" : ""}>
                      <img src={sliderContent[1].image[1]} alt="" />
                    </li>
                    <li className={state.isActive4 ? "active" : ""}>
                      <img src={sliderContent[1].image[2]} alt="" />
                    </li>
                    <li className={state.isActive3 ? "active" : ""}>
                      <img src={sliderContent[1].image[3]} alt="" />
                    </li>
                  </ul>
                </div>
                <span>
                  <img src={rightArrow} alt="" onClick={prevSlide} />
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
