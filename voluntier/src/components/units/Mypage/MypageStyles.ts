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
  padding: 50px 24px;

  @media ${breakPoints.tablet} {
    padding: 0px 20px 20px 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 0px 20px 20px 20px;
  }
`;

export const DogBiscuit = styled.div`
  width: 230px;
  height: 82px;
  background: url("../../../../images/UnionBiscuit.png");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 33px;

  @media ${breakPoints.tablet} {
    width: 0px;
    height: 0px;
    color: transparent;
  }

  @media ${breakPoints.mobile} {
    width: 0px;
    height: 0px;
    color: transparent;
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  margin-bottom: 30px;

  @media ${breakPoints.tablet} {
    height: 170px;
    margin-bottom: 10px;
  }

  @media ${breakPoints.mobile} {
    height: 120px;
    margin-bottom: 10px;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileEdit = styled.div`
  color: #0085cb;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const ProfileRightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Grade = styled.div`
  font-family: "GmarketSans";
  font-size: 48px;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;

export const TooltipWrapper = styled.div`
  /* width: 539px; */
  width: 40%;
  height: 106px;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 70px;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 50px;
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
