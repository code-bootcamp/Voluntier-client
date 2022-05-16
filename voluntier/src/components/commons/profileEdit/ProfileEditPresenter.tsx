import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapperLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid red;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

const ProfileImageEditButton = styled.button`
  width: 90px;
  height: 40px;
  color: #ffffff;
  background-color: #0085cb;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 75px;
    height: 30px;
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 25px;
    font-size: 10px;
  }
`;

const WrapperRight = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    padding-top: 25px;
  }

  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

const Input = styled.input`
  height: 50px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid #b5b5b5;

  @media ${breakPoints.tablet} {
    height: 40px;
    font-size: 15px;
    margin-bottom: 15px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
    margin-bottom: 15px;
  }
`;

export default function ProfileEditUI() {
  return (
    <Wrapper>
      <WrapperLeft>
        <ProfileImageWrapper></ProfileImageWrapper>
        <ProfileImageEditButton>사진 변경</ProfileImageEditButton>
      </WrapperLeft>
      <WrapperRight>
        <Input placeholder="이름"></Input>
        <Input placeholder="새로운 비밀번호"></Input>
        <Input placeholder="비밀번호 확인"></Input>
      </WrapperRight>
    </Wrapper>
  );
}
