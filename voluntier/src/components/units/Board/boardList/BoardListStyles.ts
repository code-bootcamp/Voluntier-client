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
  /* color: #ff602a; */
  /* color: #00b05c; */
`;

// export const DogBiscuit = styled.div`
//   background-image: url("../../../../../images/UnionBiscuit.png");
//   font-family: "Sniglet";
//   background-size: cover;
//   width: 230px;
//   height: 82px;
//   margin-bottom: 30px;
//   font-size: 30px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   @media ${breakPoints.tablet} {
//     width: 169px;
//     height: 60px;
//     margin-bottom: 20px;
//     background-size: contain;
//   }

//   @media ${breakPoints.mobile} {
//     width: 120px;
//     height: 43px;
//     margin-bottom: 30px;
//     font-size: 18px;
//     background-size: contain;
//   }
// `;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 30px;
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
`;

export const SearchButton = styled.div`
  /* width: 6%; */
  width: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export const Row = styled.div`
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
