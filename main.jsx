import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstApp } from "./FirstApp";
import { GifExpert} from "./GifExpert";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp value={0} />
    <GifExpert/>
  </React.StrictMode>
);
