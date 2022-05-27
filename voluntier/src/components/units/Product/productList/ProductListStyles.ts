import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;

  @media ${breakPoints.tablet} {
    padding-top: 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px;
  }
`;

// export const Banner = styled.img`
//   width: 100%;
//   height: 150px;
//   margin-bottom: 24px;

//   @media ${breakPoints.tablet} {
//     display: none;
//   }

//   @media ${breakPoints.mobile} {
//     display: none;
//   }
// `;

export const Banner = styled.div`
  /* height: 280px; */
  width: 100%;
  height: 150px;
  background-image: url("../../../../images/jellyshop/jellybanner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  margin-bottom: 24px;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  width: 130px;
  height: 80px;
  background-image: url("../../../../../images/jellyshop/title_goods.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SearchImage = styled.img`
  width: 30px;
  margin: 0.5%;
`;

export const SearchContents = styled.input`
  border: none;
  background-color: none;
  margin-left: 0.5%;
  font-size: 20px;
  ::placeholder {
    font-size: 15px;
    letter-spacing: 0.2px;
  }
  :focus {
    outline: none;
  }
`;

export const Contents = styled.div`
  padding: 0 3% 3% 3% 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  width: 230px;
  height: 230px;
  margin: 3%;

  @media ${breakPoints.mobile} {
    width: 125px;
    height: 125px;
    margin: 6%;
  }
`;

export const ProductImage = styled.img`
  height: 75%;
  width: 95%;
  cursor: pointer;
`;

export const ProductName = styled.div`
  height: 13%;
  padding: 2%;
  font-size: 18px;
  overflow: hidden;
  font-family: "GmarketSans";

  @media ${breakPoints.mobile} {
    font-size: 11px;
  }
`;

export const ProductPrice = styled.span`
  margin-top: 3px;
  height: 10%;
  padding: 2%;
  font-size: 15px;
  font-family: "GmarketSans";
  font-weight: bolder;
  font-style: oblique;
  text-decoration: line-through;

  @media ${breakPoints.mobile} {
    font-size: 11px;
  }
`;

export const ProductRealPrice = styled.span`
  margin-top: 3px;
  height: 10%;
  padding: 2%;
  font-size: 15px;
  font-family: "GmarketSans";
  font-weight: bolder;
  color: #ff6a9e;

  @media ${breakPoints.mobile} {
    font-size: 11px;
  }
`;

export const Button = styled.button`
  border: none;
  width: 80px;
  height: 30px;
  font-size: 15px;
`;
