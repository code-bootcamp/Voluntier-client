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

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
            <S.SliderContent >
              <S.SliderText
              >여러분의 젤리후원으로<br/>
              Voluntier는 전국의 유기동물보호센터에<br/>
              다양한 후원을 하고있습니다!</S.SliderText>
            </S.SliderContent>
            <S.SliderContent1>
            <S.SliderText
            style={{margin: "8% 0% 0% 45%"}}
            >도움이 필요한 작은 보호센터들의<br/>
              소중한 마음들이 소외되지 않도록<br/>
              </S.SliderText>
            </S.SliderContent1>
            <S.SliderContent2>
            <S.SliderText
            style={{margin: "23% 0% 0% 5%"}}
            >보내주신 마음 하나하나 헛되이 쓰이지 않도록<br/>
              Voluntier단이 찾아갑니다<br/>
              </S.SliderText>
            </S.SliderContent2>
            <S.SliderContent3>
            <S.SliderText
            style={{margin: "10% 0% 0% 5%"}}
            >매달 정기메일을 통해 <br/>
              Voluntier의 활동내역을 보실수 있습니다<br/>
              </S.SliderText>
            </S.SliderContent3>
            <S.SliderContent4>
            <S.SliderText
            style={{margin: "20% 0% 0% 10%"}}
            >모든 생명이 존중받고 사랑받는 세상 <br/>
              Voluntier가 만들어 가겠습니다<br/>
              </S.SliderText>
            </S.SliderContent4>


          </S.MySlider>
        </S.Middle>
        <S.Bottom>
          <S.Pricediv style={{marginLeft : "10%"}}>
          <S.Price
            id={String(10000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(치즈).png")`,
            }}
          >
            <S.PriceDetail id={String(10000)}>1만젤리 후원하기</S.PriceDetail>
          </S.Price>
          </S.Pricediv>
          <S.Pricediv>

          <S.Price
            id={String(20000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(호랭이).png")`,
            }}
            >
            <S.PriceDetail id={String(20000)}>2만젤리 후원하기</S.PriceDetail>
          </S.Price>
          </S.Pricediv>
          <S.Pricediv>

          <S.Price
            id={String(30000)}
            onClick={onClickPayment}
            style={{
              backgroundImage: `url("../../../../images/donation/고양이발(회색).png")`,
            }}
            >
            <S.PriceDetail id={String(30000)}>3만젤리 후원하기</S.PriceDetail>
          </S.Price>
          </S.Pricediv>
          
          <PaymentPage PayRef={PayRef}/>
        </S.Bottom>
      </S.Body>
    </>
  );
}
