import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { persistStore } from "redux-persist";
import { createRealmPersistStorage } from "@bankify/redux-persist-realm";
import { persistReducer } from 'redux-persist'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

const persistConfig = {
    key: "root",
    version: 1,
    storage: createRealmPersistStorage(),
}

export const rootReducer = combineReducers({ users: usersReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware
})

export default store