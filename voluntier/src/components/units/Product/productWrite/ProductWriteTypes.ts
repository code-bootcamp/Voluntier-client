import { Editor } from "@toast-ui/react-editor";
import { Dispatch, RefObject, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormValuesProductWrite {
  name?: string;
  price?: number;
  details?: string;
  imageUrls?: string[];
}

export interface IPropsProductWrite {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchProduct">;
}

export interface IPropsIProductWriteUI {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  myImage: string[];
  setMyImage: Dispatch<SetStateAction<string[]>>;
  CreateProduct: (data: any) => void;
  UpdateProduct: (data: any) => void;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchProduct">;
  editorRef: RefObject<Editor>;
}
