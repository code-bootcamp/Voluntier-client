import { FieldValues, FormState, UseFormRegister,UseFormHandleSubmit } from "react-hook-form";

export interface IFormResetPassword {
    email?:string
    password?:string
    passwordCheck?:string
    phone?:string
    phoneNumberCheck?:string
  }

export interface IFindPasswordUI{
    handleSubmit: UseFormHandleSubmit<FieldValues>
    ResetPassword: (data:IFormResetPassword)=>void
    register: UseFormRegister<FieldValues>
    formState: FormState<FieldValues>
    onClickCheckPhoneAuthToken: () => void
    onClickSendPhone: () => void
}