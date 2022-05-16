import styled from '@emotion/styled'
import Slider from "react-slick";
export const Body = styled.div`

    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 0px 200px;

`

export const Top = styled.div`
    background-image: url('../../../../images/donation/후원박스.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 920px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

`
export const TopTitle = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`
export const Title1 = styled.div`
    font-size: 30px;
    font-family: "GmarketSans";
    color: #FF6A9E;
    font-weight: bolder;
    line-height: 30px;
`
export const Title2 = styled.div`
    font-size: 30px;
    font-family: "GmarketSans";
    color: #FF6A9E;
    font-weight: bolder;
`
export const TopContents = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 50%;

`

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const ContentsJelly1 = styled.div`
    font-family: "NotoSans";
    font-size: 40px;
    font-weight: bolder;
    color: #FF6A9E;

`
export const ContentsJelly2 = styled.div`
    font-family: "NotoSans";
    font-size: 40px;
    font-weight: bolder;
    color: #0085CB;

`
export const ContentsDetail = styled.div`
font-family: "NotoSans";
    font-size: 20px;

`

export const Middle = styled.div`
    height: 50%;
    width : 950px;
    border: 1px solid lightgray;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MiddleTitle = styled.div`
    font-size: 15px;

`
export const MiddleContents = styled.div`

`
export const MySlider = styled(Slider)`
        width: 900px;
        height: auto;
        

`

export const Slider1 = styled.div`
        background-color: aliceblue;
        width: 100px;
        height: 380px;

`

export const Slider2 = styled.div`
        background-color: lightpink;
        width: 100px;
        height: 380px;

`
export const Slider3 = styled.div`
        background-color: coral;
        width: 100px;
        height: 380px;

`
export const Slider4 = styled.div`
        background-color: yellow;
        width: 100px;
        height: 380px;

`
export const Footer = styled.div`
    width: 950px;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`
export const Price1 = styled.div`
    background-image: url('../../../../images/donation/고양이발(치즈).png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12%;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    :hover{
        height: 500px;
        transform: translate(0px,-100px);
        transition-duration: 1.5s;

    }

`
export const Price2 = styled.div`
    background-image: url('../../../../images/donation/고양이발(호랭이).png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12%;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    :hover{
        height: 500px;
        transform: translate(0px,-100px);
        transition-duration: 1.5s;

    }

`
export const Price3 = styled.div`
    background-image: url('../../../../images/donation/고양이발(회색).png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12%;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    :hover{
        height: 500px;
        transform: translate(0px,-100px);
        transition-duration: 1.5s;

    }

`

export const PriceDetail = styled.div`
font-family: "GmarketSans";
    font-size: 20px;
    font-weight: bolder;
    color: indianred;

`


