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

export default function PurchaseRecords(props) {
  return (
    <Wrapper>
      <Row>
          <Column style={{ width: "7%" }}>no.</Column>
          <Column style={{ width: "33%" }}>상품명</Column>
          <Column style={{ width: "30%" }}>구매 날짜</Column>
          <Column style={{ width: "30%" }}>결제취소</Column>
        </Row>
      <InfiniteScroll>
        {props.PurchasesData?.fetchPurchases.map((el,index)=>(
        <Row key={index}>
          <Column style={{ width: "7%" }}>{index+1}</Column>
          <Column style={{ width: "33%" }}>{el.title}</Column>
          <Column style={{ width: "30%" }}>{el.createdAt}</Column>
          <Column style={{ width: "30%" }}>결제취소</Column>
        </Row>
        ))} 
      </InfiniteScroll>
    </Wrapper>
  );
}
