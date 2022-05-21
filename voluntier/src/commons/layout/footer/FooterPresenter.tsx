import * as S from "./FooterStyles";

export default function FooterUI() {
  return (
    <S.Wrapper>
      <S.InfoWrapper>
        <S.InfoInnerWrapper style={{ marginRight: "30px" }}>
          <S.Label>사업자번호</S.Label>
          <S.Detail>000-00-00000</S.Detail>
        </S.InfoInnerWrapper>
        <S.InfoInnerWrapper>
          <S.Label>전화번호</S.Label>
          <S.Detail>02-000-0000</S.Detail>
        </S.InfoInnerWrapper>
        <S.InfoInnerWrapper>
          <S.Label>사업자명</S.Label>
          <S.Detail>VolunTier</S.Detail>
        </S.InfoInnerWrapper>
        <S.InfoInnerWrapper>
          <S.Label>사업자주소</S.Label>
          <S.Detail>서울특별시 구로구 디지털로 300 지밸리 비즈 프라자</S.Detail>
        </S.InfoInnerWrapper>
      </S.InfoWrapper>
      <S.Logo src="/images/main/logo.png" />
    </S.Wrapper>
  );
}
