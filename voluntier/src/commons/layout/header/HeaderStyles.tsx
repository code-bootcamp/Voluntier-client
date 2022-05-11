import styled from "@emotion/styled";
import { breakPoints } from "../../styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* position: relative;
  z-index: 1; */
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  margin-top: 70px;
  @media ${breakPoints.tablet} {
    margin-top: 10px;
  }
    @media ${breakPoints.mobile} {
      margin-top: 15px;
      padding: 0px 50px;
        
  }
    @media (max-width: 370px) {
      margin-top: 10px;
      padding: 0px 30px;
  }
  
`;

export const Logo = styled.img`
  width: 300px;
  @media ${breakPoints.mobile} {
    width: 150px;
        
  }
  @media (max-width: 370px) {
    width: 120px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 46%;
  height: 51px;
  background-color: #ffffff;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  @media ${breakPoints.pc} {
    height: 40px;
    font-size: 14px;
  }
  @media ${breakPoints.tablet} {
    height: 30px;
    font-size: 12px;
  }
    @media ${breakPoints.mobile} {
      width: auto;
      height: 25px;
      transform: translate(-20%, -20%) scale(0.8); 
      display: inline-block;
  }
  @media (max-width: 370px) {
    width: 80%;
    height: 18px;
    transform: translate(-15%, -20%) scale(0.8); 
    display: inline-block;
    font-size: 1px;
    line-height: 0.3px;
      }
`;
