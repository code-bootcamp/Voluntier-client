import * as S from "./MypageStyles";
import { Tabs } from "antd";
import ProfileEdit from "../../commons/profileEdit/ProfileEditContainer";
import VolunteerRecords from "../../commons/volunteerRecords";
import DonationRecords from "../../commons/donationRecords";
import BoardRecords from "../../commons/boardRecords";
import PurchaseRecords from "../../commons/purchaseRecords";
import { useQuery } from "@apollo/client";
import DibsList from "../../commons/dibsList/index";
import { useEffect, useState } from "react";
import {
  MiniJelly1,
  MiniJelly2,
  MiniJelly3,
  MiniJelly4,
} from "../../commons/myJelly";
import { IPropsMyPageUI } from "./MypageTypes";
import { FETCH_LOGIN_USER } from "./MypageQueries";


const { TabPane } = Tabs;



export default function MypageUI(props:IPropsMyPageUI) {
  const { data } = useQuery(FETCH_LOGIN_USER);
  const [myjelly, setMyjelly] = useState(1);

  useEffect(() => {
    if (
      data?.fetchLoginUser.point > 3000 &&
      data?.fetchLoginUser.point <= 4000
    ) {
      setMyjelly(2);
    }
    if (
      data?.fetchLoginUser.point > 4000 &&
      data?.fetchLoginUser.point <= 5000
    ) {
      setMyjelly(3);
    }
    if (
      data?.fetchLoginUser.point > 5000 &&
      data?.fetchLoginUser.point <= 10000000
    ) {
      setMyjelly(4);
    }
  });

  return (
    <>
      {props.isOpen && (
        <S.MyModal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          closable={false}
          bodyStyle={{
            width: "100%",
            border: "3px solid #696969",
            borderRadius: "30px",
            backgroundColor: "#E5E5E5",
            padding: "30px",
          }}
          footer={null}
          centered={true}
        >
          <ProfileEdit setIsOpen={props.setIsOpen} />
        </S.MyModal>
      )}
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.ProfileImageWrapper>
            {data?.fetchLoginUser.profileImageUrl ? (
              <S.ProfileImage
                src={`https://storage.googleapis.com/${data?.fetchLoginUser.profileImageUrl}`}
              />
            ) : (
              <S.ProfileImage src={"/images/Group 8.png"} />
            )}
            <S.ProfileEdit onClick={props.onToggleModal}>
              ????????? ????????????
            </S.ProfileEdit>
          </S.ProfileImageWrapper>
          <S.ProfileRightWrapper>
            <S.GradeDisplay>
              <S.GradeContents>
                {data?.fetchLoginUser.name}?????? <br />
                {myjelly === 1 && "??????????????????"}
                {myjelly === 2 && "??????????????????"}
                {myjelly === 3 && "??????????????????"}
                {myjelly === 4 && "??????????????????"}
                &nbsp;??????????????????!
              </S.GradeContents>
              <S.TooltipWrapper>
                <S.Tooltip>
                  <S.TooltipText>
                    ???????????? {data?.fetchLoginUser.donationAmount}?????????
                    ????????????
                  </S.TooltipText>
                  <S.TooltipText>
                    {data?.fetchLoginUser.serviceTime}?????? ????????? ??? ?????????
                    ??????!
                  </S.TooltipText>
                  <S.TooltipText>
                    ???????????? ?????? ???????????? {data?.fetchLoginUser.point}
                  </S.TooltipText>
                </S.Tooltip>
              </S.TooltipWrapper>
            </S.GradeDisplay>
            <S.GradePicture>
              {myjelly === 1 && <MiniJelly1 />}
              {myjelly === 2 && <MiniJelly2 />}
              {myjelly === 3 && <MiniJelly3 />}
              {myjelly === 4 && <MiniJelly4 />}
            </S.GradePicture>
          </S.ProfileRightWrapper>
        </S.ProfileWrapper>
        <S.TabsWrapper>
          <S.MyTabs defaultActiveKey="1">
            <TabPane tab="????????????" key="1">
              <S.Records>
                <VolunteerRecords EnrollsData={props.EnrollsData} />
              </S.Records>
            </TabPane>
            <TabPane tab="????????????" key="2">
              <S.Records>
                <DonationRecords DonationData={props.DonationData} />
              </S.Records>
            </TabPane>
            <TabPane tab="????????????" key="3">
              <S.Records>
                <BoardRecords BoardUserData={props.BoardUserData} />
              </S.Records>
            </TabPane>
          </S.MyTabs>
        </S.TabsWrapper>
        <S.TabsWrapper>
          <S.MyTabs defaultActiveKey="1">
            <TabPane tab="?????? ????????????" key="1">
              <S.Records>
                <PurchaseRecords PurchasesData={props.PurchasesData} />
              </S.Records>
            </TabPane>
            <TabPane tab="?????????" key="2">
              <S.Records>
                <DibsList DibsData={props.DibsData} />
              </S.Records>
            </TabPane>
          </S.MyTabs>
        </S.TabsWrapper>
      </S.Wrapper>
    </>
  );
}
