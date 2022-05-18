import { Modal } from "antd";
import * as S from "./JellyshopStyles";
import DaumPostcode from "react-daum-postcode";
import useAuth from "../hooks/useAuth";

export default function JellyshopModalUI(props) {
  useAuth()
  return (
    <>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.UpperWrapper>
          <S.UpperLeftWrapper>
            <S.TitleWrapper>
              <S.Label>상품명</S.Label>
              <S.ProductName></S.ProductName>
            </S.TitleWrapper>
            <S.BigImageWrapper>큰 이미지 자리</S.BigImageWrapper>
            <S.SmallImageWrapper>
              <S.SmallImage />
            </S.SmallImageWrapper>
          </S.UpperLeftWrapper>
          <S.UpperRightWrapper>
            <S.Label style={{ marginBottom: "30px" }}>배송지 정보</S.Label>
            <S.SmallLabel>수령인</S.SmallLabel>
            <S.Input />
            <S.SmallLabel>연락처</S.SmallLabel>
            <S.Input />
            <S.SmallLabel>배송지 주소</S.SmallLabel>
            <S.ZipcodeWrapper>
              <S.Zipcode value={props.zipcode} readOnly={true} />
              <S.SearchButton onClick={props.onClickModal}>
                우편번호
              </S.SearchButton>
            </S.ZipcodeWrapper>
            <S.Input
              style={{
                marginBottom: "8px",
                paddingLeft: "10px",
              }}
              value={props.address}
              readOnly={true}
            />
            <S.Input style={{ marginBottom: "30px" }} />
            <S.PriceWrapper>
              <S.Label>필요한 젤리</S.Label>
              <S.Price>{} 개</S.Price>
            </S.PriceWrapper>
          </S.UpperRightWrapper>
        </S.UpperWrapper>
        <S.BuyButton>젤리 사용하기</S.BuyButton>
      </S.Wrapper>
    </>
  );
}
