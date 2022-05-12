import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../../commons/layout/header/HeaderContainer";
import * as S from "./MainStyles";

export default function MainUI(props) {
  return (
    <S.Wrapper>

        <S.MySlider
          dots={props.settings.dots}
          infinite={props.settings.infinite}
          speed={props.settings.speed}
          slidesToShow={props.settings.slidesToShow}
          slidesToScroll={props.settings.slidesToScroll}
        >
            <S.SliderItem style={{ paddingTop: "5%", paddingLeft: "1%" }}>
              <Header />
              
              <S.SliderText>
                <S.Text style={{marginTop: "2%", marginLeft: "15%" }}>보호소 동물친구들과 </S.Text>
                <S.Text  style={{marginLeft: "15%" }}>당신을 이어줄 특별한 공간</S.Text>
              </S.SliderText>
            </S.SliderItem>
          
          
            
            <S.SliderItem style={{ paddingTop: "16%", paddingLeft: "60%" }}>
            <Header />
              <S.SliderText>
              <S.Text style={{paddingTop: "10%", marginLeft: "15%" }} >여러분의 소중한 후원 젤리는 </S.Text>
              <S.Text style={{marginLeft: "15%" }}>보호소 동물친구들을 위한 </S.Text>
              <S.Text style={{marginLeft: "15%" }}>활동에 사용됩니다</S.Text>
              </S.SliderText>
            </S.SliderItem>
       
         
            
            <S.SliderItem
              style={{
                paddingTop: "16%",
                paddingLeft: "35%",
                paddingRight: "35%",
              }}
            ><Header />
                <S.SliderText>
                <S.Text style={{paddingTop: "6%", marginLeft: "65%" }}> 후원하고 받은 적립금으로 </S.Text>
                <S.Text style={{marginLeft: "65%" }}> 귀여운 굿즈를 받아가세요!</S.Text>
                </S.SliderText>
            </S.SliderItem>
     
        </S.MySlider>

      <S.DogBiscuit src="/images/main/dog_biscuit.png" />
      <S.CategoryWrapper>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_1.png")`,
          }}
        >
          <S.CategoryText>봉사모집</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_2.png")`,
          }}
        >
          <S.CategoryText>봉사조회&신청</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_3.png")`,
          }}
        >
          <S.CategoryText>후원하기</S.CategoryText>
        </S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_4.png")`,
          }}
        >
          <S.CategoryText>젤리샵</S.CategoryText>
        </S.Category>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}
