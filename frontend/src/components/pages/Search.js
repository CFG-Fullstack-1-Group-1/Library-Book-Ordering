import React from "react";
import Form from "../Form/Form";
import styles from "./Search.module.css";

function Search() {
  return (
    <section>
      <div className={styles["SearchPage"]}>
        <div className={styles["searchpage-container"]}>
          <div className={styles["searchpage-info"]}>
            <h1>Search</h1>
            <p>insert info here</p>
          </div>
          <div className={styles["form-container"]}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
