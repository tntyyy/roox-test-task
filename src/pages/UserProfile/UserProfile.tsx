import React from 'react';

import Input from '../../components/Input/Input';

import { IUserProfile } from '../../types/types';

import styles from './UserProfile.module.scss';

interface UserProfileProps {
  user: IUserProfile | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const [isDisabled, setDisabled] = React.useState(true);

  return (
    <>
      {user !== null ? (
        <div className={styles.wrapper}>
          <header>
            <h2>Профиль пользователя</h2>
            <button onClick={() => setDisabled(false)}>Редактировать</button>
          </header>
          <div className={styles.content}>
            <Input isDisabled={isDisabled} inputName="Name" content={user.name} type="text" />
            <Input
              isDisabled={isDisabled}
              inputName="Username"
              content={user.username}
              type="text"
            />
            <Input isDisabled={isDisabled} inputName="E-mail" content={user.email} type="email" />
            <Input
              isDisabled={isDisabled}
              inputName="Street"
              content={user.address.street}
              type="text"
            />
            <Input
              isDisabled={isDisabled}
              inputName="City"
              content={user.address.city}
              type="text"
            />
            <Input
              isDisabled={isDisabled}
              inputName="Zipcode"
              content={user.address.zipcode}
              type="text"
            />
            <Input isDisabled={isDisabled} inputName="Phone" content={user.phone} type="text" />
            <Input isDisabled={isDisabled} inputName="Website" content={user.website} type="text" />
            <Input isDisabled={isDisabled} inputName="Comment" content="" type="textarea" />
          </div>
          <button>Отправить</button>
        </div>
      ) : (
        <div className={styles.wrapper}>Пусто</div>
      )}
    </>
  );
};

export default UserProfile;
