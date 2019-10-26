import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "../actions/types";
const initialState = {
  users: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
