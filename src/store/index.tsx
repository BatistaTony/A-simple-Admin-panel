import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './reducers/users';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux'

const configPersist = {
  key: "root",
  storage
}

const rootReducers = combineReducers({
  dashboard: dashboardReducer
});

const persistedReducer = persistReducer(configPersist, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store)

export { store, persistor};
