import styled from "@emotion/styled"


export const PopoverContents = styled.div`
    background-color: #0085CB;
`
export const Wrapper = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0085CB;
    @media (max-width: 375px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 10vh;
        background-color: white;
    }
    @media (min-width: 376px) and (max-width:767px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 10vh;
        background-color: white
    }
`
export const LogoImg = styled.img`
    margin-top: 15%;
    width: 68%;
    height: 15%;
    @media  (max-width: 375px){
        margin: 0% 5% 0% 2%;
        width: 80px;
        height: 70%;
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 16% 0% 2%;
        width: 80px;
        height: 70%;
    }
`
export const ProfileImg = styled.img`
    margin-top: 10%;
    width: 80%;
    height: 23%;
    @media  (max-width: 375px){
        margin: 0% 3% 0% 0%;
        width: 50px;
        height: 50px;
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 7% 0% 0%;
        width: 50px;
        height: 50px;
    }
`
export const LoginInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 15% 0% 30% 0%;
    @media  (max-width: 375px){
        width: 50px;
        margin: 0%;
    }
    @media (min-width: 376px) and (max-width:767px){
        width: 50px;
        margin: 0%;
    }
`
export const Login = styled.div`
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        font-size: 12px;
        color: #0085CB;
    }
    @media (min-width: 376px) and (max-width:767px){
        font-size: 15px;
        color: #0085CB;
    }
`
export const Mark = styled.div`
    height: 70%;
    margin: 0% 15% 0% 15%;
    border: none;
    border-left: 1px solid white;
    @media  (max-width: 375px){
        margin: 0% 5% 0% 5%;
        height: 20px;
        border: none;
        border-left: 1px solid white;
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 5% 0% 5%;
        height: 20px;
        border: none;
        border-left: 2px solid #0085CB;
    }
`
export const Join = styled.div`
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        font-size: 12px;
        color:#0085CB;
    }
    @media (min-width: 376px) and (max-width:767px){
        font-size: 15px;
        color:#0085CB;
    }
`

export const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media  (max-width: 375px){
        width: 130px;
        margin-left: 20px;
    }
    @media (min-width: 376px) and (max-width:767px){
        width: 130px;
        margin-left: 20px;
        margin: 0% 0% 0% 5%;
    }
`

export const Information = styled.div`
    margin-bottom: 6%;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
`
export const Recruit = styled.div`
    margin-bottom: 6%;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
`
export const Donation = styled.div`
    margin-bottom: 6%;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
`
export const JellyShop = styled.div`
    margin-bottom: 6%;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    @media  (max-width: 375px){
        margin: 0% 0% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
    @media (min-width: 376px) and (max-width:767px){
        margin: 0% 3% 0% 0%;
       font-size: 10px;
       font-weight: 500;
       color:#FFFFFF
    }
`