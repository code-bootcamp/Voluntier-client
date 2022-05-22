import styled from "@emotion/styled";
import { Modal } from "antd";
import { breakPoints } from '../../../../commons/styles/Media';
import Slider from "react-slick";

export const MyModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 30px;
    width: 800px;
    @media ${breakPoints.mobile}{
      width: 370px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 104px 70px;
  @media ${breakPoints.mobile}{
    padding: 3%;
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  margin-bottom: 24px;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: column;
    border-radius: 0px;
    border: none;
  }
`;

export const InnerWrapperLeft = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border-right: 1px solid #b5b5b5; */
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 61px 52px 24px 52px;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 38px;
`;

export const MySlider = styled(Slider)`
  width: 400px;
  height: 400px;
  margin-bottom: 24px;
  align-self: center;
`
export const Wow = styled.img`
  width: 100%;
  height: 280px;
  background-color: red;
 @media ${breakPoints.mobile}{
    width: 100%;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  margin: 0px 0px 24px 52px;
  @media ${breakPoints.mobile}{
    display: flex;
    justify-content: center;
    margin: 0px;
  }
`;

export const Price = styled.div`
  color: #0085cb;
  font-size: 24px;
  font-weight: 400;
  margin-left: 3%;
  @media ${breakPoints.mobile}{
    margin-left: 3%;
  }
`;

export const InnerWrapperRight = styled.div`
  width: 62%;
  height: 100%;
  padding: 61px 52px;
  border-left: 1px solid #b5b5b5;
  @media ${breakPoints.mobile}{
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
  @media ${breakPoints.mobile}{
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BuyButton = styled.button`
  width: 140px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
