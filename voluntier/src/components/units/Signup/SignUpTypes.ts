export interface IFormValuesSignUp {
    email : string
    name: string
    password : string
    passwordCheck : string
    phone: string
    phoneNumberCheck: string
}

export interface IPropsSignUpUI {
    register:any
    handleSubmit:any 
    formState: any
    onClickSignUp : (data:any) => void
    onClickSendPhone : () => void
    onClickCheckPhoneAuthToken : () => void
}