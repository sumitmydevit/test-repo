import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice";
import drawerReducer from "./features/drawer/drawerSlice";
import formDialogReducer from "./features/dialog/formDialogSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      drawer: drawerReducer,
      formDialog: formDialogReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
    }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']