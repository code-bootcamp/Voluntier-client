import * as S from '../Signup/SignUpStyles'

interface IPropsSignUpUI {
    register:any
    handleSubmit:any 
    formState: any
    onClickSignUp : (data:any) => void
}

export default function SignUpUI(props:IPropsSignUpUI){

    return(
            <S.Form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <S.SignUpWrapper>
                <S.Logo src="/logo.png"/>
                <S.InputWrapper>
                    <S.Name>Name</S.Name>
                    <S.NameInput type="text" placeholder="이름을 입력하세요." {...props.register("name")}></S.NameInput>
                    <S.ErrorMsg>{props.formState.errors.name?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Email>E-mail</S.Email>
                    <S.EmailInput type="text" {...props.register("email")} placeholder="이메일을 입력해주세요."/>
                    <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Password>Password</S.Password>
                    <S.PasswordInput type="password" {...props.register("password")} placeholder="비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야 합니다"/>
                    <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PasswordCheck>PasswordCheck</S.PasswordCheck>
                    <S.PasswordCheckInput type="password" {...props.register("passwordCheck")} placeholder="비밀번호를 확인해주세요."/>
                    <S.ErrorMsg>{props.formState.errors.passwordCheck?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PhoneNumber>PhoneNumber</S.PhoneNumber>
                    <S.PhoneNumberInputWrapper>
                        <S.FrontNumber>010</S.FrontNumber>
                        <S.PhoneNumberInput {...props.register("phoneNumber")} placeholder="핸드폰 번호를 입력해주세요."/>
                        <S.CertificationButton type='button'>인증받기</S.CertificationButton>
                    </S.PhoneNumberInputWrapper>
                    <S.ErrorMsg>{props.formState.errors.phoneNumber?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PhoneNumberInputWrapper>
                        <S.CertificationInput {...props.register("phoneNumberCheck")} placeholder="인증번호를 입력해주세요"/>
                        <S.CertificationCheckButton type='button'>인증</S.CertificationCheckButton>
                    </S.PhoneNumberInputWrapper>
                    <S.ErrorMsg>{props.formState.errors.phoneNumberCheck?.message}</S.ErrorMsg>
                </S.InputWrapper>
                <S.SignUpSubmit>Join</S.SignUpSubmit>
            </S.SignUpWrapper>
            </S.Form>
    )
}