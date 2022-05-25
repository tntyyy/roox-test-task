import React from "react";
import { Link } from "react-router-dom";

import styles from "./User.module.scss";
import { IUser } from "../../types/types";

interface UserProps {
  user: IUser;
  getId: (id: number) => void;
}

const User: React.FC<UserProps> = ({ user, getId }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <p>ФИО: {user.name}</p>
        <p>Город: {user.address.city}</p>
        <p>Компания: {user.company.name}</p>
      </div>
      <Link
        to="userprofile"
        className={styles.moreUserInfo}
        onClick={() => getId(user.id)}
      >
        Подробнее
      </Link>
    </div>
  );
};

export default User;
