import styled from "@emotion/styled";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/Media";

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
  padding: 0 5% 5% 5%;

  @media ${breakPoints.tablet} {
    padding: 0 0 0 0;
  }

  @media ${breakPoints.mobile} {
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const InnerDog = styled.div`
  background-image: url("../../../../images/jellyshop/Group 28.png");
  width: 300px;
  height: 140px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  margin-bottom: -40px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 200px;
    height: 90px;
    padding-bottom: 30px;
  }

  @media ${breakPoints.mobile} {
    width: 180px;
    height: 70px;
    margin-bottom: -110px;
  }
`;

export const DogMention = styled.div`
  font-family: "GmarketSans";
  margin-top: 80px;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;

  @media ${breakPoints.tablet} {
    font-size: 15px;
    line-height: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 43px;
  }
`;

export const InnerWrapperHead = styled.div`
  width: 70%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #ffcf00;
  border-radius: 20px;
  padding: 6% 5% 4% 5%;

  @media ${breakPoints.tablet} {
    margin-top: 20px;
    width: 90%;
    height: 300px;
    margin-bottom: 30px;
  }

  @media ${breakPoints.mobile} {
    margin-top: 90px;
    border: 2px solid #ffcf00;
    display: flex;
    flex-direction: column;
    width: 357px;
    height: 440px;
    margin-left: 0%;
  }
`;

export const ProductImg = styled.img`
  height: 300px;

  @media ${breakPoints.tablet} {
    height: 160px;
  }

  @media ${breakPoints.mobile} {
    height: 150px;
    margin-top: 25px;
  }
`;

export const TitlePriceWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 6%;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    margin-left: 0;
    padding-left: 15px;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const DogFootImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    width: 16px;
    height: 16px;
  }

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
  font-family: "GmarketSans";

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 8px;
  font-family: "GmarketSans";

  @media ${breakPoints.tablet} {
    font-size: 12px;
    margin-right: 5px;
  }

  @media ${breakPoints.mobile} {
    font-size: 11px;
    margin-right: 5px;
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

export const Detail = styled.span`
  margin-left: 10px;

  @media ${breakPoints.tablet} {
    font-size: 7px;
  }

  @media ${breakPoints.mobile} {
  }
`;

export const RocketDetail = styled.span`
  margin-left: 10px;
  font-style: oblique;
  color: gold;

  @media ${breakPoints.tablet} {
    font-size: 7px;
  }

  @media ${breakPoints.mobile} {
  }
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
  width: 180px;
  height: 50px;
  background: #ff6a9e;
  border: none;
  border-radius: 15px;
  font-family: "GmarketSans";
  font-size: 21px;
  color: white;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 120px;
    height: 40px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 130px;
    height: 35px;
    font-size: 13px;
  }
`;

export const ButtonImage = styled.img`
  width: 45px;
  height: 30px;
  margin-right: 15px;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 25px;
    margin-right: 8px;
  }

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 25px;
    margin-right: 8px;
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
    width: 120px;
    height: 40px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 130px;
    height: 35px;
    font-size: 13px;
  }
`;

export const Price = styled.div`
  color: #0085cb;
  font-size: 18px;
  font-weight: 1000;
  font-family: "GmarketSans";
  margin-left: 3%;

  @media ${breakPoints.tablet} {
    font-size: 11px;
  }

  @media ${breakPoints.mobile} {
    margin-left: 3%;
    font-size: 11px;
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

  @media ${breakPoints.tablet} {
    padding: 30px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 20px;
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

export const InfoLabel = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "GmarketSans";

  @media ${breakPoints.tablet} {
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;
