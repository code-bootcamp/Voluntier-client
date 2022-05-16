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

export default function PurchaseRecords() {
  return (
    <Wrapper>
      <InfiniteScroll>
        <Row>
          <Column style={{ width: "7%" }}>no.</Column>
          <Column style={{ width: "33%" }}>상품명 자리</Column>
          <Column style={{ width: "30%" }}>날짜 자리</Column>
          <Column style={{ width: "30%" }}>배송상태 자리</Column>
        </Row>
      </InfiniteScroll>
    </Wrapper>
  );
}
