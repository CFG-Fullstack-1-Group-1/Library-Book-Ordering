import React from "react";
import "../pages/AboutUs.css";

export default function Card(props) {
  return <div className="card">{props.children}</div>;
}
