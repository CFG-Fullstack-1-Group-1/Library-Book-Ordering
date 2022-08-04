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
  const textInputRef = createRef();
  const submitRef = createRef();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);

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
    }
  }

  return (
    <Card>
      <div className="contactUs-form">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">email:</label>
            <input
              style={!isEmailValid ? { color: "red" } : {}}
              type="email"
              name="email"
              onBlur={onBlurInputEmailHandler}
              onChange={onChangeInputEmailHandler}
              ref={emailInputRef}
            />
          </div>
          <input
            type="text"
            ref={textInputRef}
            onBlur={onBlurInputTextHandler}
            onChange={onChangeInputTextHandler}
          />
          {!isTextValid && <p>Please enter message</p>}
          <input
            type="submit"
            value="Submit"
            ref={submitRef}
            disabled={!isEmailValid || !isTextValid}
          />
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
