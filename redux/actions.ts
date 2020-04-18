import { GET_USER, SET_USER } from './types';

export const getUser = (user: any) => ({
  type: GET_USER,
  payload: user,
});

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});
