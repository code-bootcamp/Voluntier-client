import * as S from "../Donation/DonationStyles";
import Head from "next/head";

export default function DonationUI() {
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // 카드로 할거야라는뜻
        // merchant_uid: "ORD20180131-0000011",
        // 상품 아이디를 중복하지 않게 설정하고, 없으면 임의로 중복안되게 발생하게 하면 됨
        name: "김아름",
        amount: "10000",
        buyer_email: "kimareum11@naver.com",
        buyer_name: "김아름",
        buyer_tel: "010-7720-7516",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공시로직
          // console.log(rsp)
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </Head>
      <S.Body>
        <S.Top>
          <S.TopTitle>
            <S.Title>여러분의 젤리로</S.Title>
            <S.Title>멍냥이를 구해주세요!</S.Title>
          </S.TopTitle>
          <S.TopContents>
            <S.Contents>
              <S.ContentPink>12,345,678</S.ContentPink>
              <S.ContentDetail>기부된 젤리</S.ContentDetail>
            </S.Contents>
            <S.Contents>
              <S.ContentBlue>12,345</S.ContentBlue>
              <S.ContentDetail>구한 멍냥이</S.ContentDetail>
            </S.Contents>
          </S.TopContents>
        </S.Top>
        <S.Middle>
          <S.MiddleTitle>기부된 젤리는 이렇게 쓰여요!</S.MiddleTitle>
          <S.MySlider {...settings}>
            <S.SliderContent></S.SliderContent>
            <S.SliderContent></S.SliderContent>
            <S.SliderContent></S.SliderContent>
            <S.SliderContent></S.SliderContent>
          </S.MySlider>
        </S.Middle>
        <S.Bottom>
          <S.Price
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(치즈).png")`,
            }}
          >
            <S.PriceDetail onClick={requestPay}>1만 젤리 후원</S.PriceDetail>
          </S.Price>
          <S.Price
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(호랭이).png")`,
            }}
          >
            <S.PriceDetail>2만 젤리 후원</S.PriceDetail>
          </S.Price>
          <S.Price
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(회색).png")`,
            }}
          >
            <S.PriceDetail>3만 젤리 후원</S.PriceDetail>
          </S.Price>
        </S.Bottom>
      </S.Body>
    </>
  );
}
