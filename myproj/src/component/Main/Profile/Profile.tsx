import s from "./Profile.module.css";

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
    <div className={s.profile}>
      <p className={s.name}>Name: {username}</p>
      <p className={s.location}>Country: {location}</p>
      <p className={s.hobby}>My hobby: {hobby}</p>
      <p className={s.github}>My github: {github}</p>
      <p className={s.linkedin}>My LinkedIn: {linkedin}</p>
    </div>
  );
};
