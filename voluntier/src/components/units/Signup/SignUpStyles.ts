import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;

  @media ${breakPoints.tablet} {
    padding: 15px;
  }

  @media ${breakPoints.mobile} {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const SignUpWrapper = styled.div`
  width: 620px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0085cb;
  border-radius: 50px;
  z-index: 2;
  padding: 40px 77px 40px 77px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    background-color: transparent;
    border-radius: 0;
    width: 100%;
    padding: 16px;
  }
`;

export const Logo = styled.div`
  width: 273px;
  height: 80px;
  background-image: url("../../../../../images/main/main_logo.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 23px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 38px;
    background-image: url("../../../../../images/join.png");
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
  font-size: 18px;
  ::placeholder {
    font-size: 16px;
    color: #ffffff;
  }

  @media ${breakPoints.mobile} {
    border-bottom: 1px solid #c4c4c4;
    color: #000000;
    ::placeholder {
      color: #c4c4c4;
      font-size: 12px;
    }
  }
`;

export const PhoneNumberInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
    color: #000000;
    ::placeholder {
      color: #c4c4c4;
      font-size: 12px;
    }
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
    color: #000000;
    ::placeholder {
      font-size: 12px;
      color: #c4c4c4;
    }
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

export const SignUpSubmitButton = styled.button`
  width: 467px;
  height: 51px;
  background: #ffffff;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 60px;
    margin-top: 0;
    border-radius: 10px;
    background-color: #0085cb;
    color: #ffffff;
  }
`;

export const ErrorMsg = styled.div`
  width: 100%;
  height: 30px;
  font-size: 12px;
  color: red;
`;

export const Frame = styled.div`
  width: 990px;
  display: flex;
  justify-content: space-between;
  margin-top: -200px;
  padding-right: 90px;
  z-index: 1;

  @media ${breakPoints.tablet} {
    width: 765px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -150px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Cat = styled.img`
  width: 247px;
  height: 172px;

  @media ${breakPoints.tablet} {
    width: 143px;
    height: 100px;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
