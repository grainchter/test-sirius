import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClickedState {
  selectedSettings: object;
  amount: number | undefined;
  value: number | undefined;
  mode: string | undefined;
}

const initialState = {
  selectedSettings: {
    amount: 0,
    value: 0,
    mode: "",
  },
} as ClickedState;

type TPayload = {
  selectedSettings: {
    amount: number | undefined;
    value: number | undefined;
    mode: string | undefined;
  };
};

const clickedSlice = createSlice({
  name: "onClickSectionTitle",
  initialState: initialState,
  reducers: {
    changeValue: (state, { payload }: PayloadAction<TPayload>) => {
      state.selectedSettings = payload.selectedSettings;
    },
  },
});

export const { changeValue } = clickedSlice.actions;

export const clickedReducer = clickedSlice.reducer;
