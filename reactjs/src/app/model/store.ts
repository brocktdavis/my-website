import { configureStore } from '@reduxjs/toolkit';
import { sharedReducer, NAME as sharedName } from 'shared/model';
import { albionBuildReducer, NAME as albionBuildName } from 'pages/albion/model';


export const store = configureStore({
  reducer: {
    [sharedName]: sharedReducer,
    [albionBuildName]: albionBuildReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.Component'],
        ignoredPaths: [`${sharedName}.modal.Component`],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
