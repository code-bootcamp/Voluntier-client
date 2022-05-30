import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";
import { useMoveToPage } from "../hooks/useMoveToPage/index";
import { Modal } from "antd";
import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

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
    height: 30px;
    font-size: 10px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const Button = styled.div`
  background-color: #000000;
  color: #ffffff;
  border-radius: 15px;
  padding: 3px 10px 3px 10px;
  cursor: pointer;
`;

const CANCEL_PURCHASE = gql`
  mutation cancelPurchase($purchaseId: String!) {
    cancelPurchase(purchaseId: $purchaseId) {
      id
    }
  }
`;

const FETCH_PURCHASES = gql`
  query fetchPurchases {
    fetchPurchases {
      user {
        name
      }
      product {
        id
        name
      }
      createdAt
      cancelledAt
      usedPoint
    }
  }
`;

interface IPropsPurchaseRecords {
  PurchasesData? : Pick<IQuery,"fetchPurchases">
}

export default function PurchaseRecords(props:IPropsPurchaseRecords) {
  const { moveToPage } = useMoveToPage();
  const [cancelPurchase] = useMutation(CANCEL_PURCHASE);

  const CancelPurchase = (event:MouseEvent<HTMLDivElement>) => {
    try {
      cancelPurchase({
        variables: { purchaseId: (event.target as HTMLDivElement).id },
        refetchQueries: [{ query: FETCH_PURCHASES }],
      });
    } catch (error) {
      Modal.error({ content: "이미 결제가 취소되었습니다." });
    }
  };

  return (
    <Wrapper>
      <RowHead>
        <ColumnHead style={{ width: "7%" }}>no.</ColumnHead>
        <ColumnHead style={{ width: "33%" }}>상품명</ColumnHead>
        <ColumnHead style={{ width: "30%" }}>구매 날짜</ColumnHead>
        <ColumnHead style={{ width: "30%" }}>결제 취소</ColumnHead>
      </RowHead>
        {props.PurchasesData?.fetchPurchases.map((el, index:number) => (
          <Row key={index}>
            <Column style={{ width: "7%" }}>{index + 1}</Column>
            <ColumnHover
              style={{ width: "33%" }}
              onClick={moveToPage(`/products/${el.product.id}`)}
            >
              {el.product.name}
            </ColumnHover>
            <Column style={{ width: "30%" }}>
              {el.createdAt.slice(0, 10)}
            </Column>
            <Column
              style={{
                width: "30%",
              }}
            >
              {el.cancelledAt === null ? (
                <Button id={el.id} onClick={CancelPurchase}>
                  취소하기
                </Button>
              ) : (
                <div>취소완료</div>
              )}
            </Column>
          </Row>
        ))}
    </Wrapper>
  );
}
