import * as S from './FindPasswordStyles'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import * as yup from 'yup';
import { useRouter } from 'next/router';

export const SEND_PHONE_AUTH = gql`
    mutation sendPhoneAuthToken($phone:String!){
        sendPhoneAuthToken(phone:$phone)
    }
`
export const CHECK_PHONE_AUTH = gql`
    mutation checkPhoneAuthToken($phone:String! $token:String!){
        checkPhoneAuthToken(phone:$phone, token:$token)
    }
`
export const RESET_PASSWORD = gql`
  mutation resetPassword($phone:String! $email:String! $password:String!){
    resetPassword(phone:$phone email:$email password:$password)
  }
`

const schema = yup.object({
  email: yup
    .string()
    .email("이메일의 형식이 올바르지 않습니다.")
    .required("이메일은 필수 입력사항 입니다."),
  password: yup
    .string()
    .matches(
      /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리여야 합니다"
    ),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다."),
  phone: yup.string().required("핸드폰 번호는 필수 입력사항 입니다."),
  phoneNumberCheck: yup.string().required("핸드폰 번호 인증은 필수입니다."),
});

export default function FindPassword() {
  const [sendPhoneAuthToken] = useMutation(SEND_PHONE_AUTH);
  const [checkPhoneAuthToken] = useMutation(CHECK_PHONE_AUTH);
  const [resetPassword] = useMutation(RESET_PASSWORD)
  const [phoneAuth, setPhoneAuth] = useState(false);
  const router = useRouter()
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [button,setButton] = useState(false)
  const [min,setMin] = useState("03")
  const [sec,setSec] = useState("00")
  const phone = "010" + watch("phone");
  const token = watch("phoneNumberCheck");
  

let time = 180 
useEffect(()=>{
  const timer = setInterval(()=>{
   if(button === true){
    setMin(String(Math.floor(time/60)).padStart(2,"0"))
    setSec(String(time % 60).padStart(2,"0"))
    time=time-1
  }
    if(time===0){
      setButton(false)
      clearInterval(timer)
      setMin("03")
      setSec("00")
    }
  },1000)
},[button])

  const onClickSendPhone = async () => {
    try {
      await sendPhoneAuthToken({
        variables: { phone },
      });
      Modal.success({ content: "인증번호를 전송하였습니다." });
      setButton(true)
    } catch (error) {
      Modal.error({ content: error.message });
    }
}
  const onClickCheckPhoneAuthToken = async () => { 
    try {
      await checkPhoneAuthToken({
        variables: { phone, token },
      });
      Modal.success({ content: "번호인증이 완료되었습니다." });
      setPhoneAuth(true);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  // const MoveToPasswordChange = () => {
  //   if(phoneAuth===false){
  //     alert("핸드폰 인증을 먼저해주세요")
  //     return
  //   }
  //   router.push('/')
  // }

  const ResetPassword = async(data) => {
    console.log(data)
    if (phoneAuth === false) {
      return Modal.info({ content: "휴대폰 인증을 먼저 받아주세요." });
    }
    data.phone = `010${data.phone}`;
    const { passwordCheck, phoneNumberCheck, ...rest } = data;
    try{
    const result = await resetPassword({
      variables:{...rest}
    })
    router.back()
    console.log(result)
  }catch(error){
    Modal.error({content:error.message})
  }
  }

  return (
    <S.Form onSubmit={handleSubmit(ResetPassword)}>
      <S.Login>        
        <S.Logo></S.Logo>
        <S.Contents>
          <S.Label>E-mail</S.Label>
          <S.Input
            {...register("email")}
            type="text"
            placeholder="이메일을 입력하세요."
          />
          <S.ErrorMsg></S.ErrorMsg>
          <S.InputWrapper>
          <S.Label>Phone Number</S.Label>
          <S.PhoneNumberInputWrapper>
            <S.FrontNumber>010</S.FrontNumber>
            <S.PhoneNumberInput
              {...register("phone")}
              placeholder="핸드폰 번호를 입력해주세요"
            />
            <S.CertificationButton
              onClick={onClickSendPhone}
              type="button"
            >
              {button?  "인증번호재전송": "인증받기"}
            </S.CertificationButton>
          </S.PhoneNumberInputWrapper>
          <S.ErrorMsg></S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.PhoneNumberInputWrapper>
            <S.CertificationInput
              {...register("phoneNumberCheck")}
              placeholder="인증번호를 입력해주세요"
            />
            <S.CertificationButton
              onClick={onClickCheckPhoneAuthToken}
              type="button"
            >
              인증
            </S.CertificationButton>
            <S.Label style={{marginLeft:"20px",lineHeight:"50px",fontSize:"30px"}}>{min}:{sec}</S.Label>
          </S.PhoneNumberInputWrapper>
          <S.ErrorMsg>
            {/* {props.formState.errors.phoneNumberCheck?.message} */}
          </S.ErrorMsg>
        </S.InputWrapper>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            {...register("password")}
            placeholder="비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리여야 합니다"
          />
          <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
          <S.Label>Confirm Password</S.Label>
          <S.Input
            type="password"
            {...register("passwordCheck")}
            placeholder="비밀번호를 확인해주세요"
          />
          <S.ErrorMsg>
            {formState.errors.passwordCheck?.message}
          </S.ErrorMsg>
        </S.Contents>
        <S.LoginButton>비밀번호 재설정</S.LoginButton>
      </S.Login>
      <S.IconBox>
        <S.Dog src="/images/frame_left.png"></S.Dog>
        <S.Dog src="/images/frame_right.png"></S.Dog>
      </S.IconBox>
    </S.Form>
  );
}
