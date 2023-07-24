import React from "react";
import { createRoot } from "react-dom/client";
import { MediaPlayer } from "./Page";
import "./styles/global.css";

const App = () => {
  return <MediaPlayer />;
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);