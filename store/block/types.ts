export interface IBlock<T extends Object, U> {
  id: string;
  type: U;
  order: number;
  enabled: boolean;
  meta: T;
}

export interface ILinkBlockMeta {
  title: string;
  url: string;
}

export interface IHeadLineBlockMeta {
  title: string;
}

export interface ILinkBlock extends IBlock<ILinkBlockMeta, "link"> {}
export interface IHeadLineBlock
  extends IBlock<IHeadLineBlockMeta, "headline"> {}

export type BlockType = ILinkBlock | IHeadLineBlock;
export type BlocksType = Array<BlockType>;

export interface BlockStore {
  blocks: BlocksType;
}
