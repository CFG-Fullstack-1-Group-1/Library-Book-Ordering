import React from "react";
import "../pages/ContactUs.css";

export default function Card(props) {
  return <div className="card">{props.children}</div>;
}
