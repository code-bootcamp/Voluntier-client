import JellyshopModal from "../../../commons/jellyshop/JellyshopContainer";
import * as S from "./ProductDetailStyles";



export default function ProductDetailUI(props) {
  return (
    <>
      {props.isOpen && (
        <S.MyModal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          closable={false}
          bodyStyle={{
            // height: "600px",
            border: "3px solid #696969",
            borderRadius: "30px",
            backgroundColor: "#E5E5E5",
          }}
          footer={null}
          centered={true}
        >
          <JellyshopModal />
        </S.MyModal>
      )}
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerWrapperLeft>
            <S.TitleWrapper>
              <S.Label>상품명</S.Label>
              <S.ProductName>{props.data?.fetchProduct.name}</S.ProductName>
            </S.TitleWrapper>
            <S.SliderWrapper>
              <div>슬라이더 자리</div>
            </S.SliderWrapper>
            <S.PriceWrapper>
              <S.Label>차감 젤리</S.Label>
              <S.Price>{props.data?.fetchProduct.price}개</S.Price>
            </S.PriceWrapper>
          </S.InnerWrapperLeft>
          <S.InnerWrapperRight>
            <S.Label>상품 이미지</S.Label>
            <S.ImageWrapper>
              <S.Image />
            </S.ImageWrapper>
            <S.Label>상품 정보</S.Label>
            <S.InfoDetail>{props.data?.fetchProduct.details}</S.InfoDetail>
          </S.InnerWrapperRight>
        </S.InnerWrapper>
        <S.ButtonWrapper>
          <S.BuyButton onClick={props.onToggleModal}>젤리 사용하기</S.BuyButton>
          <S.BuyButton onClick={props.ProductEdit}>수정하기</S.BuyButton>
          <S.BuyButton onClick={props.ProductDelete}>삭제하기</S.BuyButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
