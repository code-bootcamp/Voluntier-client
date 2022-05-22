import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

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

export const SocialLoginWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17px;

  @media ${breakPoints.mobile} {
    margin-bottom: 50px;
  }
`;

export const SocialLoginLabel = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 14px;

  @media ${breakPoints.mobile} {
    font-size: 13px;
    color: #000000;
    margin-bottom: 10px;
  }
`;

export const SocialLoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0px 80px 21px 80px;

  @media ${breakPoints.mobile} {
    width: 50%;
    padding: 0px 0px 0px 0px;
  }
`;

export const SocialA = styled.a`
  width: 70px;
  height: 70px;

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export const SocialButton = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 21px;

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
    margin-bottom: 0px;
  }
`;

export const Question = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #ffffff;
  }

  @media ${breakPoints.mobile} {
    font-size: 16px;
    color: #000000;
    width: 100%;
    height: 60px;
    border: 1px solid #0085cb;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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
