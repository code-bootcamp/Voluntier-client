import * as S from "../Signup/SignUpStyles";
import { IPropsSignUpUI } from "./SignUpTypes";

export default function SignUpUI(props: IPropsSignUpUI) {
  return (
    <S.Form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.SignUpWrapper>
        <S.Logo></S.Logo>
        <S.InputWrapper>
          <S.Label>Name</S.Label>
          <S.Input
            type="text"
            placeholder="이름을 입력하세요"
            {...props.register("name")}
          ></S.Input>
          <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>E-mail</S.Label>
          <S.Input
            type="text"
            {...props.register("email")}
            placeholder="이메일을 입력해주세요"
          />
          <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            {...props.register("password")}
            placeholder="비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리여야 합니다"
          />
          <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Confirm Password</S.Label>
          <S.Input
            type="password"
            {...props.register("passwordCheck")}
            placeholder="비밀번호를 확인해주세요"
          />
          <S.ErrorMsg>
            {props.formState.errors.passwordCheck?.message}
          </S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Phone Number</S.Label>
          <S.PhoneNumberInputWrapper>
            <S.FrontNumber>010</S.FrontNumber>
            <S.PhoneNumberInput
              {...props.register("phone")}
              placeholder="핸드폰 번호를 입력해주세요"
            />
            <S.CertificationButton
              onClick={props.onClickSendPhone}
              type="button"
            >
              인증받기
            </S.CertificationButton>
          </S.PhoneNumberInputWrapper>
          <S.ErrorMsg>{props.formState.errors.phoneNumber?.message}</S.ErrorMsg>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.PhoneNumberInputWrapper>
            <S.CertificationInput
              {...props.register("phoneNumberCheck")}
              placeholder="인증번호를 입력해주세요"
            />
            <S.CertificationButton
              onClick={props.onClickCheckPhoneAuthToken}
              type="button"
            >
              인증
            </S.CertificationButton>
          </S.PhoneNumberInputWrapper>
          <S.ErrorMsg>
            {props.formState.errors.phoneNumberCheck?.message}
          </S.ErrorMsg>
        </S.InputWrapper>
        <S.SignUpSubmitButton>Join</S.SignUpSubmitButton>
      </S.SignUpWrapper>
      <S.Frame>
        <S.Cat src="/images/frame_cat_left.png"></S.Cat>
        <S.Cat src="/images/frame_cat_right.png"></S.Cat>
      </S.Frame>
    </S.Form>
  );
}
