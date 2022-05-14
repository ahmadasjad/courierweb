import { fork,all } from "redux-saga/effects";
import UserDetailsSaga from './UserDetailsSaga';

export default function* rootSaga(){
    yield all([
        fork(UserDetailsSaga),
    ]);
}