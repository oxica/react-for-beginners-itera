import React from "react";

type ProfileProps = {
  username: string;
  hobby: string;
  location: string;
  github: string;
  linkedin: string;
};

export const Profile: React.FC<ProfileProps> = ({
  username,
  hobby,
  location,
  github,
  linkedin,
}) => {
  return (
    <div className="profile">
      <p className="name">Name: {username}</p>
      <p className="location">Country: {location}</p>
      <p className="hobby">My hobby: {hobby}</p>
      <p className="github">My github: {github}</p>
      <p className="linkedin">My LinkedIn: {linkedin}</p>
    </div>
  );
};
