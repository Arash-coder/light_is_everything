import { lumosAPI } from '@/api'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from './slices/auth'


const rootReducer = combineReducers({
  [lumosAPI.reducerPath]: lumosAPI.reducer,
  auth: authSlice.reducer
})
export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lumosAPI.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch)