import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media"; 

export const Form = styled.form`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;

  @media ${breakPoints.tablet} {
    padding: 5%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    padding: 0%;
  }
`;

export const Login = styled.div`
  width: 620px;
  height: auto;
  background-color: #0085cb;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 77px 50px 77px;
  margin-bottom: 214px;
  z-index: 2;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 16px;
    background-color: transparent;
  }
`;

export const Logo = styled.div`
  width: 273px;
  height: 80px;
  margin-bottom: 23px;
  background-image: url("../../../../../images/main/main_logo.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media ${breakPoints.mobile} {
    width: 50px;
    background-image: url("../../../../../images/login.png");
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 25px;

  @media ${breakPoints.mobile} {
  }
`;

export const Label = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  border-bottom: 2px solid #ffffff;
  outline: none;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  color: #ffffff;
  font-size: 16px;
  ::placeholder {
    color: #ffffff;
    font-size: 16px;
  }

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    height: 50px;
    border: 1px solid #c4c4c4;
    padding-left: 12px;
    ::placeholder {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 51px;
  background-color: #ffffff;
  border: none;
  border-radius: 30px;
  margin-top: 26px;
  margin-bottom: 21px;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 60px;
    margin-top: 0;
    border-radius: 10px;
    background-color: #0085cb;
    color: #ffffff;
    margin-bottom: 33px;
  }
`;


export const ErrorMsg = styled.div`
  width: 100%;
  font-size: 5px;
  color: red;
  margin-bottom: 4%;
`;

export const IconBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -300px;
  margin-bottom: 32px;
  z-index: 1;

  @media ${breakPoints.tablet} {
    margin-top: -200px;
    margin-bottom: 0px;
  }

  @media ${breakPoints.mobile} {
    padding: 0px 30px 0px 30px;
    margin-top: -140px;
  }
`;

export const Dog = styled.img`
  width: 255px;

  @media ${breakPoints.tablet} {
    width: 102px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const PhoneNumberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PhoneNumberInput = styled.input`
  width: 50%;
  margin-left: 5%;
  border: none;
  background: transparent;
  border-bottom: 2px solid #ffffff;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  ::placeholder {
    font-size: 16px;
    color: #ffffff;
  }

  @media ${breakPoints.mobile} {
    border-bottom: 1px solid #c4c4c4;
    ::placeholder {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
`;
export const FrontNumber = styled.div`
  width: 20%;
  border: none;
  border-bottom: 2px solid #ffffff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #ffffff;

  @media ${breakPoints.mobile} {
    border-bottom: 1px solid #c4c4c4;
    color: #c4c4c4;
    font-size: 12px;
  }
`;
export const CertificationButton = styled.button`
  width: 99px;
  height: 51px;
  margin-left: 11px;
  background: #231815;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    background-color: #c4c4c4;
    color: #ffffff;
    font-size: 12px;
  }
`;

export const CertificationInput = styled.input`
  width: 40%;
  border: none;
  background: transparent;
  border-bottom: 2px solid #ffffff;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  ::placeholder {
    font-size: 16px;
    color: #ffffff;
  }

  @media ${breakPoints.mobile} {
    border-bottom: 1px solid #c4c4c4;
    ::placeholder {
      font-size: 12px;
      color: #c4c4c4;
    }
  }
`;