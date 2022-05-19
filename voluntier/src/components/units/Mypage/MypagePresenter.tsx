import * as S from "./MypageStyles";
import { Tabs } from "antd";
import ProfileEdit from "../../commons/profileEdit/ProfileEditContainer";
import VolunteerRecords from "../../commons/volunteerRecords";
import DonationRecords from "../../commons/donationRecords";
import BoardRecords from "../../commons/boardRecords";
import PurchaseRecords from "../../commons/purchaseRecords";
import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGIN = gql`
    query fetchLoginUser{
        fetchLoginUser{
            id
            name
            email
            phone
            isAdmin
            profileImageUrl
            donationAmount
            point
            serviceTime
            provider
        }
    }
`

const { TabPane } = Tabs;

export default function MypageUI(props) {
  const {data} = useQuery(FETCH_USER_LOGIN)
  console.log(data)
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
          <ProfileEdit />
          <S.buttonWrapper>
            <S.EditButton onClick={props.onToggleModal}>수정완료</S.EditButton>
          </S.buttonWrapper>
        </S.MyModal>
      )}
      <S.Wrapper>
        <S.DogBiscuit>My Page</S.DogBiscuit>
        <S.ProfileWrapper>
          <S.ProfileImageWrapper>
            <S.ProfileImage />
            <S.ProfileEdit onClick={props.onToggleModal}>
              프로필 수정하기
            </S.ProfileEdit>
          </S.ProfileImageWrapper>
          <S.ProfileRightWrapper>
            <S.Grade>
              {data?.fetchLoginUser.name}님은 {}등급이시네요!
            </S.Grade>
            <S.TooltipWrapper>
              <S.Tooltip>
                <S.TooltipText>지금까지 {data?.fetchLoginUser.donationAmount}젤리를 후원하고</S.TooltipText>
                <S.TooltipText>{data?.fetchLoginUser.serviceTime}시간 봉사를 한 당신은 최고!</S.TooltipText>
              </S.Tooltip>
            </S.TooltipWrapper>
          </S.ProfileRightWrapper>
        </S.ProfileWrapper>
        <S.TabsWrapper>
          <S.MyTabs defaultActiveKey="1">
            <TabPane tab="봉사내역" key="1">
              <S.Records>
                <VolunteerRecords />
              </S.Records>
            </TabPane>
            <TabPane tab="후원내역" key="2">
              <S.Records>
                <DonationRecords />
              </S.Records>
            </TabPane>
            <TabPane tab="작성내역" key="3">
              <S.Records>
                <BoardRecords />
              </S.Records>
            </TabPane>
          </S.MyTabs>
        </S.TabsWrapper>
        <S.Label>젤리 사용내역</S.Label>
        <S.Records>
          <PurchaseRecords />
        </S.Records>
      </S.Wrapper>
    </>
  );
}
