import React from "react";
import "./ContactUs.css";
import ContacUsInfo from "./ContactUsInfo";
import ContactUsTitle from "./ContactUsTitle";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUs() {
  console.log("HERE");

  return (
    <div className="contactUs">
      <div className="container">
        <div>
          <div className="container">
            <ContactUsTitle heading="Contact Us" />
            <div className="contactUs__wrapper">
              <div className="right">contact form</div>
              <div className="left">
                <ContacUsInfo>Contact Info</ContacUsInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
