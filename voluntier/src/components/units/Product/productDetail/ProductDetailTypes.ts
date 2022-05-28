import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsProductDetailUI {
  isClosed: boolean;
  setIsClosed: Dispatch<SetStateAction<boolean>>;
  onToggleModal: () => void;
  data?: Pick<IQuery, "fetchProduct">;
  ProductEdit: () => void;
  ProductDelete: () => void;
  CreateDibs: (event: MouseEvent<HTMLButtonElement>) => void;
}
