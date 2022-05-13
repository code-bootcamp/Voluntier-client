import styled from "@emotion/styled";
import { Modal } from "antd";

export const MyModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 30px;
  }
`;

export const Wrapper = styled.div`
  padding: 104px 70px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  margin-bottom: 24px;
`;

export const InnerWrapperLeft = styled.div`
  width: 38%;
  height: 100%;
  /* border-right: 1px solid #b5b5b5; */
`;

export const TitleWrapper = styled.div`
  margin: 61px 52px 24px 52px;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
  border: 1px solid red;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Price = styled.div`
  color: #0085cb;
  font-size: 24px;
  font-weight: 400;
`;

export const InnerWrapperRight = styled.div`
  width: 62%;
  height: 100%;
  padding: 61px 52px;
  border-left: 1px solid #b5b5b5;
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
`;

export const InfoDetail = styled.div`
  border: 1px solid #b5b5b5;
  margin-top: 24px;
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
