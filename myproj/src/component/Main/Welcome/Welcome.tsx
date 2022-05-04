import React from "react";
import s from "./Welcome.module.css";

const user = { userName: "Oksana" };

export const Welcome = () => {
  return <h1 className={s.title}>Hello! I'm {user.userName}</h1>;
};
