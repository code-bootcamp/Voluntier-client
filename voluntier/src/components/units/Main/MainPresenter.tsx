import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../../commons/layout/header/HeaderContainer";
import * as S from "./MainStyles";

interface IPropsMain {
  moveToPage: (page: string) => () => void;
}

interface ISettings {
  dots: boolean;
  fade: boolean;
  speed: number;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: any;
  arrows: boolean;
}

export default function MainUI(props: IPropsMain) {
  const settings: ISettings = {
    dots: false,
    fade: true,
    speed: 3000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 1024 }],
    arrows: false,
  };

  return (
    <S.Wrapper>
      <S.MySlider {...settings}>
        <S.SliderItem1>
          <Header />
          <S.SliderDisplay>
            <S.SliderText>
              <S.Text>
                보호소 동물친구들과
                <br />
                당신을 이어줄 특별한 공간
                <br />
              </S.Text>
            </S.SliderText>
            <S.SliderBean src="/images/main/콩모음집.png" />
          </S.SliderDisplay>
        </S.SliderItem1>
        <S.SliderItem2>
          <Header />
          <S.SliderDisplay>
            <S.SliderText>
              <S.Text>
                여러분의 소중한 후원 젤리는
                <br />
                보호소 동물친구들을 위한
                <br />
                활동에 사용됩니다
                <br />
              </S.Text>
            </S.SliderText>
            <S.SliderBean src="/images/main/콩모음집.png" />
          </S.SliderDisplay>
        </S.SliderItem2>

        <S.SliderItem3>
          <Header />
          <S.SliderText>
            <S.Text
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              후원하고 받은 젤리로
              <br />
              귀여운 굿즈를 받아가세요!
              <br />
            </S.Text>
          </S.SliderText>
        </S.SliderItem3>
      </S.MySlider>

      <S.CategoryWrapper>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_1.png")`,
          }}
          onClick={props.moveToPage("/boards")}
        ></S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_2.png")`,
          }}
          onClick={props.moveToPage("/boards/new")}
        ></S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_3.png")`,
          }}
          onClick={props.moveToPage("/donation")}
        ></S.Category>
        <S.Category
          style={{
            backgroundImage: `url("../../../../images/main/category_4.png")`,
          }}
          onClick={props.moveToPage("/products")}
        ></S.Category>
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}
