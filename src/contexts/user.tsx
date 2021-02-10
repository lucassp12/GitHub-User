import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

interface IUser {
  login: string;
  avatar_url: string;
  location: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
}

export interface IRepos {
  id: number;
  full_name: string;
  html_url: string;
  description: string;
}
interface IUserContextData {
  user: IUser;
  repos: IRepos[];
  starred: number;
  findUser(name: string): void;
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData,
);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [starred, setStarred] = useState(0);

  const findRepos = useCallback(async (login: string) => {
    try {
      const response = await api.get(`/users/${login}/repos`);
      setRepos(response.data);
    } catch (err) {}
  }, []);

  const findStarred = useCallback(async (login: string) => {
    try {
      const response = await api.get(`/users/${login}/starred`);
      setStarred(response.data.length);
    } catch (err) {}
  }, []);

  const findUser = useCallback(
    async (name: string) => {
      try {
        const response = await api.get(`/users/${name}`);
        setUser(response.data);
        findStarred(response.data.login);
        findRepos(response.data.login);
      } catch (err) {
        alert(err.message);
      }
    },
    [findStarred, findRepos],
  );

  return (
    <UserContext.Provider value={{ user, findUser, repos, starred }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('usePlaces must be used within an userProvider');
  }

  return context;
};

export default UserContext;
