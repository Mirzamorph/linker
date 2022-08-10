import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsStore {
  name: string;
  description: string;
}

const initialState: SettingsStore = {
  name: "mirzamorph",
  description: "Lorem ipsum dolor sit amet consectetur.",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
  },
});

export const { setName, setDescription } = settingsSlice.actions;

export default settingsSlice.reducer;
