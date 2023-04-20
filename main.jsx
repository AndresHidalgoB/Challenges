import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FirstApp } from "./FirstApp";
import { GifExpert } from "./GifExpert";
import { MultipleCustomHook } from "./components/MultipleCustomHooks";
import { FocusScreen } from "./components/FocusScreen";
import {Memorize} from './components/Memorize'
import {MemoHook} from './components/MemoHook'
import {Father} from './components/Father'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp value={0} /> */}
    {/*  <GifExpert/> */}
    {/* <MultipleCustomHook/> */}
    {/* <FocusScreen/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    <Father/>

  </React.StrictMode>
);