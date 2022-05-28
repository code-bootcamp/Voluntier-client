import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";
import { IQuery } from "../../../commons/types/generated/types";
import { useMoveToPage } from "../hooks/useMoveToPage/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const RowHead = styled.div`
  height: 40px;
  display: flex;
  font-weight: 800;
  border-bottom: 1px solid #000000;

  @media ${breakPoints.tablet} {
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
    font-size: 10px;
  }
`;

const ColumnHead = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;

  @media ${breakPoints.tablet} {
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
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
    font-size: 10px;
  }
`;

const ColumnHover = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #0085cb;
    cursor: pointer;
  }

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

interface IPropsVolunteerRecords {
  EnrollsData? : Pick<IQuery,"fetchEnrollsByUserId">
}

export default function VolunteerRecords(props:IPropsVolunteerRecords) {
  const { moveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <RowHead>
        <ColumnHead style={{ width: "7%" }}>no.</ColumnHead>
        <ColumnHead style={{ width: "68%" }}>봉사단체</ColumnHead>
        <ColumnHead style={{ width: "25%" }}>봉사날짜</ColumnHead>
        <ColumnHead style={{ width: "25%" }}>봉사상태</ColumnHead>
      </RowHead>
        {props.EnrollsData?.fetchEnrollsByUserId.map((el, index) => (
          <Row key={index}>
            <Column style={{ width: "7%" }}>{index + 1}</Column>
            <ColumnHover
              style={{ width: "68%" }}
              onClick={moveToPage(`/boards/${el.board.id}`)}
            >
              {el.board.centerName}
            </ColumnHover>
            <Column style={{ width: "25%" }}>
              {el.createdAt.slice(0, 10)}
            </Column>
            <Column style={{ width: "25%" }}>
              {el.status === "ENROLL" ? "봉사신청중" : "봉사완료"}
            </Column>
          </Row>
        ))}
    </Wrapper>
  );
}
