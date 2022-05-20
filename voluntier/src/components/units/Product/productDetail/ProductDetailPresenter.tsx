import JellyshopModal from "../../../commons/jellyshop/JellyshopContainer";
import * as S from "./ProductDetailStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IPropsProductDetailUI } from "./ProductDetailTypes";
import { gql, useQuery } from "@apollo/client";

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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
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
          <S.InnerWrapperLeft>
            <S.TitleWrapper>
              <S.Label>상품명</S.Label>
              <S.ProductName>{props.data?.fetchProduct.name}</S.ProductName>
            </S.TitleWrapper>
          
             <S.MySlider {...settings}>
             {props.data?.fetchProduct.productImage.map((el,index)=>(
              <div key={index}>
              <S.Wow src={`https://storage.googleapis.com/${el.imageUrl}`}/>
              </div>
              ))}
              </S.MySlider>

            <S.PriceWrapper>
              <S.Label>차감 젤리</S.Label>
              <S.Price>{props.data?.fetchProduct.price}개</S.Price>
            </S.PriceWrapper>
          </S.InnerWrapperLeft>
          <S.InnerWrapperRight>
            <S.Label>상품 이미지</S.Label>
            <S.ImageWrapper>
            {props.data?.fetchProduct.productImage.map((el,index)=>(
              <div key={index}>
              <S.Image src={`https://storage.googleapis.com/${el.imageUrl}`}/>
              </div>
              ))}
            </S.ImageWrapper>
            <S.Label>상품 정보</S.Label>
            <S.InfoDetail>{props.data?.fetchProduct.details}</S.InfoDetail>
          </S.InnerWrapperRight>
        </S.InnerWrapper>
        {UserData?.fetchLoginUser.isAdmin?
        <S.ButtonWrapper>
        <S.BuyButton onClick={props.ProductEdit}>수정하기</S.BuyButton>
        <S.BuyButton onClick={props.ProductDelete}>삭제하기</S.BuyButton>
        </S.ButtonWrapper>
        :
        <S.ButtonWrapper>
        <S.BuyButton onClick={props.onToggleModal}>젤리 사용하기</S.BuyButton>
        </S.ButtonWrapper>}
      </S.Wrapper>
    </>
  );
}
