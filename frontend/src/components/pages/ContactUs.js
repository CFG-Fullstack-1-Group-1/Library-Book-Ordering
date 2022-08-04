import React from "react";
import "./ContactUs.css";
import ContacUsInfo from "./ContactUsInfo";
import ContactUsTitle from "./ContactUsTitle";
import Card from "../ContactUs/Card";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="container">
        <div>
          <div className="container">
            <ContactUsTitle heading="Contact Us" />
            <Card className="contactUs-card">
              {/* <div className="right">contact form</div> */}
              <div className="left">
                <ContacUsInfo>Contact Info</ContacUsInfo>
                {/* <ContactUsInfo1>Tlf</ContactUsInfo1> */}
              </div>
            </Card>
            <Card>
              <div className="contactUs-form">Contact Form</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
