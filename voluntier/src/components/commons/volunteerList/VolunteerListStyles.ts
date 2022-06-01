import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  height: 203px;
`;

export const Title = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Column = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 8px;
  }

  @media ${breakPoints.mobile} {
    font-size: 6px;
  }
`;

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;

  @media ${breakPoints.tablet} {
    width: 15px;
    height: 15px;
  }

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;

export const CompleteButton = styled.button`
  width: 78px;
  height: 31px;
  color: #ffffff;
  font-size: 13px;
  background: #000000;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 10%;

  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
