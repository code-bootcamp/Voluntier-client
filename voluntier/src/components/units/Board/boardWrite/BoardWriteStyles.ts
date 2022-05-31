import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    padding: 10px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    margin-bottom: 16px;
  }
`;

export const Title = styled.div`
  color: #0085cb;
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
  display: flex;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 36px;
    font-size: 15px;
    margin-right: 5px;
  }
`;

export const TitleInput = styled.input`
  width: 90%;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
  }
  :focus {
    outline: 1px solid skyblue;
  }

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin-bottom: 10px;
  }
`;

export const InputWrapperLeft = styled.div`
  width: 53%;
  height: 100%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 457px;

  @media ${breakPoints.mobile} {
    height: 200px;
    margin-bottom: 10px;
  }
`;

export const SearchButton = styled.button`
  width: 70px;
  height: 25px;
  border: none;
  background-color: #0085cb;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
  margin: 0px 0px 0px 10px;
  border-radius: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 70px;
    height: 20px;
    font-size: 11px;
  }

  @media ${breakPoints.mobile} {
    width: 50px;
    height: 18px;
    font-size: 10px;
  }
`;

export const Address = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #d9d9d9;
  margin-bottom: 8px;
  padding-left: 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
  }
  :focus {
    outline: 1px solid skyblue;
  }
`;

export const AddressDetail = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
  }
  :focus {
    outline: 1px solid skyblue;
  }
`;

export const InputWrapperRight = styled.div`
  width: 45%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const LabelImage = styled.img`
  width: 15px;
  height: 16px;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }

  @media ${breakPoints.mobile} {
    width: 11px;
    height: 12px;
    margin-right: 5px;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  color: #0085cb;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const SmallInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SmallInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #d9d9d9;
  padding-left: 10px;
  font-size: 15px;
  ::placeholder {
    font-size: 12px;
  }
  :focus {
    outline: 1px solid skyblue;
  }

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

export const HalfWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;

  @media (min-width: 768px) and (max-width: 1382px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  font-size: 10px;
  margin-left: 5px;
`;

export const Volun = styled.div`
  width: 100%;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SubmitButton = styled.button`
  width: 88px;
  height: 35px;
  align-self: flex-end;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 20px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 75px;
    height: 30px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 25px;
    font-size: 11px;
    margin-bottom: 50px;
    align-self: center;
  }
`;
