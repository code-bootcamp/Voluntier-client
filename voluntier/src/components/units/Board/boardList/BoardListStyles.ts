import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  padding: 50px 24px;

  @media ${breakPoints.mobile} {
    padding: 10px 24px;
  }
`;

export const DogBiscuit = styled.div`
  background-image: url("../../../../../images/UnionBiscuit.png");
  font-family: "Sniglet";
  background-size: cover;
  width: 230px;
  height: 82px;
  margin-bottom: 30px;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 169px;
    height: 60px;
    margin-bottom: 20px;
    background-size: contain;
  }

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 43px;
    margin-bottom: 30px;
    font-size: 18px;
    background-size: contain;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid red;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Dropdown = styled.select`
  width: 20%;
  border-radius: 0px;
`;

export const SearchButton = styled.div`
  /* width: 6%; */
  width: 70px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonImage = styled.img`
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const TableWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Row = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e3e3e3;
  text-align: center;
  line-height: 38px;

  /* :hover {
    color: #0085cb;
  } */
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  font-size: 18px;
  color: black;
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  font-size: 18px;

  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;
