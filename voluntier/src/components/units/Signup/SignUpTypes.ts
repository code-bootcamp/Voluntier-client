import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface IFormValuesSignUp {
    email? : string
    name?: string
    password? : string
    passwordCheck? : string
    phone?: string
    phoneNumberCheck?: string
}

export interface IPropsSignUpUI {
    register:UseFormRegister<FieldValues>
    handleSubmit:UseFormHandleSubmit<FieldValues> 
    formState: FormState<FieldValues>
    onClickSignUp : (data:IFormValuesSignUp) => void
    onClickSendPhone : () => void
    onClickCheckPhoneAuthToken : () => void
}