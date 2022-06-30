import { configureStore, getDefaultMiddleware   } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
import rootReducer from "./root.slice";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({thunk: false}), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
},
)

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch