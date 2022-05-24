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
    <S.Body>
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
          <S.InnerDog>
            <S.DogMention>골랐냥<br/>
            담아라멍
            </S.DogMention>
          </S.InnerDog>
          <S.InnerWrapperHead>
            <S.ProductImg src={`https://storage.googleapis.com/${props.data?.fetchProduct.productImage[0].imageUrl}`}/>
            <S.TitlePriceWrapper>
                <S.TitleWrapper>
                  <S.DogFootImg src="/nameJelly.png"/>
                  <S.TitleLabel>{props.data?.fetchProduct.name}</S.TitleLabel>
                </S.TitleWrapper>
                <S.NameMark></S.NameMark>
                <S.PriceWrapper>
                <S.Label>젤리 원가</S.Label>
                <S.Price style={{textDecoration:"line-through"}}>{props.data?.fetchProduct.price} 젤리</S.Price>
                  <S.Price style={{color:"#FF6A9E", fontSize:"10px", lineHeight:"25px"}}>{(props.data?.fetchProduct.price)/10}젤리할인</S.Price>
                </S.PriceWrapper>
                <S.PriceWrapper>
                <S.Label>바로 구매</S.Label>
                <S.Price style={{color:"#FF6A9E"}}>{props.data?.fetchProduct.price/10*9 } 젤리</S.Price>
                </S.PriceWrapper>
                <S.PriceWrapper>
                  <S.Label>선물포장</S.Label>
                  <S.Icon src="../../../../images/jellyshop/present-box.png"/>
                  <S.Price style={{color:"#FF6A9E"}}>포장가능</S.Price>
                  <S.Detail>포장 종류 보기 > </S.Detail>
                </S.PriceWrapper>
                <S.PriceWrapper>
                  <S.Label>배송구분</S.Label>
                  <S.Rocket src="../../../../images/jellyshop/rocket.png"/>
                  <S.Price>젤리로켓! </S.Price>
                  <S.RocketDetail> 황금젤리 바로출발! </S.RocketDetail>
                </S.PriceWrapper>
                <S.PickWrapper>
                  <S.PickButton id={props.data?.fetchProduct.id} onClick={props.CreateDibs}>
                    <img style={{width:"30px",height:"35px",marginRight:"15px"}} src="/catImg.png"/>
                    찜하기
                  </S.PickButton>

                    <S.BuyButton onClick={props.onToggleModal}>
                    <S.DogImg src="/DogImg.png"/>
                      젤리사용
                    </S.BuyButton>

                </S.PickWrapper>
            </S.TitlePriceWrapper>
          </S.InnerWrapperHead>
          <S.InnerWrapperRight>
            <S.Label style={{fontSize:"25px"}}>상품 정보</S.Label>
            {props.data?
            <ProductDetailViewer data={props.data}/>
            :
            <></>
          }
          </S.InnerWrapperRight>
        </S.InnerWrapper>
        {UserData?.fetchLoginUser.isAdmin &&(
          <>
        <S.BuyButton onClick={props.ProductEdit}>수정하기</S.BuyButton>
        <S.BuyButton onClick={props.ProductDelete}>삭제하기</S.BuyButton>
          </>

        )}
      </S.Wrapper>
    </S.Body>
  );
}
