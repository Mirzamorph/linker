import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { addBlock, changeBlockField, setBlocks } from "./blockSlice";
import { BlockType } from "./types";

export const useAddLinkBlock = () => {
  const { blocks } = useAppSelector((state) => state.blocks);
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(
      addBlock({
        id: Date.now().toString(),
        enabled: true,
        type: "link",
        order: blocks.length,
        meta: {
          title: "",
          url: "",
        },
      })
    );
  }, [blocks.length, dispatch]);
};

export const useAddHeadlineBlock = () => {
  const { blocks } = useAppSelector((state) => state.blocks);
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(
      addBlock({
        id: Date.now().toString(),
        enabled: true,
        type: "headline",
        order: blocks.length,
        meta: {
          title: "",
        },
      })
    );
  }, [blocks.length, dispatch]);
};

export const useRemoveBlock = (id: string) => {
  const { blocks } = useAppSelector((state) => state.blocks);
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(setBlocks(blocks.filter((block) => block.id !== id)));
  }, [blocks, dispatch, id]);
};

export const useChangeBlockField = <T extends BlockType>(block: T) => {
  const dispatch = useAppDispatch();

  return useCallback(
    (
      fieldName: keyof T | keyof T["meta"],
      fieldValue: T[keyof T] | T["meta"][keyof T["meta"]],
      isMetaField = false
    ) => {
      let newBlock = block;

      if (isMetaField) {
        newBlock = {
          ...block,
          meta: {
            ...block.meta,
            [fieldName]: fieldValue,
          },
        };
      } else {
        newBlock = {
          ...block,
          [fieldName]: fieldValue,
        };
      }

      dispatch(changeBlockField(newBlock));
    },
    [block, dispatch]
  );
};
