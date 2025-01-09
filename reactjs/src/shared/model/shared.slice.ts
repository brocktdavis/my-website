/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/model/store';

export const NAME = 'shared';

/** Describes the state of the app-wide modal.
 *    I attempted to use generics (i.e. ModalState<ModalPropType>) but
 *    the createSlice function did not capure the type of a generic reducer */
interface ModalState {
  isOpen: boolean;
  Component?: ElementType;
  props?: any; 
}


export interface SharedAppState {
  modal: ModalState;
}

const initialState: SharedAppState = {
  modal: {
    isOpen: false,
    Component: undefined,
    props: undefined,
  },
};

const sharedAppSlice = createSlice({
  name: 'sharedAppSlice',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<{ Component: ElementType, props?: any}>) {
      const { Component, props } = action.payload;
      state.modal = { isOpen: true, Component: Component as ElementType, props };
    },
    hideModal(state) {
      state.modal = { isOpen: false, Component: undefined, props: undefined };
    },
  }
});

export const {
  showModal,
  hideModal,
} = sharedAppSlice.actions;

export const selectModalIsOpen = (state: RootState) => state[NAME].modal.isOpen;
export const selectModalComponent = (state: RootState) => state[NAME].modal.Component;
export const selectModalProps = (state: RootState) => state[NAME].modal.props;

export default sharedAppSlice.reducer;
