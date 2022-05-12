import * as S from '../navigation/NavigationStyles'

import { useEffect, useState } from 'react';


interface IPropsNavigationUI{
    hide : () => void
    handleVisibleChange : () => void
    visible: boolean
}

export default function NavigationUI(props:IPropsNavigationUI){
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

    return(
    <S.Wrapper> 
        {windowSize
        ?
        <S.LogoImgPhone src="/images/Group.png"/>
        :
        <S.LogoImg src="/Logo_세로.png"/>
    }
        <S.ProfileImg src="/images/Group 8.png"/>
        <S.LoginInfoWrapper>
            <S.Login>Login</S.Login>
            <S.Mark></S.Mark>
            <S.Join>Join</S.Join>
        </S.LoginInfoWrapper>
        {windowSize?
        <S.MyPopover 
            color={"#0085CB"}
            style={{width:"100%"}}
            content={
                <S.PopoverContents>
                    <S.ContentsWrapper>
                            <S.Information>봉사조회 및 신청</S.Information>
                            <S.Recruit>봉사 모집하기</S.Recruit>
                            <S.Donation>젤리 후원하기</S.Donation>
                            <S.JellyShop>젤리샵</S.JellyShop>
                    </S.ContentsWrapper>    
                    <a style={{color:"white"}} onClick={props.hide}>닫기</a>
            </S.PopoverContents>
            }
            title= "Category"
            trigger="click"
            visible={props.visible}
            onVisibleChange={props.handleVisibleChange}
            >
            <S.HambugerButton> </S.HambugerButton>
        </S.MyPopover>
        :
        <S.ContentsWrapper>
            <S.Information>봉사조회 및 신청</S.Information>
            <S.Recruit>봉사 모집하기</S.Recruit>
            <S.Donation>젤리 후원하기</S.Donation>
            <S.JellyShop>젤리샵</S.JellyShop>
        </S.ContentsWrapper>
        }
    </S.Wrapper>
    )
}