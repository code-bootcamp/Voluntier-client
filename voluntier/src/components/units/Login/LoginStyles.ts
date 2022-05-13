import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";


export const Form = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 15%;
    @media ${breakPoints.tablet} {
    padding: 5%;
  }
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 100%;
        padding: 0%;
        
  }

`
export const Login = styled.div`
    width: 44%;
    height: auto;
    background-color: #0085CB;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 100vh;
        border-radius: 50px;
        padding: 10%;
  }

`
export const Logo = styled.img`
    width: 80%;
`
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    flex-direction: column;
    line-height: 25px;
    @media ${breakPoints.mobile} {
        margin-top: 10%;
        height: 25vh;
        justify-content: space-around;
  }

`
export const Email = styled.div`
    color : #FFFFFF;
    font-size: 16px;
    font-weight: 700;
`
export const EmailDetail = styled.input`
    border: none;
    background: none;
    border-bottom: 2px solid #FFFFFF;
    ::placeholder{
        color: #FFFFFF;
        font-size: 14px;
    }
    outline: none;
    letter-spacing: 0.5px;
`
export const Password = styled.div`
    color : #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    margin-top: 15px;
    
`
export const PasswordDetail = styled.input`
    border: none;
    background: none;
    border-bottom: 2px solid #FFFFFF;
    ::placeholder{
        color: #FFFFFF;
        font-size: 14px;
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
    cursor: pointer;
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 8%;
        margin-top: 20%;
  }
`
export const Social = styled.div`
    width: 100%;
    border-bottom: 1px solid #FFFFFF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${breakPoints.mobile} {
        height: 25vh;
        justify-content: space-around;
  }
`
export const SocialTitle = styled.div`
    font-weight: 400;
    font-size: 10px;
    text-align: center;
    line-height: 25px;
    color: #FFFFFF;
    margin-top: 10%;
    @media ${breakPoints.mobile} {
        font-size: 13px;
  }
    
`
export const SocialContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    

`
export const KakaoA = styled.a`
width: 20%;
    height: 80%;
    @media ${breakPoints.mobile} {   
        width: 20%;
        height: 100%;  
  }
`
export const Kakao = styled.img`
    width: 100%;
    height: 100%;
`
export const NaverA = styled.a`
    width: 20%;
    height: 80%;
    @media ${breakPoints.mobile} {   
        width: 20%;  
        height: 100%; 
  }
`

export const Naver = styled.img`
    width: 100%;
    height: 100%;
`
export const GoogleA = styled.a`
    width: 23%;
    height: 80%;
    @media ${breakPoints.mobile} {   
        width: 20%;  
        height: 100%; 
  }
`

export const Google = styled.img`
    width: 100%;
    height: 100%;
`
export const IconBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media ${breakPoints.tablet} {
    padding: 5% 20%;
  }
    @media ${breakPoints.mobile} {   
        width: 0%;
        height: 0%;   
  }
`
export const Left = styled.img`
    width: 25%;
    @media ${breakPoints.mobile} {
        width: 30%;
        
        
  }

`
export const Right = styled.img`
    width: 25%;
    @media ${breakPoints.mobile} {
        width: 35%;
        
       
  }
`
export const Question = styled.div`

    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    color: #FFFFFF;
    margin-top: 10px;
    text-align: center;
    :hover{
        border-bottom: 1px solid #FFFFFF;
    }
    @media ${breakPoints.mobile} {
        font-size: 11px;
  }
`
export const ErrorMsg = styled.div`
    width: 100%;
    font-size: 5px;
    color: red;
    margin-bottom: 4%;
`