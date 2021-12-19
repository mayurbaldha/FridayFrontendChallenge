import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { carsApi } from '../services/apiSlice';
import rootReducer from './index';
const allMiddlewares: any[] = [];
if (process.env.NODE_ENV !== 'production') {

}
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    })
      .concat(allMiddlewares)
      .concat(carsApi.middleware,),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
  // enhancers: [reduxBatch],
  // });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
