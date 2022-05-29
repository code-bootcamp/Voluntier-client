import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoginUI from "./LoginPresenter";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useRouter } from "next/router";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import { IFormValuesLogin } from "./LoginTypes";
import { LOGIN } from "./LoginQueries";

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
});


export default function Login() {
  const { moveToPage } = useMoveToPage();
  const [login] = useMutation(LOGIN);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: IFormValuesLogin) => {
    const result = await login({
      variables: { ...data },
    });
    const accessToken = result.data.login;
    setAccessToken(accessToken);
    router.push("/boards");
  };


  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
      moveToPage={moveToPage}
    />
  );
}
