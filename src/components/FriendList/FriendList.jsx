import React from "react";
import friends from "../../friends.json";
import FriendListItem from "../FriendListComp/FriendListItem";
import s from "../FriendList/friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <li className={s.Lii} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
