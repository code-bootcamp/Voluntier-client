import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  padding: 104px 70px;
  @media ${breakPoints.mobile}{
  padding: 3%;
}
`;

export const Title = styled.h1`
  color: #0085cb;
  font-size: 24px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  padding: 49px 20px;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  display: flex;
  @media ${breakPoints.mobile}{
  display: flex;
  flex-direction: column;
}
`;

export const Label = styled.div`
  width: 20%;
  font-size: 20px;
  @media ${breakPoints.mobile}{
  width: 100%;
}
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border: 1px solid #b5b5b5;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 99px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;
