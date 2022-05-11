import SignUpUI from "./SignUpPresenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup"


const schema = yup.object({
    email: yup.string().email("이메일의 형식이 올바르지 않습니다.").required("이메일은 필수 입력사항 입니다."),
    name: yup.string().required("이름은 필수 입력사항입니다."),
    password: yup.string().matches( 
        /^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%#?&]{1,8}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야 합니다"),
    passwordCheck : yup.string().oneOf([yup.ref('password'), null], "패스워드와 일치하지 않습니다."),
    phoneNumber : yup.number().typeError("핸드폰 번호는 숫자로만 입력해주세요.").required("핸드폰 번호는 필수 입려사항 입니다."),
    phoneNumberCheck : yup.number().typeError("핸드폰 번호 인증은 숫자로만 입력해주세요").required("핸드폰 번호 인증은 필수입니다.")
})

interface IFormValues {
    email : string
    name: string
    password : string
    passwordCheck : string
    phoneNumber: number
    phoneNumberCheck: number
}

export default function SignUp(){
    const {register , handleSubmit, formState} = useForm({
        resolver : yupResolver(schema),
        mode:"onChange",
    })
    const onClickSignUp = (data:IFormValues) => {
        console.log("aaa")
    }
    return(
        <SignUpUI 
        register={register} 
        handleSubmit={handleSubmit}
        formState={formState}
        onClickSignUp={onClickSignUp}
        />
    )
}