import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./slices/rootReducer";
import rootSaga from "./sagas/rootSaga";

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer :RootReducer,
    middleware:[SagaMiddleware],
});

export default store;
SagaMiddleware.run(rootSaga);