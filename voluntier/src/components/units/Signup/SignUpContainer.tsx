import SignUpUI from "./SignUpPresenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CHECK_PHONE_AUTH,
  CREATE_USER,
  SEND_PHONE_AUTH,
} from "./SignUpQueries";
import { IFormValuesSignUp } from "./SignUpTypes";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일의 형식이 올바르지 않습니다.")
    .required("이메일은 필수 입력사항 입니다."),
  name: yup.string().required("이름은 필수 입력사항입니다."),
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

export default function SignUp() {
  const [sendPhoneAuthToken] = useMutation(SEND_PHONE_AUTH);
  const [checkPhoneAuthToken] = useMutation(CHECK_PHONE_AUTH);
  const [createUser] = useMutation(CREATE_USER);
  const [phoneAuth, setPhoneAuth] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const phone = "010" + watch("phone");
  const token = watch("phoneNumberCheck");

  const onClickSendPhone = async () => {
    try {
      await sendPhoneAuthToken({
        variables: { phone },
      });
      Modal.success({ content: "인증번호를 전송하였습니다." });
    } catch (error) {
      if(error instanceof Error)  Modal.error({ content: error.message });
    }
  };
  const onClickCheckPhoneAuthToken = async () => {
    try {
      await checkPhoneAuthToken({
        variables: { phone, token },
      });
      Modal.success({ content: "번호인증이 완료되었습니다." });
      setPhoneAuth(true);
    } catch (error) {
    if(error instanceof Error)  Modal.error({ content: error.message });
    }
  };

  const onClickSignUp = async (data: IFormValuesSignUp) => {
    if (phoneAuth === false) {
      return Modal.info({ content: "휴대폰 인증을 먼저 받아주세요." });
    }
    data.phone = `010${data.phone}`;
    const { passwordCheck, phoneNumberCheck, ...rest } = data;
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            ...rest,
          },
        },
      });
      Modal.success({ content: "회원가입에 성공했습니다." });
      router.push("/login");
      console.log(result);
    } catch (error) {
      if(error instanceof Error)  Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickSendPhone={onClickSendPhone}
      onClickCheckPhoneAuthToken={onClickCheckPhoneAuthToken}
    />
  );
}
