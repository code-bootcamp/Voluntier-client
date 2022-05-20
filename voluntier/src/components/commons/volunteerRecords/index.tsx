import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../commons/styles/Media";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;

  @media ${breakPoints.tablet} {
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
  }
`;

const Column = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export default function VolunteerRecords(props) {
  return (
    <Wrapper>
      <Row>
          <Column style={{ width: "7%" }}>no.</Column>
          <Column style={{ width: "68%" }}>봉사단체</Column>
          <Column style={{ width: "25%" }}>봉사날짜</Column>
          <Column style={{ width: "25%" }}>봉사상태</Column>
        </Row>
      <InfiniteScroll>
        {props.EnrollsData?.fetchEnrollsByUserId.map((el,index)=>(
        <Row key={index}>
          <Column style={{ width: "7%" }}>{index+1}</Column>
          <Column style={{ width: "68%" }}>{el.board.centerName}</Column>
          <Column style={{ width: "25%" }}>{el.createdAt.slice(0,10)}</Column>
          <Column style={{ width: "25%" }}>{el.status === "ENROLL" ? "봉사신청중":"봉사완료"}</Column>
        </Row>
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
}
