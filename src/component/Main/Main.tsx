import s from "./Main.module.css";

import { Profile } from "../Main/Profile/Profile";
import { Welcome } from "../Main/Welcome/Welcome";

import info from "../../info.json";

export const Main = () => {
  return (
    <div className={s.main}>
      <Welcome />
      <Profile
        username={info.username}
        hobby={info.hobby}
        location={info.location}
        github={info.github}
        linkedin={info.linkedin}
      />
    </div>
  );
};
