import JellyshopModal from "../../../commons/jellyshop/JellyshopContainer";
import * as S from "./ProductDetailStyles";
import { IPropsProductDetailUI } from "./ProductDetailTypes";
import { gql, useQuery } from "@apollo/client";
import dynamic from 'next/dynamic'

const ProductDetailViewer = dynamic(()=>import('../../../commons/texteditor/viewer/productViewer'),{ssr:false})
const FETCH_USER_LOGIN = gql`
    query fetchLoginUser{
        fetchLoginUser{
            id
            name
            email
            phone
            isAdmin
        }
    }
`

export default function ProductDetailUI(props:IPropsProductDetailUI) {
  const {data:UserData} = useQuery(FETCH_USER_LOGIN)

  return (
    <>
      {props.isOpen && (
        <S.MyModal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          closable={false}
          bodyStyle={{
            border: "3px solid #696969",
            borderRadius: "30px",
            backgroundColor: "#E5E5E5",
          }}
          footer={null}
          centered={true}
        >
          <JellyshopModal UserData={UserData} data={props.data}/>
        </S.MyModal>
      )}
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerWrapperHead>
            <S.Wow src={`https://storage.googleapis.com/${props.data?.fetchProduct.productImage[0].imageUrl}`}/>
            <S.Mark></S.Mark>
            <S.TitlePriceWrapper>
                <S.TitleWrapper>
                  <img style={{width:"35px",height:"35px",marginRight:"15px"}} src="/nameJelly.png"/>
                  <S.Label style={{marginBottom:"10px"}}>{props.data?.fetchProduct.name}</S.Label>
                </S.TitleWrapper>
                <S.NameMark></S.NameMark>
                <S.Label style={{marginLeft:"50px"}}>젤리님들을 위한 Voluntier 오픈 할인</S.Label>
                <S.PriceWrapper>
                  <S.Price style={{color:"#FF6A9E"}}>10% {(props.data?.fetchProduct.price)/10}젤리 특가</S.Price>
                </S.PriceWrapper>
                <S.PriceWrapper>
                  <S.Label>선물포장</S.Label>
                  <S.Price style={{color:"#FF6A9E"}}>예쁜젤리포장</S.Price>
                </S.PriceWrapper>
                <S.PriceWrapper>
                  <S.Label>배송구분</S.Label>
                  <S.Price>젤리배송</S.Price>
                </S.PriceWrapper>
                <S.PriceWrapper>
                  <S.Label>차감 젤리</S.Label>
                  <S.Price>{props.data?.fetchProduct.price} 젤리</S.Price>
                </S.PriceWrapper>
                <S.PickWrapper>
                  <S.PickButton>
                    <img style={{width:"70px",height:"80px",marginRight:"15px"}} src="/catImg.png"/>
                    찜하기
                  </S.PickButton>
                  <S.ButtonWrapper>
                    <S.BuyButton onClick={props.onToggleModal}>
                    <img style={{width:"90px",height:"80px",marginRight:"15px"}} src="/DogImg.png"/>
                      젤리사용
                    </S.BuyButton>
                  </S.ButtonWrapper>
                </S.PickWrapper>
            </S.TitlePriceWrapper>
          </S.InnerWrapperHead>
          <S.InnerWrapperRight>
            <S.Label>상품 정보</S.Label>
            {props.data?
            <ProductDetailViewer data={props.data}/>
            :
            <></>
          }
          </S.InnerWrapperRight>
        </S.InnerWrapper>
        {UserData?.fetchLoginUser.isAdmin &&(
        <S.ButtonWrapper>
        <S.BuyButton onClick={props.ProductEdit}>수정하기</S.BuyButton>
        <S.BuyButton onClick={props.ProductDelete}>삭제하기</S.BuyButton>
        </S.ButtonWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
