import * as S from "./ProductWriteStyles";

export default function ProductWriteUI() {
  return (
    <S.Wrapper>
      <S.Title>젤리샵 상품 등록</S.Title>
      <S.InnerWrapper>
        <S.Form>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <S.Input />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품가격</S.Label>
            <S.Input />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품정보</S.Label>
            <S.Input />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 이미지 등록</S.Label>
          </S.InputWrapper>
          <div style={{ color: "red" }}>이미지 업로드 컴포넌트 자리</div>
          <S.ButtonWrapper>
            <S.Button type="submit">등록하기</S.Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
