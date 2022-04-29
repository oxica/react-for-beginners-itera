import React from "react";
import "./App.css";
import { Footer } from "./Footer";

const user = { userName: "Vitalii" };

const App = () => (
  <div className="App">
    <h1>Hello world {user.userName}</h1>
    <Footer copyright="C" />
  </div>
);
export default App;
