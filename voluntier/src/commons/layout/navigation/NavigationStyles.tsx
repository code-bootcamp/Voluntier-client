import styled from "@emotion/styled";
import { Button, Popover } from "antd";

export const PopoverContents = styled.div`
  background-color: #0085cb;
  width: 60px;
`;
export const Wrapper = styled.div`
  width: 335px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 376px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 10vh;
    background-color: #85b0cf;
  }
  @media (max-width: 375px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 10vh;
    background-color: #85b0cf;
  }
`;
export const LogoImg = styled.img`
  margin-top: 15%;
  width: 55%;
  height: 13%;
  cursor: pointer;
`;
export const LogoImgPhone = styled.img`
  justify-self: flex-start;
  margin: 0% 0% 0% 2%;
  width: 70px;
  height: 48px;
  cursor: pointer;
`;
export const ProfileImg = styled.img`
  margin-top: 10%;
  width: 80%;
  height: 23%;
  cursor: pointer;

  @media (max-width: 375px) {
    margin: 0% 0% 0% 28%;
    width: 50px;
    height: 50px;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 7% 0% 50%;
    width: 50px;
    height: 50px;
  }
`;
export const LoginInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 15% 0% 30% 0%;
  @media (max-width: 375px) {
    width: 50px;
    margin: 0%;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    width: 50px;
    margin: 0% 3% 0% 0%;
  }
`;
export const Login = styled.div`
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 18px;
  color: #0085cb;
  cursor: pointer;

  @media (max-width: 375px) {
    font-size: 12px;
    color: #0085cb;
    margin-right: 3px;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    font-size: 15px;
    color: #0085cb;
    margin-right: 5px;
  }
`;
export const Mark = styled.div`
  height: 70%;
  margin: 0% 15% 0% 15%;
  border: none;
  border-left: 3px solid #0085cb;
  border-radius: 100px;
  @media (max-width: 375px) {
    margin: 0% 5% 1.5% 5%;
    height: 12px;
    border: none;
    border-left: 1px solid #0085cb;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 5% 1.5% 5%;
    height: 12px;
    border: none;
    border-left: 2px solid #0085cb;
  }
`;
export const Join = styled.div`
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 18px;
  color: #0085cb;
  cursor: pointer;

  @media (max-width: 375px) {
    font-size: 12px;
    color: #0085cb;
    margin-left: 3px;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    font-size: 15px;
    color: #0085cb;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 10px;
  font-weight: 100;

  @media (max-width: 375px) {
    width: 130px;
    margin-left: 20px;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    width: 130px;
    margin-left: 20px;
    margin: 0% 0% 0% 5%;
  }
`;

export const Information = styled.div`
  margin-bottom: 6%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  :hover{
    color: #0085CB;
  }

  @media (max-width: 375px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;
    color: #ffffff;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;

  }
`;
export const Recruit = styled.div`
  margin-bottom: 6%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  cursor: pointer;
  :hover{
    color: #0085CB;
  }

  @media (max-width: 375px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;

  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;

  }
`;
export const Donation = styled.div`
  margin-bottom: 6%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  :hover{
    color: #0085CB;
  }

  @media (max-width: 375px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;
  }
`;
export const JellyShop = styled.div`
  margin-bottom: 6%;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  cursor: pointer;
  :hover{
    color: #0085CB;
  }

  @media (max-width: 375px) {
    margin: 0% 0% 0% 0%;
    font-size: 15px;
    font-weight: 300;

  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin: 0% 3% 0% 0%;
    font-size: 15px;
    font-weight: 300;

  }
`;
export const MyPopover = styled(Popover)`
  color: #0085cb;
`;
export const HambugerButton = styled(Button)`
  background-color: #85b0cf;
  border: none;
  background-image: url("../../../../images/hambugerbtn.png");
  background-size: contain;
  background-repeat: no-repeat;
  :focus {
    background-color: #85b0cf;
    background-image: url("../../../../images/hambugerbtn2.png");
    background-size: contain;
  }
`;
