import React from "react";
import whitelogo from "./whitelogo.png";
import WavesAnimation from "./WavesAnimation";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero"]}>
        <div className={styles["content"]}>
          <p>
            <img
              className={styles["hero-whitelogo"]}
              src={whitelogo}
              alt="logo"
            />
          </p>
          <p>
            We are on a mission to re-invent the way you order your library
            books.
          </p>
          <p>More text</p>
        </div>
        <WavesAnimation className={styles["waves"]} />
      </div>
    </div>
  );
}

export default Hero;
