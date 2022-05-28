import { IQuery } from "../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IsPageProps {
  active: string;
  startPage: number;
  index: number;
}


export interface IPropsPagination {
  data?: Pick<IQuery,"fetchBoards">
  refetch?: any;
  BoardsCountData?: any;
}

export interface IPropsPaginationUI {
  startPage: number;
  onClickPrevPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickNextPage: () => void;
  active: string;
  lastPage: number;
  index: number;
}