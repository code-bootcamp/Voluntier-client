import styled from "@emotion/styled"
import { breakPoints } from '../../../commons/styles/Media';


export const Form =styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${breakPoints.mobile} {
        width: 100%;
    }
`
export const SignUpWrapper = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #00B05C;
    border: 1px solid #00B05C;
    border-radius: 50px;
    @media ${breakPoints.tablet} {
        width: 80%;
    }
    @media ${breakPoints.mobile} {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`
export const Logo = styled.img`
    width: 50%;
    height: 30%;
    margin-top: 5%;
    margin-bottom: 5%;
    @media ${breakPoints.mobile} {
        width: 70%;
        height: 13%;
        border-radius: 0px;
        margin : 0% 0% 10% 0%;
    }
`
export const InputWrapper = styled.div`
    width: 80%;
    height: auto;

    @media ${breakPoints.mobile} {

    }
`
export const Name = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 15px;
    }
`
export const NameInput = styled.input`
    width: 100%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white;
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
    }
`

export const Email = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 15px;
    }
`
export const EmailInput = styled.input`
    width: 100%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white;
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
}
`
export const Password = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 15px;
    }
`
export const PasswordInput = styled.input`
    width: 100%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
}
`
export const PasswordCheck = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 15px;
    }
`
export const PasswordCheckInput = styled.input`
    width: 100%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
}
`
export const PhoneNumber = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 15px;
    }
`
export const PhoneNumberInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
export const PhoneNumberInput = styled.input`
    width: 50%;
    margin-left: 5%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
}
`
export const FrontNumber = styled.div`
    width: 20%;
    border: none;
    border-bottom: 2px solid white;
    text-align: center;
    font-size: 18px;
    color : white;
    @media ${breakPoints.mobile} {
        font-size: 10px;
    }
`
export const CertificationButton = styled.button`
    width: 20%;
    margin-left: 3%;
    background: #231815;
    border: none;
    border-radius: 30px;
    font-size: 1.2rem;
    color : white;
    cursor: pointer;
    @media ${breakPoints.mobile} {
        font-size: 10px;
    }
`
export const CertificationInput = styled.input`
    width: 40%;
    border: none;
    background-color: #00B05C;
    border-bottom: 2px solid #FFFFFF;
    outline: none;
    font-size: 18px;
    color : white;
    ::placeholder{
        font-size: 13px;
        color : white
    }
    @media ${breakPoints.mobile} {
        font-size: 10px;
    ::placeholder{
        font-size: 10px;
    }
}
`
export const CertificationCheckButton = styled.button`
    width: 15%;
    margin-left: 3%;
    background: #231815;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    color : white;
    cursor: pointer;
    @media ${breakPoints.mobile} {
        
}
`
export const SignUpSubmit = styled.button`
    width: 80%;
    margin-bottom: 5%;
    background: #FFFFFF;
    border-radius: 30px;
    border: none;
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 18px;
    color: #000000;
    cursor: pointer;
`
export const ErrorMsg = styled.div`
    width: 100%;
    font-size: 5px;
    color: red;
    margin-bottom: 4%;
`