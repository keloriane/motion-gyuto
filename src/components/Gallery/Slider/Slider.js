import React, { useState, useEffect } from "react";
import "./../../Animation/animation.scss";
import leftArrow from "./../../../assets/images/svg/leftArrow.svg";
import rightArrow from "./../../../assets/images/svg/rightArrow.svg";

const Slider = props => {
  const { title, images } = props.slide;

  const [currentImg, setCurrentImg] = useState(0);

  const imageList = images.map((imageSrc, index) => (
    <li className={index === currentImg ? "active" : ""}>
      <img src={imageSrc} alt="" />
    </li>
  ));

  return (
    <div id="main-gallery">
      <div className="blur-container">
        <div className="gallery-container">
          <div className="title-container ">
            <h4 className="text-letter" id="char-split">
              {title}
            </h4>
          </div>
          <div className="content-media">
            <span>
              <img
                src={leftArrow}
                alt=""
                onClick={() => setCurrentImg((currentImg + 1) % images.length)}
              />
            </span>
            <div className="image-container t-image">
              <ul>{imageList}</ul>
            </div>
            <span>
              <img
                src={rightArrow}
                alt=""
                onClick={() => setCurrentImg((currentImg - 1) % images.length)}
              />
            </span>
            <div className="text-container gallery-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                ducimus minus voluptatum dignissimos harum atque vel consequatur
                quasi vitae ipsam consequuntur, magnam accusamus iusto possimus,
                esse ipsa error temporibus necessitatibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
