import * as S from "./LoginStyles";
import { IPropsLoginUI } from "./LoginTypes";



export default function LoginUI(props: IPropsLoginUI) {
  return (
    <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Login>
        <S.Logo></S.Logo>
        <S.Contents>
          <S.Label>E-mail</S.Label>
          <S.Input
            {...props.register("email")}
            type="text"
            placeholder="이메일을 입력하세요."
          />
          <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
          <S.Label>Password</S.Label>
          <S.Input
            {...props.register("password")}
            type="password"
            placeholder="비밀번호를 입력하세요."
          />
          <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
        </S.Contents>
        <S.LoginButton>Login</S.LoginButton>
        <S.SocialLoginWrapper>
          <S.SocialLoginLabel>소셜 아이디로 간편 로그인</S.SocialLoginLabel>
          <S.SocialLoginButtonWrapper>
            <S.SocialA href="https://backendapi.voluntier.site/login/kakao">
              <S.SocialButton src="/images/btn-kakao.png" />
            </S.SocialA>
            <S.SocialA href="http://backendapi.voluntier.site/login/naver">
              <S.SocialButton src="/images/btn-naver.png" />
            </S.SocialA>
            <S.SocialA href="https://backendapi.voluntier.site/login/google">
              <S.SocialButton src="/google.png" />
            </S.SocialA>
          </S.SocialLoginButtonWrapper>
        </S.SocialLoginWrapper>
        <S.Question onClick={props.moveToPage("/signup")}>
          계정이 없으신가요? 회원가입하기
        </S.Question>
        <S.Question onClick={props.moveToPage("/login/findpassword")}>
          비밀번호를 잊으셨나요? 비밀번호재설정
        </S.Question>
      </S.Login>
      <S.IconBox>
        <S.Dog src="/images/frame_left.png"></S.Dog>
        <S.Dog src="/images/frame_right.png"></S.Dog>
      </S.IconBox>
    </S.Form>
  );
}
