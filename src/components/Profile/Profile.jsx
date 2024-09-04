import React from "react";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <div className={s.imgWrapper}>
          <img src={image} alt={`${name} avatar`} />
        </div>
        <h1 className={s.fullname}>{name}</h1>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
        <ul className={s.stats}>
          <li className={s.q}>
            <span className={s.label}>Followers: </span>
            <span className={s.quantity}>{stats.followers}</span>
          </li>
          <li className={s.q}>
            <span className={s.label}>Views: </span>
            <span className={s.quantity}>{stats.views}</span>
          </li>
          <li className={s.q}>
            <span className={s.label}>Likes: </span>
            <span className={s.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
