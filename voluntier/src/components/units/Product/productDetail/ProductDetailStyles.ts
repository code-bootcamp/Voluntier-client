import styled from "@emotion/styled";
import { Modal } from "antd";
import { breakPoints } from '../../../../commons/styles/Media';


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
  padding: 80px 60px;
  @media ${breakPoints.mobile}{
    padding: 3%;
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #FF6A9E;
  border-radius: 20px;
  margin-bottom: 24px;
  @media ${breakPoints.mobile}{
    border-radius: 0px;
    border: none;
  }
`;

export const InnerWrapperHead = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;
export const TitlePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 90px 0px 10px 52px;
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
  margin-bottom: 5%;
`;

export const Wow = styled.img`
  width: 50%;
  height: 460px;
  margin: 4% 0% 0% 4%;
  border-radius: 10%;
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

export const PickButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 100px;
  background: #FF6A9E;
  border: none;
  border-radius: 15px;
  font-family: 'GmarketSans';
  font-size: 21px;
  color: white;
  cursor: pointer;
`

export const Price = styled.div`
  color: #0085cb;
  font-size: 24px;
  font-weight: 1000;
  margin-left: 3%;
  @media ${breakPoints.mobile}{
    margin-left: 3%;
  }
`;

export const PickWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 margin: 5% 5% 0% 10%;
`

export const InnerWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 61px 52px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background: #0085CB;
  border: none;
  border-radius: 15px;
  font-family: 'GmarketSans';
  font-size: 21px;
  color: white;
  cursor: pointer;
`;

export const Mark = styled.div`
  height: 490px;
  border-left: 1px solid #FF6A9E;
  margin: 40px 0px 0px 44px;
`

export const NameMark = styled.div`
  width: 380px;
  margin: 0px 0px 40px 50px;
  height: 1px;
  border-bottom: 1px solid #FF6A9E;
`