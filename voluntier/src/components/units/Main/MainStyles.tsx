import Slider from "react-slick";

import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const MySlider = styled(Slider)`
  width: 1900px;



  @media ${breakPoints.tablet} {
    width: 100%;
    height: 650px;

  }
    @media ${breakPoints.mobile} {
      width: 100%;
      height: 440px;
        
  }
  @media (max-width: 376px) {
      width: 100%;
      height: 300px;
  }
  /* @media (max-width: 500px) {
    height: 310px;
  }
  @media (max-width: 390px) {
    height: 270px;
  } */
`;


export const SliderItem = styled.div`
  width: 1440px;
  height: 1200px;
  background: url("../../../../images/main/main_illust.png") no-repeat center;
  background-size: cover;
  /* transform: translateY(80px);
  opacity: 1;
  transition: all 1.0s ease; */

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 700px;
    background-size: cover;
  }
    @media ${breakPoints.mobile} {
    height: 500px;
        
  }
  @media (max-width: 376px) {
    height: 330px;
  }  
  `;

export const SliderText = styled.div`
  color: #ffffff;
  font-family: "GmarketSans", sans-serif;
  `;

export const Text = styled.div`
  font-size: 38px;
  width: 500px;
  @media ${breakPoints.tablet} {
    font-size: 24px;
  }
    @media ${breakPoints.mobile} {
      font-size: 16px;
        
  }
  @media (max-width: 376px) {
    font-size: 10px;

  }  

  `

export const DogBiscuit = styled.img`
    width: 410px;
    height: 130px;
    margin-right: 1150px;
    margin-bottom: 40px;

    @media ${breakPoints.tablet} {
    width: 120px;
    height: 50px;
    margin-right: 650px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    margin-right: 460px;
    margin-bottom: 40px;
        
  }
  @media (max-width: 376px) {
    width: 80px;
    height: 30px;
    margin-right: 180px;
    margin-bottom: 40px;
  }  

  `;
export const CategoryWrapper = styled.div`
  padding: 0% 5%;
  width: 1900px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
  @media ${breakPoints.tablet} {
  padding: 0% 5%;
  width: 100%;

  }
  @media ${breakPoints.mobile} {
  margin-bottom: 20px;
  width: 100%;
  }
  @media (max-width: 376px) {
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 280px;
    margin-bottom: 10px;
  }  
`;

export const Category = styled.div`
  width: 350px;
  height: 380px;
  background-size: cover;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 60px;
  @media ${breakPoints.tablet} {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
  line-height: inherit;
  }
  @media ${breakPoints.mobile} {
  width: 100px;
  height: 110px;
  }
  @media (max-width: 376px) {
    width: 115px;
    height: 125px;
    margin-bottom: 10px;
  }  
`;

export const CategoryText = styled.div`
  font-size: 36px;
  font-weight: 600;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  font-weight: 400;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
  @media (max-width: 376px) {
    font-size: 10px;
  } 

`;