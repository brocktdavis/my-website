import { configureStore } from '@reduxjs/toolkit';
import { albionBuildReducer, NAME as albionBuildName } from 'pages/albion/model';

export const store = configureStore({
  reducer: {
    [albionBuildName]: albionBuildReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
