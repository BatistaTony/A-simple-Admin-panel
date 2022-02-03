import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import {
  createUserFromDb,
  deleteUserFromDb,
  getAllUsersFromDb,
  updateUserFromDb
} from '../../services/users';
import { User } from '../../types/user';

interface DashboardSliceType {
  users: User[];
  flashUser: number;
}

const initialState: DashboardSliceType = { users: [], flashUser: 0 };

const dashboardSliceState = createSlice({
  initialState: initialState,
  name: 'users',
  reducers: {
    resetUsers: () => initialState,
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    resetFlashUser(state) {
      state.flashUser = 0;
    },
    setFlashUser(state, action: PayloadAction<number>) {
      state.flashUser = action.payload;
    },
    deleteUser(state, action: PayloadAction<number>) {
      const id = action.payload;

      const oldState = state.users;

      const newState = oldState.filter((user) => user.id !== id);

      state.users = newState;
    },
    createNewUser(state, action: PayloadAction<User>) {
      const user = action.payload;

      if (state.users.length) {
        const newId = (state.users[state.users.length - 1].id as number) + 1;
        user.id = newId;
        state.users.push(user);
      } else {
        user.id = 1;
        state.users.push(user);
      }
    },
    updateUser(state, action: PayloadAction<User>) {
      let userInfo = action.payload;

      let oldState = state.users;
      let userIndex = oldState.findIndex((user) => user.id === userInfo.id);

      if (userIndex >= 0) {
        state.users[userIndex] = userInfo;
      }
    }
  }
});

export const {
  resetUsers,
  setUsers,
  deleteUser,
  createNewUser,
  updateUser,
  resetFlashUser,
  setFlashUser
} = dashboardSliceState.actions;

export const getUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    const data = await getAllUsersFromDb();
    dispatch(setUsers(data));
  };
};

export const actionCreateNewUser = (user: User) => {
  return async (dispatch: any) => {
    const data = await createUserFromDb(user);
    dispatch(createNewUser(data));
  };
};

export const actionUpdateUser = (user: User) => {
  return async (dispatch: Dispatch<any>) => {
    const data = await updateUserFromDb(user);
    dispatch(updateUser(data));
  };
};

export const actionDeleteUser = (id: number) => {
  return async (dispatch: Dispatch<any>) => {
    await deleteUserFromDb(id);
    dispatch(deleteUser(id));
  };
};

export default dashboardSliceState.reducer;
