import React from "react";
import friends from "../../friends.json";
import s from "../FriendListComp/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.liI}>
      <img src={avatar} alt="Avatar" width="48" />
      <p> {name} </p>
      {isOnline == true ? (
        <p className={s.On}>Online</p>
      ) : (
        <p className={s.Off}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
