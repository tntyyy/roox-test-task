import React from 'react';

import User from '../User/User';
import { IUser } from '../../types/types';

import styles from './UserList.module.scss';

interface UserListProps {
  users: IUser[];
  getId: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, getId }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Список пользователей</h1>
      {users.map(user => (
        <User user={user} key={user.id} getId={getId} />
      ))}
    </div>
  );
};

export default UserList;
