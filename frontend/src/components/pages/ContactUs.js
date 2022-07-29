import React from "react";
import styles from "./AboutUs.module.css";

// https://www.youtube.com/watch?v=BtdM2_likL8
// More complex version https://www.youtube.com/watch?v=KGFG-yQD7Dw

function ContactUs() {
  return (
    <section>
      <div className={styles["AboutUs"]}>
        <div className={styles["container"]}>
          <h1>Contact Us</h1>

          <div className={styles["paragraph"]}>
            <p>insert info here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
