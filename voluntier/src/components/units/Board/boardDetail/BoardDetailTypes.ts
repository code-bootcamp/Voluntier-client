import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardDetailUI{
    data? : Pick<IQuery,"fetchBoard">
    userData? : Pick<IQuery,"fetchLoginUser">
    enrollData? : Pick<IQuery,"fetchEnrollsByBoardId">
    CreateEnroll : () => void
    DeleteBoard : () => void
    onClickEdit : () => void
    isEdit : boolean
    isChat : boolean
    onClickChat : () => void
    refetch : any
  }