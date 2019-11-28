import React, { useState } from "react";
import Header from "./../Animation/Header/Header";
import SideBar from "./SideBar/SideBar";
import Slider from "./Slider/Slider";

const sliderContent = [
  {
    id: 1,
    theme: "/MONASTERY",
    title: "GYUTO MONASTERY",
    images: [
      `${require("./../../assets/images/image22.jpg")}`,
      `${require("./../../assets/images/image32.jpg")}`,
      `${require("./../../assets/images/image30.jpg")}`,
      `${require("./../../assets/images/image29.jpg")}`,
      `${require("./../../assets/images/image2.jpg")}`,
      `${require("./../../assets/images/image27.jpg")}`
    ],
    alt: "Gyuto monastery image",
    quote: "lorem ipsum ",
    bgImage: `${require("./../../assets/images/image42.jpg")}`,
    active: true
  },
  {
    id: 2,
    theme: "/MANDALA",
    title: "/MANDALA DE TERRE",
    images: [
      `${require("./../../assets/images/image12.jpg")}`,
      `${require("./../../assets/images/image16.jpg")}`,
      `${require("./../../assets/images/image10.jpg")}`,
      `${require("./../../assets/images/image19.jpg")}`,
      `${require("./../../assets/images/image1.jpg")}`,
      `${require("./../../assets/images/image17.jpg")}`
    ],
    alt: "Gyuto monastery image",
    quote: "lorem ipsum ",
    bgImage: `${require("./../../assets/images/image32.jpg")}`,
    active: false
  },
  {
    id: 3,
    theme: "/SCHOOL",
    title: "/GYUTO SCHOOL",
    images: [
      `${require("./../../assets/images/image12.jpg")}`,
      `${require("./../../assets/images/image16.jpg")}`,
      `${require("./../../assets/images/image10.jpg")}`,
      `${require("./../../assets/images/image19.jpg")}`,
      `${require("./../../assets/images/image1.jpg")}`,
      `${require("./../../assets/images/image17.jpg")}`
    ],
    alt: "Gyuto monastery image",
    quote: "lorem ipsum ",
    bgImage: `${require("./../../assets/images/image33.jpg")}`,
    active: false
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = index => {
    setCurrentIndex(index);
  };

  const gallery = sliderContent.map((slide, index) => {
    if (index === currentIndex) {
      return (
        <div id="gallery">
          <div
            id="main-img"
            style={{ backgroundImage: `url(${slide.bgImage})` }}></div>
          <div id="main" className="monstery">
            <Header title={slide.theme} id={slide.id} />
            <SideBar click={handleClick} />
            <Slider slide={slide} />
          </div>
        </div>
      );
    } else return null;
  });

  return <>{gallery}</>;
}
