import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../commons/styles/Media";

const Wrapper = styled.div`
  width: 100%;
  height: 203px;
`;

const Title = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Column = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  @media ${breakPoints.tablet} {
    font-size: 8px;
  }

  @media ${breakPoints.mobile} {
    font-size: 6px;
  }
`;

const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;

  @media ${breakPoints.tablet} {
    width: 15px;
    height: 15px;
  }

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;

const CompleteButton = styled.button`
  width: 99px;
  height: 31px;
  color: #ffffff;
  font-size: 13px;
  background: #000000;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export default function VolunteerList(props) {
  return (
    <Wrapper>
      <Row>
        <Title>신청자 명단</Title>
      </Row>
      <ListWrapper>
        <InfiniteScroll>
          {props.enrolldata?.fetchEnrollsByBoardId.map((el: any)=>(


            <Row key={el}>
            <Column style={{ width: "30%" }}>{el.user.name}</Column>
            <Column style={{ width: "30%" }}>{el.user.phone}</Column>
            <Column style={{ width: "20%", color: "#FF3800" }}>신청중</Column>
            {props.boarddata?.user.id === props.Userdata?.fetchLoginUser.id
              ?
                <>
                <Column style={{ width: "5%" }}>
                <DeleteIcon src="/images/boardWrite/delete.png" />
                </Column>
                <Column style={{ width: "25%" }}>
                <CompleteButton>봉사완료</CompleteButton>
                </Column>
                </>
            :
            <></>
            }
          </Row>
          ))}
        </InfiniteScroll>
      </ListWrapper>
    </Wrapper>
  );
}
