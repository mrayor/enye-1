import user from "../apis/users";
import { GET_USERS, ADD_USER } from "../actions/types";
import {
  getUsersSuccess,
  getUsersError,
  addUserError,
  addUserSuccess
} from "../actions/userActions";
import { put, takeEvery, call, all } from "redux-saga/effects";

function* getUserSaga() {
  try {
    const response = yield call(user.get, "/");
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

function* addUserSaga(action) {
  try {
    const response = yield call(user.post, "/", action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserError(error));
  }
}

function* watchUserSaga() {
  yield takeEvery(GET_USERS, getUserSaga);
}

function* watchAddUserSaga() {
  yield takeEvery(ADD_USER, addUserSaga);
}

function* userSaga() {
  yield all([call(watchUserSaga), call(watchAddUserSaga)]);
}

export default userSaga;
