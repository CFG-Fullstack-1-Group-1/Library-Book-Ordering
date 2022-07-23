import React from "react";
import ReactDOM from "react-dom/client";
import TestPage from "./TestPage";

function App() {
  return <TestPage />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
