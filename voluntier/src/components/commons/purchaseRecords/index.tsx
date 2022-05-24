import { gql, useMutation } from "@apollo/client";
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

const CANCEL_PURCHASE = gql`
  mutation cancelPurchase($purchaseId: String!){
    cancelPurchase(purchaseId: $purchaseId){
      id
    }
  }
`

const FETCH_PURCHASES = gql`
  query fetchPurchases{
    fetchPurchases{
      user{
        name
      }
      product{
        id
        name
      }
      createdAt
      usedPoint
    }
  }
`

export default function PurchaseRecords(props) {
  const [cancelPurchase] = useMutation(CANCEL_PURCHASE)

  const CancelPurchase = (event) => {
    const result = cancelPurchase({
      variables:{purchaseId:event.target.id},
      refetchQueries:[{query:FETCH_PURCHASES}]
    })
    console.log(result)
  }

  return (
    <Wrapper>
      <Row>
          <Column style={{ width: "7%" }}>no.</Column>
          <Column style={{ width: "33%" }}>상품명</Column>
          <Column style={{ width: "30%" }}>구매 날짜</Column>
          <Column style={{ width: "30%" }}>결제상태</Column>
        </Row>
      <InfiniteScroll>
        {props.PurchasesData?.fetchPurchases.map((el,index)=>(
        <Row key={index}>
          <Column style={{ width: "7%" }}>{index+1}</Column>
          <Column style={{ width: "33%" }}>{el.product.name}</Column>
          <Column style={{ width: "30%" }}>{el.createdAt.slice(0,10)}</Column>
          <Column id={el.id} onClick={CancelPurchase} style={{ width: "30%" }}>{el.cancelledAt? "결제취소":"결제완료"}</Column>
        </Row>
        ))} 
      </InfiniteScroll>
    </Wrapper>
  );
}
