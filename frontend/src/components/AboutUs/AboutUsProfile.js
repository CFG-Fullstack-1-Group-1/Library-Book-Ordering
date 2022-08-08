import React, { useState } from "react";
import "./AboutUs.css";
import Card from "./Card";
import arrowUp from "./images/arrow_up.svg";
import arrowDown from "./images/arrow_down.svg";

export default function AboutUsProfile({
  pic,
  name,
  shortDescription,
  description,
}) {
  const [showFull, setShowFull] = useState(false);

  function onClickHandler() {
    setShowFull((showFullUpdated) => !showFullUpdated);
  }

  return (
    <Card>
      <img src={pic} className="teampic" alt="user1" />
      <p>
        <span>{name}</span>
      </p>
      <p>{shortDescription}</p>
      <img
        onClick={onClickHandler}
        className="AboutUs-arrow"
        src={showFull ? arrowUp : arrowDown}
      />
      {showFull && <p>{description}</p>}
    </Card>
  );
}
