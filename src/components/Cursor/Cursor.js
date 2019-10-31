import React, { useEffect } from "react";
import TweenMax, { Power4 } from "gsap";
import "./Cursor.scss";
const Cursor = () => {
  useEffect(() => {
    let page = document.getElementById("App");
    let cursor = document.getElementsByClassName("c-cursor");
    let innerCursor = document.getElementById("inner-cursor");
    const allowTagNames = ["A", "BUTTON", "H1", "H2", "SVG"];

    const enterMouse = () => {
      TweenMax.to([cursor, innerCursor], 1, {
        ease: Power4.easeIn
      });
    };
    console.log(innerCursor);

    const mouseMovePos = e => {
      const mousePos = {
        x: e.clientX,
        y: e.clientY
      };
      TweenMax.to(innerCursor, 1.5, {
        x: mousePos.x,
        y: mousePos.y,
        ease: Power4.easeOut
      });

      TweenMax.to(cursor, 0.5, {
        x: mousePos.x,
        y: mousePos.y,
        ease: Power4.easeOut
      });
    };

    const updateOnHover = e => {
      const { tagName, classList } = e.target;
      if (allowTagNames.includes(tagName) || classList.contains("is-active")) {
        document.querySelector("body").classList.toggle("is-hover");
      }
    };

    page.addEventListener("mouseenter", enterMouse);
    page.addEventListener("mousemove", mouseMovePos);
    page.addEventListener("mouseover", updateOnHover);
    page.addEventListener("click", e => {
      console.log(e.target);
    });
  });
  return (
    <div>
      <div className="c-cursor"></div>
      <div id="inner-cursor"></div>
    </div>
  );
};

export default Cursor;
