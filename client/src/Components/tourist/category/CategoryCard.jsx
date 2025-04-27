import React from "react";

export default function CategoryCard(props) {
  const { cardImg, heading, content } = props;
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="imgs" src={cardImg}></img>
      </div>
      <h4>{heading}</h4>
      <p>{content}</p>
    </div>
  );
}
