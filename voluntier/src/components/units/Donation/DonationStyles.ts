import styled from "@emotion/styled";
import Slider from "react-slick";
import { breakPoints } from "../../../commons/styles/Media";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
`;

export const Top = styled.div`
  /* width: 920px; */
  width: 100%;
  height: 259px;
  background-image: url("../../../../images/donation/후원박스.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 200px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 110px;
  }
`;

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-family: "GmarketSans";
  color: #ff6a9e;
  font-weight: bolder;
  line-height: 30px;

  @media ${breakPoints.tablet} {
    font-size: 20px;
    line-height: 25px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const TopContents = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ContentPink = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: #ff6a9e;

  @media ${breakPoints.tablet} {
    font-size: 25px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const ContentBlue = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: #0085cb;

  @media ${breakPoints.tablet} {
    font-size: 25px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const ContentDetail = styled.div`
  font-size: 20px;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 9px;
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MiddleTitle = styled.div`
  font-size: 15px;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const MySlider = styled(Slider)`
  width: 900px;
  height: auto;

  @media ${breakPoints.tablet} {
    width: 500px;
  }

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;

export const SliderContent = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Bottom = styled.div`
  width: 950px;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const Price = styled.div`
  width: 200px;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  text-align: center;
  cursor: pointer;
  :hover {
    height: 500px;
    transform: translate(0px, -100px);
    transition-duration: 1.5s;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 300px;
    padding-top: 17%;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 200px;
    padding-top: 17%;
    cursor: pointer;
  }
`;

export const Price2 = styled.div`
  width: 200px;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  text-align: center;
  cursor: pointer;
  :hover {
    height: 500px;
    transform: translate(0px, -100px);
    transition-duration: 1.5s;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 300px;
    padding-top: 17%;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 200px;
    padding-top: 17%;
    cursor: pointer;
  }
`;

export const Price3 = styled.div`
  width: 200px;
  height: 200px;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  text-align: center;
  cursor: pointer;
  :hover {
    height: 500px;
    transform: translate(0px, -100px);
    transition-duration: 1.5s;
  }

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 300px;
    padding-top: 17%;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 200px;
    padding-top: 17%;
    cursor: pointer;
  }
`;

export const PriceDetail = styled.div`
  font-family: "GmarketSans";
  font-size: 15px;
  font-weight: bolder;
  color: #0085cb;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
