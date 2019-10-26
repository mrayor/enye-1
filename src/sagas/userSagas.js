import user from "../apis/users";
import { GET_USERS, ADD_USER } from "../actions/types";
import {
  getUsersSuccess,
  getUsersError,
  addUserError,
  addUserSuccess,
  update
} from "../actions/userActions";
import database from "../firebase/config";
import { put, takeEvery, call, all, take, fork } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

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

function createEventChannel() {
  const userRef = database.ref("users");
  const listener = eventChannel(emit => {
    userRef.on("value", snapshot => emit(snapshot.val() || {}));
    return () => listener.off();
  });
  return listener;
}

function* updateUserSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const users = yield take(updateChannel);
    yield put(update(users));
  }
}

function* watchUserSaga() {
  yield takeEvery(GET_USERS, getUserSaga);
}

function* watchAddUserSaga() {
  yield takeEvery(ADD_USER, addUserSaga);
}

function* userSaga() {
  yield all([
    call(watchUserSaga),
    call(watchAddUserSaga),
    fork(updateUserSaga)
  ]);
}

export default userSaga;
