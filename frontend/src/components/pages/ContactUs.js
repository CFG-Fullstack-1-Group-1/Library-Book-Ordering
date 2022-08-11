import React, { createRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../ContactUs/ContactUs.css";
import ContactUsTitle from "../ContactUs/ContactUsTitle";
import Card from "../ContactUs/Card";
import { AiFillEnvironment } from "react-icons/ai";
import { FiPhone, FiMail } from "react-icons/fi";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUsInfo() {
  return (
    <Card className="contact-info">
      <span>
        <FiPhone />
        <p> 12345678910</p>
      </span>
      <span>
        <FiMail />
        <p> hello@requisit.com</p>
      </span>
      <span className="">
        <AiFillEnvironment />
        <p>123 Road, London, L1 CGF4</p>
      </span>

      <span></span>
    </Card>
  );
}

function ContactUsForm() {
  const emailInputRef = createRef();
  const textInputRef = createRef();
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) {
      const timer = setTimeout(() => navigate("/"), 2000);
    }
  }, [isDone]);

  function validateEmail(email) {
    return email.match(/^([a-z0-9_-]+\@[a-z0-9_-]+\.[a-z]+)$/);
  }

  function validateText(text) {
    return text.length > 0;
  }

  function onBlurInputEmailHandler() {
    const email = String(emailInputRef.current.value).toLowerCase();
    emailInputRef.current.value = email;
    setIsEmailValid(validateEmail(email));
  }

  function onChangeInputEmailHandler() {
    if (!isEmailValid) {
      onBlurInputEmailHandler();
    }
  }

  function onBlurInputTextHandler() {
    const text = String(textInputRef.current.value);
    textInputRef.current.value = text;
    setIsTextValid(validateText(text));
  }

  function onChangeInputTextHandler() {
    if (!isTextValid) {
      onBlurInputTextHandler();
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    const email = String(emailInputRef.current.value).toLowerCase();
    const text = String(textInputRef.current.value);
    onBlurInputEmailHandler();
    onBlurInputTextHandler();
    if (validateEmail(email) && validateText(text)) {
      console.log(`Send contact to ${email} with text: ${text}`);
      emailInputRef.current.value = "";
      textInputRef.current.value = "";
      setIsDone(true);
    }
  }

  return (
    <Card className="contact-us-form-card">
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Your email: </label>
            <input
              style={!isEmailValid ? { color: "red" } : {}}
              type="text"
              className="contactUs-email"
              name="email"
              onBlur={onBlurInputEmailHandler}
              onChange={onChangeInputEmailHandler}
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="text"> Message/enquiry: </label>
            <textarea
              className="contactUs-text"
              ref={textInputRef}
              onBlur={onBlurInputTextHandler}
              onChange={onChangeInputTextHandler}
            />
            {!isTextValid && <p>Please enter message</p>}
            {isDone && <p>Thank you for contacting us.</p>}
          </div>
          <div className="submit-btn-container">
            <input
              className="contactUs-btn"
              type="submit"
              value="Submit"
              disabled={!isEmailValid || !isTextValid}
            />
          </div>
        </form>
      </div>
    </Card>
  );
}

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="container">
        <ContactUsTitle heading="Contact Us" />
        <div className="contact-form-container">
          <ContactUsInfo />
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
