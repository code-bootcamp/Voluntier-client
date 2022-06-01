import styled from "@emotion/styled";
import { breakPoints } from "../../styles/Media";

export const Wrapper = styled.footer`
  width: 100%;
  height: 160px;
  background-color: #d6d6d6;
  padding: 32px 103px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet} {
    height: 100px;
    padding: 20px;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #656565;
`;

export const Logo = styled.img`
  width: 273px;
  height: auto;

  @media ${breakPoints.tablet} {
    width: 182px;
  }
`;

export const Label = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-right: 7px;

  @media ${breakPoints.tablet} {
    font-size: 8px;
  }
`;

export const Detail = styled.div`
  font-size: 14px;
  font-weight: 400;

  @media ${breakPoints.tablet} {
    font-size: 6px;
  }
`;
