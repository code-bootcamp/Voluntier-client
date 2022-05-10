import * as S from '../Signup/SignUpStyles'

interface IPropsSignUpUI {
    register:any
    handleSubmit:any 
    formState: any
}

export default function SignUpUI(props:IPropsSignUpUI){

    return(
        <S.Wrapper>
            <S.SignUpWrapper>
                <S.Logo src="/logo.png"/>
                <S.InputWrapper>
                    <S.Name>Name</S.Name>
                    <S.NameInput placeholder="이름을 입력하세요."></S.NameInput>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Email>E-mail</S.Email>
                    <S.EmailInput placeholder="이메일을 입력해주세요."/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Password>Password</S.Password>
                    <S.PasswordInput placeholder="비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야 합니다"/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PasswordCheck>PasswordCheck</S.PasswordCheck>
                    <S.PasswordCheckInput placeholder="비밀번호를 확인해주세요."/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PhoneNumber>PhoneNumber</S.PhoneNumber>
                    <S.PhoneNumberInputWrapper>
                        <S.FrontNumber>010</S.FrontNumber>
                        <S.PhoneNumberInput placeholder="핸드폰 번호를 입력해주세요."/>
                        <S.CertificationButton>인증받기</S.CertificationButton>
                    </S.PhoneNumberInputWrapper>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PhoneNumberInputWrapper>
                        <S.CertificationInput placeholder="인증번호를 입력해주세요"/>
                        <S.CertificationCheckButton>인증</S.CertificationCheckButton>
                    </S.PhoneNumberInputWrapper>
                </S.InputWrapper>
                <S.SignUpSubmit>Join</S.SignUpSubmit>
            </S.SignUpWrapper>
        </S.Wrapper>
    )
}