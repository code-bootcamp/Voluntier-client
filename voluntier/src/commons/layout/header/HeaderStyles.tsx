import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
`;

export const Logo = styled.img`
  width: 19%;
`;

export const ButtonWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 46%;
  height: 51px;
  background-color: #ffffff;
  border-radius: 30px;
  border: none;
  // 폰트 사이즈 rem 변경 필요
  font-size: 16px;
`;
