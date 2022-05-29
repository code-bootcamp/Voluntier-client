import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { MouseEvent } from "react";
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
    font-size: 12px;
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
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

const DELETE_DIBS = gql`
  mutation deleteDibs($productId: String!) {
    deleteDibs(productId: $productId)
  }
`;
const FETCH_USER_DIBS = gql`
  query fetchLogInUserDibs {
    fetchLogInUserDibs {
      id
      product {
        id
        name
        price
      }
    }
  }
`;
interface IPropsDibsList {
  DibsData?: Pick<IQuery, "fetchLogInUserDibs">;
}

export default function DibsList(props: IPropsDibsList) {
  const { moveToPage } = useMoveToPage();
  const [deleteDibs] = useMutation(DELETE_DIBS);
  const DeleteDibs = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      const result = await deleteDibs({
        variables: { productId: (event.target as HTMLDivElement).id },
        refetchQueries: [{ query: FETCH_USER_DIBS }],
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      <RowHead style={{ fontWeight: "800", borderBottom: "1px solid #000000" }}>
        <ColumnHead style={{ width: "10%" }}>no.</ColumnHead>
        <ColumnHead style={{ width: "30%" }}>상품명</ColumnHead>
        <ColumnHead style={{ width: "30%" }}>상품가격</ColumnHead>
        <ColumnHead style={{ width: "30%" }}>찜취소</ColumnHead>
      </RowHead>
      {props.DibsData?.fetchLogInUserDibs.map((el, index) => (
        <Row key={index}>
          <Column style={{ width: "10%" }}>{index + 1}</Column>
          <ColumnHover
            style={{ width: "30%" }}
            onClick={moveToPage(`products/${el.product.id}`)}
          >
            {el.product.name}
          </ColumnHover>
          <Column style={{ width: "30%" }}>{el.product.price}</Column>
          <Button id={el.id} onClick={DeleteDibs} style={{ width: "30%" }}>
            취소하기
          </Button>
        </Row>
      ))}
    </Wrapper>
  );
}
