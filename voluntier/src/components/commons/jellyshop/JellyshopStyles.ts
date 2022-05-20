import styled from "@emotion/styled";
import { breakPoints } from '../../../commons/styles/Media';

export const Wrapper = styled.div`
  padding: 36px 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: column;
    height: 600px;
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: column;
  }
`;

export const UpperLeftWrapper = styled.div`
  width: 54%;
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
  @media ${breakPoints.mobile}{
    font-size: 12px;
  }
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

export const BigImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  @media ${breakPoints.mobile}{
    width: 100px;
    height: 100px;
  }
`;
export const BigImage = styled.img`
width: 100%;
  height: 100%;
  @media ${breakPoints.mobile}{
    width: 100%;
    height: 100%;
  }
`

export const SmallImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: row;
    height: 40px;
  }
`;

export const SmallImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  @media ${breakPoints.mobile}{
    width: 40px;
    height: 40px;
  }
`;

export const UpperRightWrapper = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: spac;
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;

export const SmallLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  @media ${breakPoints.mobile}{
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 15px;
  border: 1px solid #676767;
  background-color: transparent;
  margin-bottom: 8px;
  @media ${breakPoints.mobile}{
    height: 20px;
    font-size: 10px;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Zipcode = styled.input`
  width: 87px;
  height: 30px;
  font-size: 16px;
  border: 1px solid #676767;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-left: 18px;
  background-color: transparent;
  margin-right: 13px;
  @media ${breakPoints.mobile}{
    height: 20px
  }
`;

export const SearchButton = styled.button`
  width: 99px;
  height: 30px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  background-color: #000000;
  border: none;
  border-radius: 30px;
  @media ${breakPoints.mobile}{
    height: 20px;
    font-size: 12px;
  }
`;

export const Address = styled.div``;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Price = styled.div`
  color: #0085cb;
  font-size: 24px;
  @media ${breakPoints.mobile}{
    font-size: 12px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  background-color: #0085cb;
  @media ${breakPoints.mobile}{
    height: 25px;
    font-size: 15px;
  }
`;
