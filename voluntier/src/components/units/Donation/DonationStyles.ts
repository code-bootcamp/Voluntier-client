import styled from '@emotion/styled';
import Slider from "react-slick";
import { breakPoints } from '../../../commons/styles/Media';


export const Wrapper = styled.div`
    padding: 50px 70px 119px 20px;
`
export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const DogBiscuit = styled.img`
    width: 20%;
    height: 10%;
    margin-bottom: 7%;
`
export const DonationBody = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 45px 0px 34px 0px;
    margin-bottom: 84px;
    border: 1px solid #B5B5B5;
    border-radius: 20px;
`
export const DonationComment = styled.div`
    display: flex;
    flex-direction: column;
`
export const Comment = styled.text`
    margin-bottom: 5%;
    font-family: 'GmarketSans';
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    @media (max-width:1200px){
        font-size: 13px;
    }
`
export const MySlider = styled(Slider)`
    width: 400px;
    height: 100%;
    margin-left: 47px;
    @media (max-width:1285px){
        width: 350px;
    }
    @media(max-width: 1092px){
        width: 300px;
    }
`
export const DonationImg1 = styled.img`
    width: 100%;
    height: 100%;
`
export const DonationImg2 = styled.img`
    width: 100%;
    height: 100%;
`
export const DonationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media ${breakPoints.mobile}{
        display: flex;
        flex-direction: column;
    }
`

export const Button1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${breakPoints.mobile}{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const Button2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${breakPoints.mobile}{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const Button3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${breakPoints.mobile}{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const Button4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${breakPoints.mobile}{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`
export const ButtonImg = styled.img`
    width: 100%;
    height: 159px;
    @media ${breakPoints.mobile}{
        width: 150px;
        height: 50%;
    }
`
export const DogGum = styled.img`
    width: 70%;
    height: 40px;
    
`
export const Ten = styled.img`
    margin-top: 24px;
    width: 50%;
    height: 36px;
`
export const Chew = styled.img`
    margin-top: 10px;
    width: 70%;
    height: 26px;
`
export const DogHome = styled.img`
    width: 70%;
    height: 99px;
`
export const HungryDogCat = styled.img`
    width: 70%;
    height: 95px;
`