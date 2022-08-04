import React from "react";
import BookDetails from "../Test/Modal/BookDetails";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUs() {
  return (
    <section>
      <div className="AboutUs">
        <div className="container">
          <h1>Contact Us</h1>

          <div>
           <BookDetails/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
