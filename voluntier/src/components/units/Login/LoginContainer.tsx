import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoginUI from "./LoginPresenter";
import * as yup from 'yup';
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";


const schema = yup.object({
    email: yup.string().email("이메일의 형식이 올바르지 않습니다.").required("이메일은 필수 입력사항 입니다."),
    password: yup.string().matches( 
        /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
        "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리여야 합니다"),
})

interface IFormValuesLogin {
    email : string
    password : string
}

const LOGIN = gql`
    mutation login($email:String!,$password:String!){
        login(email:$email,password:$password)
    }
`

export default function Login(){
    const [login] = useMutation(LOGIN)
    const [, setAccessToken] = useRecoilState(accessTokenState);
    const router = useRouter()
    const {register , handleSubmit, formState} = useForm({
        resolver : yupResolver(schema),
        mode:"onChange",
    })
    const onClickLogin = async (data:IFormValuesLogin) => {
        try{
            const result = await login({
                variables:{...data}
            })
            const accessToken = result.data.login
            setAccessToken(accessToken)
            Modal.success({content:"로그인에 성공하였습니다."})
            router.push('/boards')
        }catch(error){
            Modal.error({content:"로그인에 실패하였습니다."})
        }
    }

    return (
    <LoginUI
    register={register} 
    handleSubmit={handleSubmit}
    formState={formState}
    onClickLogin={onClickLogin}
    />
    )
}