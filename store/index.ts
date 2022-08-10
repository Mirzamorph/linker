import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./block/blockSlice";
import settingsSlice from "./settings/settingsSlice";

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    blocks: blockSlice,
  },
});
