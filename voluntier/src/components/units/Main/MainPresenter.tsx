import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../../commons/layout/header/HeaderContainer";
import * as S from "./MainStyles";
import Footer from "../../../commons/layout/footer/FooterContainer";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <S.UpperWrapper>
        <S.MySlider
          dots={props.settings.dots}
          infinite={props.settings.infinite}
          speed={props.settings.speed}
          slidesToShow={props.settings.slidesToShow}
          slidesToScroll={props.settings.slidesToScroll}
        >
          <div>
            <Header />
            <S.SliderItem style={{ paddingTop: "16%", paddingLeft: "7%" }}>
              <S.SliderText style={{ width: "39%" }}>
                보호소 동물친구들과 <br />
                당신을 이어줄 특별한 공간
              </S.SliderText>
            </S.SliderItem>
          </div>
          <div>
            <Header />
            <S.SliderItem style={{ paddingTop: "16%", paddingLeft: "60%" }}>
              <S.SliderText style={{ width: "80%", textAlign: "right" }}>
                여러분의 소중한 후원 젤리는 <br />
                보호소 동물친구들을 위한 <br />
                활동에 사용됩니다
              </S.SliderText>
            </S.SliderItem>
          </div>
          <div>
            <Header />
            <S.SliderItem
              style={{
                paddingTop: "16%",
                paddingLeft: "35%",
                paddingRight: "35%",
              }}
            >
              <S.SliderText>
                후원하고 받은 적립금으로 <br />
                귀여운 굿즈를 받아가세요!
              </S.SliderText>
            </S.SliderItem>
          </div>
        </S.MySlider>
        <S.DogBiscuit src="/images/main/dog_biscuit.png" />
      </S.UpperWrapper>
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
      <Footer />
    </S.Wrapper>
  );
}
