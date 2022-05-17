import styled from "@emotion/styled";
import { breakPoints } from '../../../../commons/styles/Media';

export const Wrapper = styled.div`
  padding: 104px 70px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  @media ${breakPoints.mobile}{
    padding: 10px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  @media ${breakPoints.mobile}{
    margin-bottom: 16px;
  }
`;

export const Title = styled.div`
  width: 54px;
  color: #0085cb;
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
  @media ${breakPoints.mobile}{
    font-size: 20px
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  border: 1px solid #b5b5b5;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  display: flex;
  padding: 49px 20px 49px 20px;
  margin-bottom: 20px;
  @media ${breakPoints.mobile}{
    display: flex;
    flex-direction: column;
    padding: 3%;
  }
`;

export const InputWrapperLeft = styled.div`
  width: 41%;
  height: 100%;
  margin-right: 15px;
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 424px;
  margin-bottom: 13px;
  @media ${breakPoints.mobile}{
    height: 200px;
  }
`;

export const LocationWrapper = styled.div`

`;

export const SearchButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  margin: 0px 0px 0px 10px;
`;

export const Address = styled.input`
  width: 55%;
  height: 30px;
  border: 1px solid #676767;
  margin-bottom: 8px;
  /* font-size: 10px; */
`;

export const AddressDetail = styled.input`
  width: 55%;
  height: 30px;
  border: 1px solid #676767;
`;

export const InputWrapperRight = styled.div`
  width: 58%;
  @media ${breakPoints.mobile}{
    width: 100%;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const LabelImage = styled.img`
  width: 18px;
  height: 20px;
  margin-right: 10px;
  @media ${breakPoints.mobile}{
    width: 13px;
    height: 15px;
    margin-right: 5px;
  }
`;

export const Label = styled.div`
  font-weight: 700;
  font-size: 18px;
  @media ${breakPoints.mobile}{
  font-weight: 500;
  font-size: 10px;
  }
`;

export const SmallInputWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const SmallInput = styled.input`
  width: 80%;
  height: 30px;
  margin-right: 5px;
  border: 1px solid #676767;
`;

export const HalfWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  @media (min-width: 768px) and (max-width: 1382px){
  width: 100%;
  }
  @media ${breakPoints.mobile}{
  width: 100%;
  }
`;
export const Volun = styled.div`
  width: 25%;
  @media (min-width: 768px) and (max-width: 1382px){
  width: 50%;
  }
  @media ${breakPoints.mobile}{
  width: 50%;
  margin-right: 1%;
  }
`

export const SubmitButton = styled.button`
  width: 99px;
  height: 51px;
  align-self: flex-end;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  @media ${breakPoints.mobile}{
    width: 20%;
    height: 30px;
    font-size: 13px;
  }
`;
