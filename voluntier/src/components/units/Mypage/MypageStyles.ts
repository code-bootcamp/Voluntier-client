import styled from "@emotion/styled";
import { Modal, Tabs } from "antd";
import { breakPoints } from "../../../commons/styles/Media";

export const MyModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  padding: 20px;

  @media ${breakPoints.tablet} {
    padding: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding: 10px;
  }
`;

export const ProfileWrapper = styled.div`
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    height: 150px;
    margin-bottom: 10px;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
    height: 100px;
    margin-bottom: 10px;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    width: 40%;
  }
`;

export const ProfileImage = styled.img`
  width: 165px;
  height: 165px;
  border-radius: 50%;

  @media ${breakPoints.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 70px;
  }
`;

export const ProfileEdit = styled.div`
  color: #0085cb;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;

  @media ${breakPoints.tablet} {
    font-size: 10px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const ProfileRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 80%;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const GradeDisplay = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    margin-left: 10%;
  }

  @media ${breakPoints.mobile} {
  }
`;

export const GradeContents = styled.div`
  width: 400px;
  font-family: "GmarketSans";
  font-size: 27px;

  @media ${breakPoints.tablet} {
    width: 300px;
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    width: 160px;
    font-size: 13px;
  }
`;

export const GradePicture = styled.div`
  width: 100%;
  padding: 30px;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TooltipWrapper = styled.div`
  width: 100%;
  height: 140px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 90px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 80px;
  }
`;

export const Tooltip = styled.div`
  width: 100%;
  height: 100%;
  background: url("../../../../images/tooltip.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding-top: 5px;
  }
`;

export const TooltipText = styled.div`
  font-size: 18px;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const TabsWrapper = styled.div`
  margin-bottom: 34px;

  @media ${breakPoints.tablet} {
    margin-bottom: 20px;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
  }
`;

export const MyTabs = styled(Tabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #0085cb;
    text-shadow: 0 0 0.25px currentcolor;
  }

  .ant-tabs-tab-btn {
    border-color: transparent;
    background: transparent;
    font-size: 18px;
  }

  @media ${breakPoints.tablet} {
    .ant-tabs-tab-btn {
      border-color: transparent;
      background: transparent;
      font-size: 15px;
    }
  }

  @media ${breakPoints.mobile} {
    .ant-tabs-tab-btn {
      border-color: transparent;
      background: transparent;
      font-size: 12px;
    }
  }
`;

export const Records = styled.div`
  width: 100%;
  height: 333px;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid #b5b5b5;
  border-radius: 20px;
  padding: 26px;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    height: 200px;
    padding: 15px;
  }
`;
