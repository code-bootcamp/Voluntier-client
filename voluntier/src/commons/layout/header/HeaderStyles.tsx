import styled from "@emotion/styled";
import { breakPoints } from "../../styles/Media";

export const Wrapper = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  /* margin-top: 70px; */
  z-index: 9999;

  @media ${breakPoints.tablet} {
    margin-top: 25px;
  }

  @media ${breakPoints.mobile} {
    margin-top: 15px;
    padding: 0px 10px;
  }
`;

export const Logo = styled.div`
  width: 273px;
  height: 80px;
  background-image: url("../../../../images/main/main_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 136.5px;
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    width: 41px;
    height: 30px;
    background-image: url("../../../../images/main/logo_mobile.png");
  }
`;

export const ButtonWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 25%;
  }

  @media ${breakPoints.mobile} {
    width: 25%;
  }
`;

export const Button = styled.button`
  width: 43%;
  height: 51px;
  background-color: #ffffff;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    height: 20px;
    font-size: 10px;
  }

  @media ${breakPoints.mobile} {
    height: 20px;
    background-color: transparent;
    color: #ffffff;
    font-size: 9px;
  }
`;
