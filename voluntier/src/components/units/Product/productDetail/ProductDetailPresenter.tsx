import JellyshopModal from "../../../commons/jellyshop/JellyshopContainer";
import * as S from "./ProductDetailStyles";
import { IPropsProductDetailUI } from "./ProductDetailTypes";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";
import { Tooltip } from "@mui/material";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../Mypage/MypageQueries";

const ToastUIViewer = dynamic(
  () => import("../../../commons/texteditor/viewer"),
  { ssr: false }
);


export default function ProductDetailUI(props: IPropsProductDetailUI) {
  const { data: UserData } =
    useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  return (
    <S.Body>
      {!props.isClosed && (
        <S.MyModal
          visible={true}
          closable={false}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
          bodyStyle={{
            border: "3px solid #696969",
            borderRadius: "30px",
            backgroundColor: "white",
          }}
          footer={null}
          centered={true}
        >
          <JellyshopModal
            UserData={UserData}
            data={props.data}
            setIsClosed={props.setIsClosed}
          />
        </S.MyModal>
      )}
      <S.Wrapper>
        <S.InnerWrapper>
          <div></div>
          <S.InnerDog>
            <S.DogMention>골랐냥? 담으라개!</S.DogMention>
          </S.InnerDog>
          <S.InnerWrapperHead>
            <S.ProductImg
              src={`https://storage.googleapis.com/${props.data?.fetchProduct.productImage[0].imageUrl}`}
            />
            <S.TitlePriceWrapper>
              <S.TitleWrapper>
                <S.DogFootImg src="/images/jellyshop/jellypad.png" />
                <S.TitleLabel>{props.data?.fetchProduct.name}</S.TitleLabel>
              </S.TitleWrapper>
              <S.PriceWrapper>
                <S.Label>젤리 원가</S.Label>
                <S.Price style={{ textDecoration: "line-through" }}>
                  {Number(props.data?.fetchProduct.price)/10*11} 젤리
                </S.Price>
                <S.Price
                  style={{
                    color: "#FF6A9E",
                    fontSize: "10px",
                    lineHeight: "25px",
                  }}
                >
                  {Number(props.data?.fetchProduct.price) / 10}젤리할인
                </S.Price>
              </S.PriceWrapper>
              <S.PriceWrapper>
                <S.Label>바로 구매</S.Label>
                <S.Price style={{ color: "#FF6A9E" }}>
                  {props.data?.fetchProduct.price} 젤리
                </S.Price>
              </S.PriceWrapper>
              <S.PriceWrapper>
                <S.Label>선물포장</S.Label>
                <S.Icon src="../../../../images/jellyshop/present-box.png" />
                <S.Price style={{ color: "#FF6A9E" }}>포장가능</S.Price>
                <Tooltip placement="right" title="상자 포장, 필름 포장">
                  <S.Detail>포장 종류 보기 » </S.Detail>
                </Tooltip>
              </S.PriceWrapper>
              <S.PriceWrapper>
                <S.Label>배송구분</S.Label>
                <S.Rocket src="../../../../images/jellyshop/rocket.png" />
                <S.Price>젤리로켓! </S.Price>
                <S.RocketDetail> 황금젤리 바로출발! </S.RocketDetail>
              </S.PriceWrapper>
              <S.ButtonWrapper>
                <S.PickWrapper>
                  <S.PickButton
                    id={props.data?.fetchProduct.id}
                    onClick={props.CreateDibs}
                  >
                    <S.ButtonImage src="/catImg.png" />
                    찜하기
                  </S.PickButton>
                  <S.BuyButton onClick={props.onToggleModal}>
                    <S.ButtonImage src="/DogImg.png" />
                    젤리사용
                  </S.BuyButton>
                </S.PickWrapper>
              </S.ButtonWrapper>
            </S.TitlePriceWrapper>
          </S.InnerWrapperHead>
          <S.InnerWrapperRight>
            <S.InfoLabel>상품 정보</S.InfoLabel>
            {props.data ? <ToastUIViewer productData={props.data} /> : <></>}
          </S.InnerWrapperRight>
        </S.InnerWrapper>
        {UserData?.fetchLoginUser.isAdmin && (
          <>
            <S.BuyButton onClick={props.ProductEdit}>수정하기</S.BuyButton>
            <S.BuyButton onClick={props.ProductDelete}>삭제하기</S.BuyButton>
          </>
        )}
      </S.Wrapper>
    </S.Body>
  );
}
