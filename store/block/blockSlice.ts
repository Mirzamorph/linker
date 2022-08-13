import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockStore, BlocksType, BlockType } from "./types";

const initialState: BlockStore = {
  blocks: [],
};

export const blockSlice = createSlice({
  name: "block",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<BlockType>) => {
      state.blocks = [...state.blocks, action.payload];
    },
    setBlocks: (state, action: PayloadAction<BlocksType>) => {
      state.blocks = action.payload;
    },
    changeBlockField: (state, action: PayloadAction<BlockType>) => {
      state.blocks = state.blocks.map((block) => {
        if (block.id === action.payload.id) {
          return action.payload;
        }
        return block;
      });
    },
  },
});

export const { addBlock, setBlocks, changeBlockField } = blockSlice.actions;

export default blockSlice.reducer;
