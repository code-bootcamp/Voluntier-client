import Slider from "react-slick";

import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 105%;
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
  @media (max-width: 470px) {
      width: 100%;
      height: 300px;
  }
`;
export const SliderItem1 = styled.div`
  width: 900px;
  height: 1200px;
  background: url("../../../../images/main/메인 이미지 blue.png") no-repeat center;
  background-size: cover;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
    background-size: cover;
  }
    @media ${breakPoints.mobile} {
    height: 430px;        
  }
  @media (max-width:470px) {
    height: 330px;
  }  
  `;
  export const SliderItem2 = styled.div`
  width: 1440px;
  height: 1200px;
  background: url("../../../../images/main/캐러셀2.png") no-repeat center;
  background-size: cover;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
    background-size: cover;
  }
    @media ${breakPoints.mobile} {
    height: 430px;        
  }
  @media (max-width:470px) {
    height: 330px;
  }  
  `;
  export const SliderItem3 = styled.div`
  width: 1440px;
  height: 1200px;
  background: url("../../../../images/main/캐러셀3.png") no-repeat center;
  background-size: cover;
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 600px;
    background-size: cover;
  }
    @media ${breakPoints.mobile} {
    height: 430px;        
  }
  @media (max-width:470px) {
    height: 330px;
  }  
  `;
  export const SliderDisplay = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5% 12%;
  @media ${breakPoints.tablet} {
    padding: 3% 12% 3% 8%;
  }
  @media (max-width: 470px) {
    padding: 3% 5%;
  } 
  `
  export const SliderBean = styled.div`
    width: 350px;
    height: 660px;
    background: url("../../../../images/main/콩모음집.png") no-repeat center;
    background-size: cover;
    margin-top: -220px;
    animation: motion 2s linear 0s infinite alternate; 
    @keyframes motion {
	0% {margin-top: -100px;}
	100% {margin-top: -350px;}
}
@media ${breakPoints.tablet} {
   width: 220px;
    height: 360px;
    @keyframes motion {
	0% {margin-top: -20px;}
	100% {margin-top: -280px;}
}
  }
@media ${breakPoints.mobile} {
    width: 160px;
    height: 270px;
    margin-left: -5%;
    @keyframes motion {
	0% {margin-top: 10px;}
	100% {margin-top: -180px;}
}
  }
  @media (max-width: 470px) {
    width: 120px;
    height: 200px;
  @keyframes motion {
	0% {margin-top: 10px;}
	100% {margin-top: -100px;}
}
  }  
      
    `


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
    height: 600px;
    background-size: cover;
  }
    @media ${breakPoints.mobile} {
    width: 100%;
    height: 600px;
    background-size: cover;
        
  }
  @media (max-width: 470px) {
    height: 330px;
  }  
  `;

export const SliderText = styled.div`
  color: #ffffff;
  font-family: "GmarketSans", sans-serif;
  `;

export const Text = styled.div`
  font-size: 38px;
  width: 400px;
  @media ${breakPoints.tablet} {
    font-size: 20px;
    width: 290px;
  }
    @media ${breakPoints.mobile} {
    font-size: 14px;
    width: 160px;
  }
  @media (max-width: 470px) {
    font-size: 10px;
    width: 120px;

  }  

  `

export const DogBiscuit = styled.div`
    width: 410px;
    height: 130px;
    background-image: url('../../../../../images/UnionBiscuit.png');
    font-family: "Sniglet";
    margin-right: 1150px;
    margin-bottom: 40px;
    background-repeat: no-repeat;
    font-size: 32px;
    color: black;
    letter-spacing: 1px;
    padding: 20px 20px 20px 28px;
    @media ${breakPoints.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-size: contain;
      font-size: 16px;
    width: 120px;
    height: 50px;
    margin-right: 650px;
    margin-top: 20px;
  }

  @media ${breakPoints.mobile} {
    display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-size: contain;
      font-size: 14px;
    width: 100px;
    height: 40px;
    margin-right: 460px;
    margin-bottom: 40px;
    margin-top: 29px;
    margin-left: 50px;
        
  }
  @media (max-width: 470px) {
    color: white;
    font-size: 10px;
    width: 80px;
    height: 30px;
    padding: 0px;
    margin-right: 250px;
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
  @media (max-width: 470px) {
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
  @media (max-width: 470px) {
    width: 115px;
    height: 125px;
    margin-bottom: 10px;
  }  
`;

export const CategoryText = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 600;
  text-align: center;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  font-weight: 400;
  }
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
  @media (max-width: 470px) {
    font-size: 10px;
  } 

`;