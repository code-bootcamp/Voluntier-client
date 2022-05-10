import Header from "../../../commons/layout/header/HeaderContainer";
import * as S from "./MainStyles";

export default function MainUI() {
  return (
    <S.Wrapper>
      <S.UpperWrapper>
        <Header />
        {/* 캐러셀 자리 */}
      </S.UpperWrapper>
      <S.CategoryWrapper>
        <S.Category1 />
        <S.Category2 />
        <S.Category3 />
        <S.Category4 />
      </S.CategoryWrapper>
    </S.Wrapper>
  );
}
