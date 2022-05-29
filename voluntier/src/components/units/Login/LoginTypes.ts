import { FieldValues, FormState, UseFormRegister,UseFormHandleSubmit } from "react-hook-form";

export interface IFormValuesLogin {
    email?: string;
    password?: string;
  }
  

export interface IPropsLoginUI {
    register: UseFormRegister<FieldValues>
    handleSubmit: UseFormHandleSubmit<FieldValues>
    formState: FormState<FieldValues>
    onClickLogin: (data:IFormValuesLogin) => void;
    moveToPage: (page: string) => () => void;
  }