import React, { useState } from "react";
import user1 from "../AboutUs/images/user1.jpg";
import user2 from "../AboutUs/images/user2.jpg";
import user3 from "../AboutUs/images/user3.png";
import user4 from "../AboutUs/images/user4.png";
import "../AboutUs/AboutUs.css";
import Card from "../AboutUs/Card";
import AboutUsProfile from "../AboutUs/AboutUsProfile";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="container">
        <h1>About Us</h1>
        <Card>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            varius duis at consectetur lorem donec massa. Turpis egestas
            maecenas pharetra convallis posuere morbi. Est sit amet facilisis
            magna. Vitae elementum curabitur vitae nunc. Duis ut diam quam nulla
            porttitor massa id neque aliquam. Sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla phasellus faucibus.
            Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          </div>
        </Card>
        <div className="content">
          <div className="members-container">
            <AboutUsProfile
              pic={user1}
              name="Anna Sapsford-Francis"
              shortDescription="Tech Lead"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
            <AboutUsProfile
              pic={user2}
              name="Eleanor"
              shortDescription="Product Owner"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
          </div>

          <div className="members-container1">
            <AboutUsProfile
              pic={user3}
              name="Mariam Hussein"
              shortDescription="Project Manager"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
            <AboutUsProfile
              pic={user4}
              name="Margalida Bover Torres"
              shortDescription="Design Lead"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              varius duis at consectetur lorem donec massa."
            />
          </div>
        </div>

        {/* Edit stuff here */}
        <Card>
          <div className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            varius duis at consectetur lorem donec massa. Turpis egestas
            maecenas pharetra convallis posuere morbi. Est sit amet facilisis
            magna. Vitae elementum curabitur vitae nunc. Duis ut diam quam nulla
            porttitor massa id neque aliquam. Sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur. Pellentesque diam
            volutpat commodo sed egestas egestas fringilla phasellus faucibus.
            Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
