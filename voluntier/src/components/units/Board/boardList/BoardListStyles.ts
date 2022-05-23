import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  padding: 30px 24px;

  @media ${breakPoints.mobile} {
    padding: 10px 24px;
  }
`;

export const SearchTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: "GmarketSans";
  font-size: 30px;
  font-weight: 400;
  color: #0085cb;
  @media ${breakPoints.tablet} {
    font-size: 22px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }

`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    height: 180px;
  }
`;

export const SearchWrapper = styled.div`
  width: 67%;
  display: flex;
  margin-bottom: 20px;
`;

export const Dropdown = styled.select`
  width: 20%;
  border-radius: 10px;
  margin-right: 10px;
  padding: 5px;
  font-size: 14px;
    @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.5em;
    padding: 2px;
    margin-right: 3px;

  }
`;

export const SearchButton = styled.div`

  width: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    justify-content: flex-start;
  }
`;

export const SearchButtonImage = styled.img`
  width: 50%;

  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const TableWrapper = styled.div`
  margin-bottom: 0px;
`;

export const TitleRow = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e3e3e3;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
  :hover {
    color: #0085cb;
  }
`;

export const Row = styled.div`
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  /* text-align: center; */
  line-height: 38px;
  cursor: pointer;
  :hover {
    color: #0085cb;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 170px;
  font-size: 18px;
  color: black;
  overflow: hidden;
  text-align: center;
  @media ${breakPoints.tablet} {
    font-size: 12px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 80%;
  font-size: 18px;

  
  @media ${breakPoints.tablet} {
    font-size: 13px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;
export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
export const TitleImage = styled.img`
    width: 10%;
    height: 80px;
    margin-right: 8%;
    

`
export const TitleContents = styled.div`
    width: 88%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${breakPoints.tablet} {
   
  }
  @media ${breakPoints.mobile} {

  }

`

export const CenterTitle = styled.div`

font-size: 22px;
font-weight: bold;
overflow: hidden;
color: gray;

@media ${breakPoints.tablet} {
  font-size: 18px;
    height: 40px;
  }
  @media ${breakPoints.mobile} {
    font-size: 15px;
    height: 30px;
  }
`
export const CenterAddress = styled.div`
    font-size: 17px;
    overflow: hidden;
    @media ${breakPoints.tablet} {
  font-size: 11px;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`