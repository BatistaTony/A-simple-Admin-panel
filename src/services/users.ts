import { User } from '../types/user';
import api from './api';

export const getAllUsersFromDb = async (): Promise<User[]> => {
  const data = await api().get('/data');
  return data.data;
};

export const deleteUserFromDb = async (userId: number): Promise<User> => {
  const data = await api(process.env.REACT_APP_API_URL_CHANGE).delete(`users/:${userId}`);
  return data.data;
};

export const updateUserFromDb = async (user: User): Promise<User> => {
  const data = await api(process.env.REACT_APP_API_URL_CHANGE).patch(`users/:${user.id}`, {
    ...user
  });
  return data.data;
};

export const createUserFromDb = async (user: User): Promise<User> => {
  const data = await api(process.env.REACT_APP_API_URL_CHANGE).post('/users', {
    ...user
  });
  return data.data;
};
