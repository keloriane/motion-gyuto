import React from "react";

export default function SideBar(props) {
  return (
    <svg
      width="20"
      height="644"
      viewBox="0 0 20 644"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="10.5"
        y1="20"
        x2="10.5"
        y2="639"
        stroke="white"
        stroke-width="3"
      />
      <line
        x1="10.5"
        y1="10"
        x2="10.5"
        y2="485"
        stroke="#FF0505"
        className="redline"
      />
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="white"
        onClick={() => props.click(1)}
      />
      <circle
        cx="10"
        cy="166"
        r="10"
        fill="white"
        onClick={() => props.click(2)}
      />
      <circle
        cx="10"
        cy="322"
        r="10"
        fill="white"
        onClick={() => props.click(3)}
      />
      <circle
        cx="10"
        cy="478"
        r="10"
        fill="white"
        onClick={() => props.click(4)}
      />
      <circle
        cx="10"
        cy="634"
        r="10"
        fill="white"
        onClick={() => props.click(5)}
      />
    </svg>
  );
}
