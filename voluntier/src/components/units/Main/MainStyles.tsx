import Slider from "react-slick";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const UpperWrapper = styled.div`
  width: 100%;
`;

export const MySlider = styled(Slider)`
  width: 100%;
`;

export const DogBiscuit = styled.img`
  width: 21%;
  margin-left: 100px;
  margin-bottom: 40px;
`;

export const SliderItem = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: -140px;
  background-image: url("../../../../images/main/main_illust.png");
  background-size: cover;
`;

export const SliderText = styled.div`
  color: #ffffff;
  // 폰트 사이즈 rem 변경 필요
  font-size: 38px;
  font-weight: 500;
  font-family: "GmarketSans", sans-serif;
`;

export const CategoryWrapper = styled.div`
  padding: 0% 5%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const Category = styled.div`
  width: 25%;
  height: 370px;
  background-size: cover;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryText = styled.div`
  // 폰트 사이즈 rem 변경 필요
  font-size: 36px;
  font-weight: 600;
`;
