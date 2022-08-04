import React, { createRef, useState } from "react";
import "./ContactUs.css";
import ContactUsTitle from "./ContactUsTitle";
import Card from "../ContactUs/Card";
import { AiFillEnvironment } from "react-icons/ai";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUsInfo() {
  return (
    <Card>
      <div className="">
        <AiFillEnvironment />
        <p>123 Road, London, L1 CGF4</p>
      </div>
    </Card>
  );
}

function ContactUsForm() {
  const emailInputRef = createRef();
  const [isValid, setIsValid] = useState(true);

  function validateEmail(email) {
    return email.match(/^([a-z0-9_-]+\@[a-z0-9_-]+\.[a-z]+)$/);
  }

  function onBlurHandler() {
    const email = String(emailInputRef.current.value).toLowerCase();
    emailInputRef.current.value = email;
    setIsValid(validateEmail(email));
  }

  return (
    <Card>
      <div className="contactUs-form">
        <form>
          <div>
            <label for="email">email:</label>
            <input
              style={!isValid ? { color: "red" } : {}}
              type="email"
              name="email"
              onBlur={onBlurHandler}
              ref={emailInputRef}
            />
          </div>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Card>
  );
}

function ContactUs() {
  return (
    <div className="contactUs">
      <ContactUsTitle heading="Contact Us" />
      <div className="container">
        <ContactUsInfo />
        <ContactUsForm />
      </div>
    </div>
  );
}

export default ContactUs;
