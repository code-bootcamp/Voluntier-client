import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding-top: 100px;

`
export const Left = styled.img`
    width: 28%;
    height: 80%;
    margin-top: 50%;


`
export const Login = styled.div`
    width: 44%;
    height: 80%;
    background-color: #00B05C;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
`
export const Logo = styled.img`
    width: 80%;
`
export const Contents = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 25px;

`
export const Email = styled.div`
    color : #FFFFFF;
    font-size: 14px;
    font-weight: 700;

`
export const EmailDetail = styled.input`
    border: none;
    background: none;
    border-bottom: 2px solid #FFFFFF;
    ::placeholder{
        color: #FFFFFF;
    }
    outline: none;
    letter-spacing: 0.5px;
`
export const Password = styled.div`
    color : #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
`
export const PasswordDetail = styled.input`
    border: none;
    background: none;
    border-bottom: 2px solid #FFFFFF;
    ::placeholder{
        color: #FFFFFF;
    }
    outline: none;
    letter-spacing: 0.5px;
`
export const LoginButton = styled.button`
    width: 100%;
    background-color: #FFFFFF;
    border: none;
    border-radius: 30px;
    margin-top: 20px;
    font-weight: 600;
    padding: 10px;
`
export const Social = styled.div`
  width: 100%;
  border-bottom: 1px solid #FFFFFF;
  padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const SocialTitle = styled.div`

    font-weight: 400;
    font-size: 10px;
    line-height: 25px;
    color: #FFFFFF;
    
`
export const SocialContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0% 10%;
    

`
export const Kakao = styled.img`
    width: 25%;
    height: 80%;
`
export const Naver = styled.img`
    width: 25%;
    height: 80%;
`
export const FaceBook = styled.img`
    width: 25%;
    height: 80%;
`
export const Right = styled.img`
     width: 28%;
    height: 80%;
    margin-top: 53%;
`
export const Question = styled.div`

    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    color: #FFFFFF;
    margin-top: 10px;
    :hover{
        border-bottom: 1px solid #FFFFFF;
    }
`