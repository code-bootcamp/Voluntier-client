import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ProfileImageEditButton = styled.button`
  width: 90px;
  height: 40px;
  color: #ffffff;
  background-color: #0085cb;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 75px;
    height: 30px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 25px;
    font-size: 10px;
  }
`;
export const buttonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const EditButton = styled.button`
  width: 90px;
  height: 40px;
  color: #ffffff;
  background-color: #0085cb;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 75px;
    height: 30px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 25px;
    font-size: 10px;
  }
`;