import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { workData } from "../../workData";

interface IndexState {
  value: number;
  dataLength: number;
  item: {
    img: string;
    title: string;
    shadowTitle: string;
    techStack: string[];
    description: string;
    link?: string;
  };
}

const initialState: IndexState = {
  value: 0,
  dataLength: workData.length,
  item: workData[0],
};

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(state.dataLength);
      if (state.value > state.dataLength - 1) {
        state.value = 0;
      }
      state.item = workData[state.value];
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value < 0) {
        state.value = state.dataLength - 1;
      }
      state.item = workData[state.value];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = indexSlice.actions;

export default indexSlice.reducer;
