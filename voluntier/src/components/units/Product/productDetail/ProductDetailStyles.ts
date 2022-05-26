import styled from "@emotion/styled";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/Media";
import { Tooltip } from "antd";

export const MyModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 30px;
    width: 800px;
    @media ${breakPoints.mobile} {
      width: 370px;
    }
  }
`;
export const Body = styled.div``;
export const Wrapper = styled.div`
  padding: 5%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 24px;
`;

export const InnerDog = styled.div`
  background-image: url("../../../../images/jellyshop/Group 28.png");
  width: 500px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: -60px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 400px;
    margin-bottom: -110px;
  }
  @media ${breakPoints.mobile} {
    width: 400px;
    margin-bottom: -110px;
    margin-left: 20px;
  }
  @media (max-width: 450px) {
    width: 300px;
    height: 180px;
    text-align: center;
    margin-bottom: -100px;
    margin-left: 20px;
  }
`;
export const DogMention = styled.div`
  font-family: GmarketSans;
  padding-top: 5%;
  font-size: 20px;
  line-height: 20px;
  @media ${breakPoints.tablet} {
    padding-top: 0%;
    font-size: 15px;
    line-height: 15px;
  }
  @media ${breakPoints.mobile} {
    padding-top: 0%;
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 30px;
  }
`;
export const InnerWrapperHead = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  align-items: center;
  border: 3px solid #ffcf00;
  border-radius: 20px;
  margin-left: 8%;

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 400px;
    margin-left: 0%;
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 357px;
    height: 480px;
    margin-left: 0%;
  }
`;
export const TitlePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DogFootImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;
export const TitleLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 0px 8px 10px 0px;
  font-size: 28px;
  font-family: GmarketSans;
  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;
export const Label = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 8px;
  font-family: GmarketSans;
  @media ${breakPoints.tablet} {
    font-size: 12px;
    margin-right: 5px;
  }
  @media ${breakPoints.mobile} {
    font-size: 11px;
    margin-right: 5px;
  }
`;

export const ProductImg = styled.img`
  width: 30%;
  height: 300px;
  margin: 4%;
  border-radius: 10%;

  @media ${breakPoints.tablet} {
    width: 30%;
    height: 180px;
  }
  @media ${breakPoints.mobile} {
    width: 50%;
    height: 150px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 12px 40px;
  @media ${breakPoints.tablet} {
    margin: 0px 0px 12px 20px;
  }
  @media ${breakPoints.mobile} {
    margin: 3px;
  }
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  @media ${breakPoints.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const MyTooltip = styled(Tooltip)``;

export const Detail = styled.span`
  margin-left: 10px;
`;
export const RocketDetail = styled.span`
  margin-left: 10px;
  font-style: oblique;
  color: gold;
`;
export const Rocket = styled.img`
  width: 25px;
  height: 25px;
  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;
export const PickButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background: #ff6a9e;
  border: none;
  border-radius: 15px;
  font-family: "GmarketSans";
  font-size: 21px;
  color: white;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    width: 120px;
    font-size: 13px;
  }
`;

export const Price = styled.div`
  color: #0085cb;
  font-size: 18px;
  font-weight: 1000;
  font-family: GmarketSans;
  margin-left: 3%;
  @media ${breakPoints.tablet} {
    font-size: 14px;
  }
  @media ${breakPoints.mobile} {
    margin-left: 3%;
  }
`;

export const PickWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 5% 0% 10%;
  @media ${breakPoints.mobile} {
    margin: 5% 5% 0% 0%;
  }
`;

export const InnerWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 61px 52px;
  @media ${breakPoints.mobile} {
    width: 100%;
    border: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 45px;
  border-radius: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }
`;

export const InfoDetail = styled.div`
  border: 1px solid #b5b5b5;
  margin-top: 24px;
  padding: 5%;
  font-size: 20px;
  font-weight: 400;
  min-height: 150px;
`;

export const DogImg = styled.img`
  width: 50px;
  height: 35px;
  margin-right: 15px;
  @media ${breakPoints.tablet} {
    width: 35px;
    height: 30px;
    margin-right: 5px;
  }
`;
export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 51px;
  background: #0085cb;
  border: none;
  border-radius: 15px;
  font-family: "GmarketSans";
  font-size: 21px;
  color: white;
  cursor: pointer;
  margin-left: 5%;
  @media ${breakPoints.tablet} {
    width: 140px;
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    margin-left: 2%;
    width: 140px;
  }
`;

// export const Mark = styled.div`
//   height: 100vh;
//   border-left: 1px solid #FF6A9E;
//   margin: 40px 0px 0px 44px;
// `

export const NameMark = styled.div`
  width: 90%;
  margin: 0px 0px 40px 40px;
  border-bottom: 2px solid #ff6a9e;

  @media ${breakPoints.tablet} {
    margin: 0px 0px 20px 20px;
    width: 230px;
  }
  @media ${breakPoints.mobile} {
    margin: 0px 0px 20px 20px;
    width: 180px;
  }
`;
