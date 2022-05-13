import * as S from './LoginStyles'

interface IPropsLoginUI{
    register:any
    handleSubmit:any 
    formState: any
    onClickLogin : (data:any) => void
}

export default function LoginUI(props:IPropsLoginUI){

    return(
        <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.Login>
                <S.Logo src='/images/로고.png'></S.Logo>
                <S.Contents>
                    <S.Email>E-mail</S.Email>
                    <S.EmailDetail {...props.register("email")} type='text' placeholder='이메일을 입력하세요.'/>
                    <S.ErrorMsg>{props.formState.errors.email?.message}</S.ErrorMsg>
                    <S.Password>Password</S.Password>
                    <S.PasswordDetail {...props.register("password")} type='password'placeholder='비밀번호를 입력하세요.'/>
                    <S.ErrorMsg>{props.formState.errors.password?.message}</S.ErrorMsg>
                </S.Contents>
                <S.LoginButton>Login</S.LoginButton>
                <S.Social>
                    <S.SocialTitle>소셜 아이디로 간편 로그인</S.SocialTitle>
                    <S.SocialContents>
                        <S.KakaoA href='https://backendapi.voluntier.site/login/kakao'>
                        <S.Kakao src='/images/btn-kakao.png'/>
                        </S.KakaoA>
                        <S.NaverA href='http://backendapi.voluntier.site/login/naver'>
                        <S.Naver src='/images/btn-naver.png'/>
                        </S.NaverA>
                        <S.GoogleA href='https://backendapi.voluntier.site/login/google'>
                        <S.Google src='/google.png'/>
                        </S.GoogleA>
                    </S.SocialContents>
                </S.Social>
                <S.Question> 계정이 없으신가요? 회원가입하기</S.Question>
            </S.Login>
            <S.IconBox>
                <S.Left src='/images/Frame.png'></S.Left>
                <S.Right src='/images/Frame (1).png'></S.Right>
            </S.IconBox>
        </S.Form>
    )
    
}