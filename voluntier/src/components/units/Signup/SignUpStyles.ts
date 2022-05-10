import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`
export const Logo = styled.img`
    width: 50%;
    height: 30%;
    margin-top: 5%;
    margin-bottom: 5%;
`
export const InputWrapper = styled.div`
    width: 80%;
    height: auto;
    margin-bottom: 5%;
`
export const Name = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
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
        color : white
    }
`

export const Email = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
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
        color : white
    }
`
export const Password = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
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
`
export const PasswordCheck = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
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
`
export const PhoneNumber = styled.div`
    margin-bottom: 2%;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color : white;
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
`
export const FrontNumber = styled.div`
    width: 20%;
    border: none;
    border-bottom: 2px solid white;
    text-align: center;
    font-size: 24px;
    color : white;
`
export const CertificationButton = styled.button`
    width: 20%;
    margin-left: 3%;
    background: #231815;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    color : white;
    cursor: pointer;
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
`
export const CertificationCheckButton = styled.button`
    width: 15%;
    margin-left: 3%;
    background: #231815;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    color : white;
    cursor: pointer;
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