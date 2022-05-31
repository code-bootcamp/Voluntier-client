import { IQuery } from "../../../../commons/types/generated/types";
import { RefObject } from "react";
import { Editor } from "@toast-ui/react-editor";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  UseFormGetValues,
} from "react-hook-form";

export interface IBoardWrite {
  isEdit?: boolean;
  defaultData?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardSubmitFormValues {
  title?: string;
  centerName?: string;
  centerOwnerName?: string;
  centerPhone?: string;
  recruitCount?: number;
  serviceDate?: string;
  serviceTime?: number;
  address?: string;
  addressDetail?: string;
  location1?: string;
  location2?: string;
  contents?: string;
  urls?: [];
}

export interface IPropsBoardWriteUI {
  isEdit?: boolean;
  address?: string;
  onClickEdit: (data: IBoardSubmitFormValues) => void;
  onClickSubmit: (data: IBoardSubmitFormValues) => void;
  handleComplete: (data: any) => void;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  editorRef: RefObject<Editor>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: any;
  getValues: UseFormGetValues<FieldValues>;
  defaultData?: Pick<IQuery, "fetchBoard">;
}

export interface ImyupdateBoardInput {
  title?: string;
  contents?: string;
  centerName?: string;
  centerOwnerName?: string;
  centerPhone?: string;
  recruitCount?: number;
  serviceTime?: number;
  serviceDate?: string;
  address?: string;
  addressDetail?: string;
  location1?: string;
  location2?: string;
  urls?: string;
}

export interface IMyVariables {
  updateBoardInput: ImyupdateBoardInput;
  boardId: string;
}
