import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import userTypeReducer from './slices/userslice'
import careerReducer from './slices/craeerSlice'
import mentorReducer from './slices/mentorSlice'
import {
    persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { storage } from './storage';


// we are going to use session storage to persist our redux state
const persistConfig = {
    key: 'MENTOR_ME_REDUX_STATE_STORE',
    // storage: storage,
    storage: storageSession,
}

// combine all the available reducer into one using combineReducers method from redux
const rootReducer = combineReducers({
    mentor_me_user: userTypeReducer,
    selected_mentor: mentorReducer,
    mentor_me_careers: careerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)