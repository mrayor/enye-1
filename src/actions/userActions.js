import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS,
  ADD_USER,
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,
  UPDATED
} from "./types";

export const getUsers = () => {
  return { type: GET_USERS };
};
export const getUsersSuccess = users => {
  return { type: GET_USERS_SUCCESS, payload: users };
};
export const getUsersError = error => {
  return { type: GET_USERS_ERROR, payload: error };
};
export const addUser = user => {
  return { type: ADD_USER, payload: user };
};
export const addUserSuccess = user => {
  return { type: ADD_USER_SUCCESS, payload: user };
};
export const addUserError = error => {
  return { type: ADD_USER_ERROR, payload: error };
};
export const update = user => {
  return { type: UPDATED, payload: user };
};
