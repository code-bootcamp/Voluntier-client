import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperLeft = styled.div`
  width: 48%;
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

export const WrapperRight = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    padding-top: 25px;
  }

  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const Input = styled.input`
  height: 50px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid #b5b5b5;

  @media ${breakPoints.tablet} {
    height: 40px;
    font-size: 15px;
    margin-bottom: 15px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
    margin-bottom: 15px;
  }
`;

export const Error = styled.div`
  font-size: 5px;
  color: red;
  @media ${breakPoints.tablet} {
    font-size: 5px;
    color: red;
  }

  @media ${breakPoints.mobile} {
    font-size: 5px;
    color: red;
  }
`;

export const buttonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditButton = styled.button`
  width: 100px;
  height: 51px;
  color: #ffffff;
  background-color: #000000;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 90px;
    height: 40px;
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 30px;
    font-size: 13px;
  }
`;