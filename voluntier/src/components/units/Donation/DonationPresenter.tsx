import * as S from '../Donation/DonationStyles'
import Head from 'next/head';


export default function DonationUI(){


    const requestPay = () => {
        
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // Example: imp00000000
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay(
            { // param
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
        m_redirect_url: "http://localhost:3000/"
        }, async(rsp : any) => { 
        if (rsp.success) {
            // 결제 성공시로직 
            // console.log(rsp)
            
            
        } else {
            alert('결제에 실패했습니다. 다시 시도해주세요!')
        }
        });
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
        
    };
    return(
        <>
        <Head>
                <script type="text/javascript" 
                    src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                <script type="text/javascript" 
            src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
        </Head>
        <S.Body>


                <S.Top>
                    <S.TopTitle>
                        <S.Title1>여러분의 젤리로</S.Title1>
                        <S.Title2>동물들을 후원해주세요!</S.Title2>
                    </S.TopTitle>
                    <S.TopContents>
                        <S.Contents>
                            <S.ContentsJelly1>
                                12,345,678 젤리
                            </S.ContentsJelly1>
                            <S.ContentsDetail>
                                기부된 젤리
                            </S.ContentsDetail>
                        </S.Contents>
                        <S.Contents>
                        <S.ContentsJelly2>
                                12,345마리
                            </S.ContentsJelly2>
                            <S.ContentsDetail>
                                구한 동물들 
                            </S.ContentsDetail>
                        </S.Contents>
                    </S.TopContents>
                </S.Top>
                <S.Middle>
                    <S.MiddleTitle> 기부된 젤리는 이렇게 쓰여요! </S.MiddleTitle>
                    <S.MiddleContents>
                        <S.MySlider {...settings}>
                            <S.Slider1></S.Slider1>
                            <S.Slider2></S.Slider2>
                            <S.Slider3></S.Slider3>
                            <S.Slider4></S.Slider4>

                        </S.MySlider>
                    </S.MiddleContents>
                </S.Middle>
                <S.Footer>
                    <S.Price1>
                        <S.PriceDetail onClick={requestPay}>
                            10000젤리 <br/> 후원하기🐶
                        </S.PriceDetail>
                    </S.Price1>
                    <S.Price2>
                        <S.PriceDetail>
                            20000젤리 <br/> 후원하기💜
                        </S.PriceDetail>
                    </S.Price2>
                    <S.Price3>
                        <S.PriceDetail>
                            30000젤리 <br/> 후원하기🐰
                        </S.PriceDetail>
                    </S.Price3>
                </S.Footer>

        </S.Body>
   
</>
    )
}