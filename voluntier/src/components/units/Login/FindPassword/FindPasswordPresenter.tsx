import * as S from './FindPasswordStyles'
import { IFindPasswordUI } from "./FindPasswordTypes";


export default function FindPasswordUI(props:IFindPasswordUI) {
 
  return (
    <S.Form onSubmit={props.handleSubmit(props.ResetPassword)}>
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
            {/* <S.Label style={{marginLeft:"20px",lineHeight:"50px",fontSize:"30px"}}>{min}:{sec}</S.Label> */}
          </S.PhoneNumberInputWrapper>
          <S.ErrorMsg>
            {props.formState.errors.phoneNumberCheck?.message}
          </S.ErrorMsg>
        </S.InputWrapper>
          <S.Label>Password</S.Label>
          <S.Input
            type="password"
            {...props.register("password")}
            placeholder="비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리여야 합니다"
          />
          <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
          <S.Label>Confirm Password</S.Label>
          <S.Input
            type="password"
            {...props.register("passwordCheck")}
            placeholder="비밀번호를 확인해주세요"
          />
          <S.ErrorMsg>
            {props.formState.errors.passwordCheck?.message}
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
