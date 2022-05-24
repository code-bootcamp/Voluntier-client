import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
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
    mutation deleteDibs($productId:String!){
        deleteDibs(productId:$productId)
    }
`
const FETCH_USER_DIBS = gql`
    query fetchLogInUserDibs{
      fetchLogInUserDibs{
        id
        product{
          id
          name
          price
        }
      }
    }
`
export default function DibsList(props) {
    const [deleteDibs] = useMutation(DELETE_DIBS)
    const DeleteDibs = async(event) => {
        try{
        const result = await deleteDibs({
            variables:{productId:event.target.id},
            refetchQueries:[{query:FETCH_USER_DIBS}]
        })
        console.log(result)
        }catch(error){
            Modal.error({content:error.message})
        }
    }

  return (
    <Wrapper>
      <Row>
          <Column style={{ width: "10%" }}>no.</Column>
          <Column style={{ width: "30%" }}>상품명</Column>
          <Column style={{ width: "30%" }}>상품가격</Column>
          <Column style={{ width: "30%" }}>찜취소</Column>
        </Row>
      <InfiniteScroll>
        {props.DibsData?.fetchLogInUserDibs.map((el,index)=>(
        <Row key={index}>
          <Column style={{ width: "10%" }}>{index+1}</Column>
          <Column style={{ width: "30%" }}>{el.product.name}</Column>
          <Column style={{ width: "30%" }}>{el.product.price}</Column>
          <Button id={el.id} onClick={DeleteDibs} style={{ width: "30%" }}>취소하기</Button>
        </Row>
        ))} 
      </InfiniteScroll>
    </Wrapper>
  );
}
