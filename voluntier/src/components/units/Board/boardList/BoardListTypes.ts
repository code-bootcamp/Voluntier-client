import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from 'react';

export interface IPropsBoardList {
    data?:Pick<IQuery,"fetchBoards">
    BoardsCountData?:Pick<IQuery,"fetchBoardsCount">
    refetch?: any
    CountRefetch? : any
  }

export interface IPropsBoardListUI{
    onChangeSearch: (event:ChangeEvent<HTMLInputElement>) => void
    onClickSearch: () => void
    onChangeSmall: (event:ChangeEvent<HTMLSelectElement>) => void
    onChangeKey: (event:ChangeEvent<HTMLSelectElement>) => void
    Big : string[]
    S : any
    data? : Pick<IQuery,"fetchBoards">
    refetch? :  any
    BoardsCountData? : Pick<IQuery,"fetchBoardsCount">
  }