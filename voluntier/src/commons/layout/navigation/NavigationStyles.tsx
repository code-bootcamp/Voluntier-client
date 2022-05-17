import styled from "@emotion/styled";
import { breakPoints } from "../../styles/Media";

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0px;
    background-color: #ffffff;
    padding-top: 10px;
  }
`;

export const LogoImg = styled.img`
  width: 165px;
  height: 115px;
  margin-top: 15%;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 82.5px;
    height: 57.5px;
  }
`;

export const ProfileImg = styled.img`
  margin-top: 10%;
  width: 200px;
  height: 200px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 100px;
    height: 100px;
  }

  @media ${breakPoints.mobile} {
    margin: 0% 7% 0% 30%;
    width: 50px;
    height: 50px;
  }
`;

export const LoginInfoWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LoginJoin = styled.div`
  font-size: 18px;
  color: #0085cb;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
`;

export const Mark = styled.div`
  height: 70%;
  margin: 0% 15% 0% 15%;
  border-left: 3px solid #0085cb;
  border-radius: 100px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;
`;

export const Category = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  cursor: pointer;
  :hover {
    color: #0085cb;
  }

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
`;

// 모바일
export const MobileCategoryWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
`;

export const MobileCategory = styled.div`
  width: 29px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryIcon = styled.img`
  height: 20px;
  cursor: pointer;
`;

export const CategoryText = styled.div`
  color: #d1d1d6;
  font-size: 10px;
  font-weight: 400;
  cursor: pointer;
`;
