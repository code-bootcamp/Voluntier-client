import * as S from "./ProductListStyles";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { IProduct } from "../../../../commons/types/generated/types";
import { FETCH_LOGIN_USER } from "../../Mypage/MypageQueries";

interface IPropsProductListUI {
  data: any;
  MoveProduct: (event: MouseEvent<HTMLImageElement>) => void;
}


export default function ProductListUI(props: IPropsProductListUI) {
  const { moveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_LOGIN_USER);
  return (
    <>
      <S.Wrapper>
        <S.Banner></S.Banner>
        <S.TitleWrapper>
          <S.Title></S.Title>
        </S.TitleWrapper>
        <S.Contents>
          {props.data?.fetchProducts.map((el: IProduct) => (
            <S.ProductWrapper key={el.id}>
              <S.ProductImage
                onClick={props.MoveProduct}
                id={el.id}
                src={`https://storage.googleapis.com/${el.productImage[0]?.imageUrl}`}
              />
              <S.ProductName>{el.name}</S.ProductName>
              <>
                <S.ProductPrice>{el.price}젤리</S.ProductPrice>
                <S.ProductRealPrice>
                  {(el.price / 10) * 9}젤리
                </S.ProductRealPrice>
              </>
            </S.ProductWrapper>
          ))}
        </S.Contents>
        {data?.fetchLoginUser.isAdmin ? (
          <S.Button onClick={moveToPage("/products/new")}>상품등록</S.Button>
        ) : (
          <></>
        )}
      </S.Wrapper>
    </>
  );
}
