import * as S from "../Donation/DonationStyles";
import PaymentPage from "../../commons/payment";
import { useRef } from "react";
import { useRecoilState } from 'recoil';
import { setAmountDonation } from "../../../commons/store";


export default function DonationUI() {
  const PayRef = useRef<HTMLButtonElement>(null);
  const [amount,setAmount] = useRecoilState(setAmountDonation)
  
  // const onChangeAmount = (event) => {
  //   setAmount(Number((event.target as HTMLDivElement).id))
  // }
  const delay =(ms) => {
    return new Promise(resolve => setTimeout(resolve,ms))
  }
  const onClickPayment = async (event) =>{
   setAmount(Number((event.target as HTMLDivElement).id))
   await delay(1000) 
   return PayRef.current?.click()
  }
  console.log(amount)
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
            id={String(10000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(치즈).png")`,
            }}
          >
            <S.Pricediv/>
            <S.PriceDetail id={String(10000)}>1만 젤리 후원</S.PriceDetail>
          </S.Price>
          <S.Price2
            id={String(20000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(호랭이).png")`,
            }}
          >
            <S.PriceDetail id={String(20000)}>2만 젤리 후원</S.PriceDetail>
          </S.Price2>
          <S.Price3
            id={String(30000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(회색).png")`,
            }}
          >
            <S.PriceDetail id={String(30000)}>3만 젤리 후원</S.PriceDetail>
          </S.Price3>
          <PaymentPage PayRef={PayRef}/>
        </S.Bottom>
      </S.Body>
    </>
  );
}
