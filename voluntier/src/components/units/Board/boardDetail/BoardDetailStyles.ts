import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";
import { QuestionCircleOutlined } from "@ant-design/icons";

export const ChatWrapper = styled.div`
  top: 10%;
  left: 11.5%;
  position: fixed;
  z-index: 10;
`;
interface IProps {
  isChat: boolean;
}
export const Wrapper = styled.div`
  background: ${(props: IProps) => (props.isChat ? "rgba(0,0,0,0.1)" : "none")};
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media ${breakPoints.mobile} {
    margin-bottom: 5px;
  }
`;

export const TitleLabel = styled.div`
  width: 54px;
  color: #0085cb;
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
  display: flex;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 36px;
    font-size: 15px;
    margin-right: 5px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 33px;
  font-size: 20px;
  display: flex;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 13px;
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
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;

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
  align-items: flex-start;

  @media ${breakPoints.tablet} {
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const InfoLeftWrapper = styled.div`
  width: 53%;

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
  margin-bottom: 13px;
  border-radius: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 250px;
    margin-bottom: 13px;
    border-radius: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 250px;
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
  display: flex;
  flex-direction: row;
`;

export const LabelImage = styled.img`
  width: 15px;
  height: 16px;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    width: 13px;
    height: 15px;
    margin-right: 10px;
  }

  @media ${breakPoints.mobile} {
    width: 11px;
    height: 12px;
    margin-right: 5px;
  }
`;

export const InquiryWrapper = styled.div`
  margin-bottom: 20px;
`;

export const QuestionIcon = styled(QuestionCircleOutlined)`
  color: #0085cb;
  svg {
    width: 15px;
    height: 16px;
    margin-right: 10px;

    @media ${breakPoints.tablet} {
      width: 13px;
      height: 15px;
      margin-right: 10px;
    }

    @media ${breakPoints.mobile} {
      width: 11px;
      height: 12px;
      margin-right: 5px;
    }
  }
`;

export const Location = styled.div`
  font-size: 15px;
`;

export const InfoRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
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
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    margin-bottom: 5px;
  }
`;

export const ContentsDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  color: #0085cb;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Detail = styled.div`
  font-size: 15px;
  font-weight: 400;
  overflow-wrap: break-word;

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
`;

export const Button = styled.button`
  width: 88px;
  height: 35px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  background-color: #000000;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 72px;
    height: 30px;
    font-size: 11px;
  }
`;

export const InnerWrapperRight = styled.div`
  width: 320px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 10px;
`;

export const ChatIcon = styled.div`
  width: 60px;
  height: 60px;
  background-size: contain;
  position: fixed;
  bottom: 60px;
  background-image: url("../../../../images/boardDetail/mobileChat.png");
  background-repeat: no-repeat;
  cursor: pointer;
`;
