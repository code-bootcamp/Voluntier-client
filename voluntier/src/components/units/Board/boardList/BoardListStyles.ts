import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  padding: 30px 24px;

  @media ${breakPoints.tablet} {
    padding: 10px;
  }

  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;

export const Title = styled.div`
  width: 477px;
  font-family: "GmarketSans";
  font-size: 23px;
  margin-bottom: 20px;
  color: #0085cb;
  border-bottom: 2px solid #0085cb;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 18px;
    border-bottom: none;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 13px;
    border-bottom: none;
  }
`;

export const SearchTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: "GmarketSans";
  font-size: 20px;
  font-weight: 400;

  @media ${breakPoints.tablet} {
    margin-bottom: 10px;
    font-size: 16px;
  }

  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 12px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    margin-top: -10px;
  }

  @media ${breakPoints.mobile} {
    height: 180px;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    align-items: center;
    margin-bottom: 15px;
  }
`;

export const Jellybean = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Dropdown = styled.select`
  width: 250px;
  height: 30px;
  padding-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  color: #b5b5b5;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;

  appearance: none;
  cursor: pointer;
  select::-ms-expand {
    display: none;
  }

  :focus {
    border: 1px solid skyblue;
    outline: none;
    color: #2c3131;
  }
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    height: 25px;
    width: 45%;
    font-size: 0.5em;
  }
`;

export const Option = styled.option`
`;

export const SearchButton = styled.div`
  width: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 16px;
    justify-content: flex-start;
    margin-right: 2px;
  }
`;

export const SearchButtonImage = styled.img`
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Searchbar = styled.input`
  width: 510px;
  height: 30px;
  margin-right: 50px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #b5b5b5;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    font-weight: 700;
    color: #b5b5b5;
  }

  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 50%;
    margin: 0px;
    ::placeholder {
      font-size: 10px;
    }
  }
`;

export const TableWrapper = styled.div`
  margin-bottom: 0px;
  border: 1px solid #b5b5b5;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
`;

export const TitleRow = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e3e3e3;
  text-align: flex-start;
  line-height: 38px;
  cursor: pointer;
  :hover {
    color: #0085cb;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Row = styled.div`
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  margin: 5px 0px;
  line-height: 38px;
  cursor: pointer;
  :hover {
    color: #0085cb;
  }
  @media ${breakPoints.mobile} {
    margin: 0px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e3e3e3;
    height: 80px;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 15%;
  height: 40px;
  font-size: 17px;
  color: black;
  overflow: hidden;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const ColumnHeaderDate = styled.div`
  width: 15%;
  height: 40px;
  font-size: 17px;
  color: black;
  overflow: hidden;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    display: none;
    font-size: 12px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  font-size: 18px;
  padding-left: 3%;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TitleImage = styled.img`
  width: 20%;
  height: 80px;
  margin-right: 3%;
  

  @media ${breakPoints.tablet} {
    width: 30%;
    height: 70px;
  }

  @media ${breakPoints.mobile} {
    padding-top: 15px;
    width: 80px;
    height: 63px;
    margin-right: 5%;
  }
`;

export const TitleContents = styled.div`
  width: 88%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 50%;
    justify-content: center;
  }
`;

export const CenterTitle = styled.div`
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
    height: 30px;
  }
`;

export const CenterAddress = styled.div`
  font-size: 13px;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    font-size: 11px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    height: 30px;
  }
`;
