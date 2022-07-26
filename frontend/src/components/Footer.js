import React from "react";
import styles from "./Footer.module.css";
import whitelogo from "./whitelogo.png";

function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <section className={styles["what-we-do"]}></section>

      <div className={styles["footer-links"]}>
        <div className={styles["footer-link-wrapper"]}>
          <div className={styles["footer-items"]}>
            <img
              src={whitelogo}
              alt="whitelogo"
              className={styles["footer-whitelogo"]}
            />
            <p className={styles["logo-tagline"]}>
              library orders. simplified.
            </p>
            <h2>What we do?</h2>
            <p>
              Insert text about Requisit here hello hello hello hello hello{" "}
            </p>
          </div>

          <div className={styles["footer-items"]}>
            <h2>Contact Us</h2>
            <p>12345678910</p>
            <p>hello@requisit.com</p>
            <p>123 Road, London, L1 CGF4</p>
          </div>
        </div>
        <div className={styles["footer-link-wrapper"]}>
          <div className={styles["footer-items"]}>
            <h2>Need Help?</h2>
            <p>Technical Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className={styles["footer-items"]}>
            <h2>About Us</h2>
            <p>How it works</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
      <section className={styles["footer-copyright"]}>
        <div className={styles["copyright-wrap"]}>
          <div className={styles["copyright-icons"]}>
            <small className={styles["website-rights"]}>
              Requisit © 2022 by Eleanor C-M., Anna S-F., Margalida B., Mariam
              H.
            </small>
          </div>
          <div className={styles["more-info"]}>
            <p>Privacy | T&Cs | Accessibility</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
