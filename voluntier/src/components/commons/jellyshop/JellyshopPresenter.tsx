import * as S from "./JellyshopStyles";
import DaumPostcode from "react-daum-postcode";
import useAuth from "../hooks/useAuth";

import { Modal } from "antd";
import { IPropsJellyshopModalUI } from "./JellyshopTypes";







export default function JellyshopModalUI(props:IPropsJellyshopModalUI) {
  useAuth();
  

  
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onTogglePostModal}
          onCancel={props.onTogglePostModal}
          closable={false}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <form onSubmit={props.handleSubmit(props.CreatePurchase)}>
        <S.Wrapper>
          <S.UpperWrapper>
            <S.UpperLeftWrapper>
              <S.TitleWrapper>
                <S.Label>상품명</S.Label>
                <S.ProductName></S.ProductName>
              </S.TitleWrapper>
              <S.BigImageWrapper>
                <S.BigImage
                  src={`https://storage.googleapis.com/${props.data?.fetchProduct.productImage[0].imageUrl}`}
                />
              </S.BigImageWrapper>
            </S.UpperLeftWrapper>
            <S.UpperRightWrapper>
              <S.Label style={{ marginBottom: "30px" }}>배송지 정보</S.Label>
              <S.SmallLabel>수령인</S.SmallLabel>
              <S.Input {...props.register("receiverName")} />
              <S.SmallLabel>연락처</S.SmallLabel>
              <S.Input {...props.register("receiverPhone")} />
              <S.SmallLabel>배송지 주소</S.SmallLabel>
              <S.ZipcodeWrapper>
                <S.Zipcode value={props.zipcode} readOnly={true} />
                <S.SearchButton type="button" onClick={props.onClickModal}>
                  우편번호
                </S.SearchButton>
              </S.ZipcodeWrapper>
              <S.Input
                style={{
                  marginBottom: "8px",
                  paddingLeft: "10px",
                }}
                onChange={props.setValue("address", props.address || "")}
                value={props.address}
                readOnly={true}
              />
              <S.Input
                {...props.register("addressDetail")}
                style={{ marginBottom: "30px" }}
              />
              <S.PriceWrapper>
                <S.Label>필요한 젤리</S.Label>
                <S.Price>{Number(props.data?.fetchProduct.price)} 개</S.Price>
              </S.PriceWrapper>
            </S.UpperRightWrapper>
          </S.UpperWrapper>
          <S.BuyButton>젤리 사용하기</S.BuyButton>
        </S.Wrapper>
      </form>
    </>
  );
}
