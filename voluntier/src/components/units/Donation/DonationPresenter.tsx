import * as S from '../Donation/DonationStyles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';


export default function DonationUI(){
    const [windowSize,setWindowSize] = useState(false)

    const handleResize = () => {
        if(window.innerWidth <= 767){
            setWindowSize(true)
        }else{
            setWindowSize(false)
        }
    }
    useEffect(()=>{
        if(window.innerWidth<=767){
            setWindowSize(true)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[windowSize])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
    <S.Wrapper>
        <S.Body>
            <S.DogBiscuit src='/images/donation/dog_biscuit.png'/>
            {windowSize?
            <S.DonationBody>
                    <S.MySlider {...settings}>
                    <S.DonationComment>
                    <S.Comment>지금까지 기부된 젤리는 25,942,141 이며,</S.Comment>
                    <S.Comment>250만 마리의 귀여운 댕댕이와 냥냥이를 구했습니다.</S.Comment> 
                    <S.Comment>여러분의 후원은 많은 아이들의 생명을 살릴 수 있습니다.</S.Comment>
                </S.DonationComment>
                        <S.DonationImg1 src='/images/donation/donation1.png'/>
                        <S.DonationImg2 src='/images/donation/donation1.png'/>
                    </S.MySlider>
            </S.DonationBody>
            :
            <S.DonationBody>
                <S.DonationComment>
                    <S.Comment>지금까지 기부된 젤리는 25,942,141 이며,</S.Comment>
                    <S.Comment>250만 마리의 귀여운 댕댕이와 냥냥이를 구했습니다.</S.Comment> 
                    <S.Comment>여러분의 후원은 많은 아이들의 생명을 살릴 수 있습니다.</S.Comment>
                </S.DonationComment>
                    <S.MySlider {...settings}>
                        <S.DonationImg1 src='/images/donation/donation1.png'/>
                        <S.DonationImg2 src='/images/donation/donation1.png'/>
                    </S.MySlider>
            </S.DonationBody>
            }
            <S.DonationWrapper>
                <S.Button1>
                    <S.ButtonImg src='/images/donation/Frame.png'/>
                    <S.DogGum src='/images/donation/DogGum.png'/>
                    <S.Ten src='/images/donation/x10.png'/>
                </S.Button1>
                <S.Button2>
                    <S.ButtonImg src='/images/donation/Frame.png'/>
                    <S.Chew src='/images/donation/Chew.png'/>
                    <S.Ten src='/images/donation/x10.png'/>
                </S.Button2>
                <S.Button3>
                    <S.ButtonImg src='/images/donation/Frame.png'/>
                    <S.DogHome src='/images/donation/DogHome.png'/>
                </S.Button3>
                <S.Button4>
                    <S.ButtonImg src='/images/donation/Frame.png'/>
                    <S.HungryDogCat src='/images/donation/HungryDogCat.png'/>
                </S.Button4>
            </S.DonationWrapper>
        </S.Body>
    </S.Wrapper>
    )
}