import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";
import {QuestionCircleOutlined} from '@ant-design/icons'

export const ChatWrapper = styled.div`

top: 10%;
left: 11.5%;
position: fixed;
z-index: 10;

`

export const Wrapper = styled.div`

  background: ${(props)=>(props.isChat ? "rgba(0,0,0,0.1)" : "none")};
  padding: 104px 70px;
  
  @media ${breakPoints.tablet} {
    padding: 50px 30px;
  }
  
  @media ${breakPoints.mobile} {
    padding: 30px 30px;
  }
  `;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 52px;
  
  @media ${breakPoints.tablet} {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  `;

export const TitleLabel = styled.div`
  width: 54px;
  color: #0085cb;
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
  
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
  `;

export const Title = styled.div`
  width: 100%;
  height: 33px;
  font-size: 24px;
  
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
  `;

export const InnerWrapper = styled.div`
  display: flex;
  
  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: center;

  }
  
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
  `;

export const InnerWrapperLeft = styled.div`
  width: 70%;
  margin-right: 20px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  `;

export const InnerWrapperLeftUpper = styled.div`
  width: 100%;
  margin-right: 20px;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 49px 12px;
  
  @media ${breakPoints.tablet} {
    padding: 15px 15px;
  }
  
  @media ${breakPoints.mobile} {
    padding: 15px 15px;
  }
  `;

export const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  
  @media ${breakPoints.tablet} {
    flex-direction: column;
  }
  
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
  `;

export const InfoLeftWrapper = styled.div`
  width: 53%;
  margin-right: 15px;
  
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  `;

export const Map = styled.div`
  width: 100%;
  height: 424px;
  border: 3px solid yellow;
  margin-bottom: 13px;
  border-radius: 20px;
  
  @media ${breakPoints.tablet} {
    width: 100%;
    height: 250px;
    border: 3px solid yellow;
    margin-bottom: 13px;
    border-radius: 20px;
  }
  
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
    border: 3px solid yellow;
    margin-bottom: 13px;
    border-radius: 20px;
  }
  `;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  
  `;
  export const LocationDisplay = styled.div`
  display  :flex ;
  flex-direction: row;
  margin-bottom: 6px;
`

export const LabelImage = styled.img`
  width: 20px;
  height: 21px;
  
  margin-right: 10px;
  
  @media ${breakPoints.tablet} {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }
  
  @media ${breakPoints.mobile} {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }
  `;
export const QuestionIcon = styled(QuestionCircleOutlined)`
  color: #0085cb;
  svg{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    
    @media ${breakPoints.tablet || breakPoints.mobile} {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }
  }
  
  `

export const Location = styled.div`
  font-size: 15px;
`;

export const InfoRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3%;
  width: 44%;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const InfoDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const ContentsDetailWrapper = styled.div`
display: flex;
flex-direction: column;
padding-left: 3%;
`
export const DetailDisplay = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;
`

export const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: #0085cb;

  @media ${breakPoints.tablet} {
    font-size: 15px;
    margin-right: 10px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
    margin-right: 10px;
  }
`;

export const Detail = styled.div`
  font-size: 15px;
  font-weight: 400;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Note = styled.div`
  color: #c4c4c4;
  font-size: 10px;
  margin-bottom: 5px;

  @media ${breakPoints.tablet} {
    font-size: 5px;
  }

  @media ${breakPoints.mobile} {
    font-size: 5px;
  }
`;

export const ContentsWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

export const ApplyButton = styled.button`
  width: 99px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
export const EditButton = styled.button`
  width: 99px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
export const DeleteButton = styled.button`
  width: 99px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

export const InnerWrapperRight = styled.div`
  width: 29%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 50%;
  }

`;

export const TalkWrapper = styled.div`
  width: 320px;
  height: 580px;
  display: flex;
  flex-direction: column;
`

export const TalkHeader = styled.div`
  width: 100%;
  height: 50px;
  background-image: url('../../../../images/boardDetail/chatheader.png');
  background-repeat: no-repeat;
`
export const TalkContents = styled.div`

  width: 96.9%;
  height: 450px;
  background-color: white;
  border-left: 2.2px solid #0085CB;
  border-right: 2.2px solid #0085CB;

`
export const TalkWrite = styled.input`
width: 96.9%;
height: 50px;
border-radius: 0px 0px 20px 20px;
border: 2.2px solid #0085CB;
border-top: 2.2px solid #0085CB;
::placeholder{
  font-size: 11px;
}

`
export const ChatIcon = styled.div`
width: 60px;
height: 60px;
background-size: contain;
position: fixed;
bottom: 60px;
background-image: url('../../../../images/boardDetail/mobileChat.png');
background-repeat: no-repeat;

`