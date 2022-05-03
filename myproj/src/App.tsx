import React from "react";
import "./App.css";
import { Footer } from "./Footer";
import info from "./info.json";
import { Profile } from "./Profile";

const user = { userName: "Oksana" };

const App = () => (
  <div className="App">
    <h1>Hello! I'm {user.userName}</h1>
    <Profile
      username={info.username}
      hobby={info.hobby}
      location={info.location}
      github={info.github}
      linkedin={info.linkedin}
    />
    <Footer copyright="C" />
  </div>
);
export default App;
