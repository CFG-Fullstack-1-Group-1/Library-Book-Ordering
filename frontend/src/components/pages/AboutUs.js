import React, { useState } from "react";
import user1 from "../../../static/images/user1.jpeg";
import user2 from "../../../static/images/user2.jpeg";
import user3 from "../../../static/images/user3.jpeg";
import user4 from "../../../static/images/user4.png";
import arrowUp from "./arrow_up.svg";
import arrowDown from "./arrow_down.svg";
import "./AboutUs.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

function AboutUsProfile({ pic, name, shortDescription, description }) {
  const [showFull, setShowFull] = useState(false);

  function onClickHandler() {
    setShowFull((showFull) => !showFull);
  }

  return (
    <Card>
      <img src={pic} className="teampic" alt="user1" />
      <p>
        <span>{name}</span>
      </p>
      <p>{shortDescription}</p>
      <img onClick={onClickHandler} src={showFull ? arrowDown : arrowUp} />
      {showFull && <p>{description}</p>}
    </Card>
  );
}

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="container">
        <h1>About Us</h1>

        {/* Edit stuff here by making a card component and then importing it into the webpage*/}
        <div className="paragraph">
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            varius duis at consectetur lorem donec massa. Turpis egestas
            maecenas pharetra convallis posuere morbi. Est sit amet facilisis
            magna. Vitae elementum curabitur vitae nunc. Duis ut diam quam nulla
            porttitor massa id neque aliquam. Sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla phasellus faucibus.
            Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          </Card>
        </div>
        <div className="content">
          <div className="members-container">
            <AboutUsProfile
              pic={user1}
              name="Name 1"
              shortDescription="Head of things"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
            <AboutUsProfile
              pic={user1}
              name="Name 1"
              shortDescription="Head of things"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
          </div>

          <div className="members-container1">
            <AboutUsProfile
              pic={user1}
              name="Name 1"
              shortDescription="Head of things"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
            <AboutUsProfile
              pic={user1}
              name="Name 1"
              shortDescription="Head of things"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
          </div>
        </div>

        {/* Edit stuff here */}
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            varius duis at consectetur lorem donec massa. Turpis egestas
            maecenas pharetra convallis posuere morbi. Est sit amet facilisis
            magna. Vitae elementum curabitur vitae nunc. Duis ut diam quam nulla
            porttitor massa id neque aliquam. Sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla phasellus faucibus.
            Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
