import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import UserList from './components/UserList/UserList';
import Sort from './components/Sort/Sort';

import UserProfile from './pages/UserProfile/UserProfile';

import { IUser } from './types/types';
import { IUserProfile } from './types/types';
import styles from './App.module.scss';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [userProfile, setUserProfile] = React.useState<IUserProfile | null>(null);
  const [userId, setUserId] = React.useState(0);

  const filterByCity = () => {
    setUsers([...users].sort((a, b) => (a.address.city > b.address.city ? 1 : -1)));
  };

  const filterByCompany = () => {
    setUsers([...users].sort((a, b) => (a.company.name > b.company.name ? 1 : -1)));
  };

  const getIdFromUser = (id: number) => {
    setUserId(id);
  };

  React.useEffect(() => {
    async function getProfileUser(id: number) {
      try {
        const response = await axios.get<IUserProfile[]>(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        setUserProfile(response.data[0]);
      } catch (error) {
        alert(error);
      }
    }

    if (userId > 0) {
      getProfileUser(userId);
    }
  }, [userId]);

  React.useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        if (response.data.length) {
          setUsers(response.data);
        }
      } catch (error) {
        alert(error);
      }
    }

    getUsers();
  }, []);


  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sort filterByCity={filterByCity} filterByCompany={filterByCompany} />
              <UserList users={users} getId={getIdFromUser} />
            </>
          }
        />
        <Route path="/userprofile" element={<UserProfile user={userProfile} />} />
      </Routes>
    </div>
  );
}

export default App;
