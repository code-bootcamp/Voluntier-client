import * as S from "./HeaderStyles";

export default function HeaderUI() {
  return (
    <S.Wrapper>
      <S.Logo src="/images/main/logo.png" />
      <S.ButtonWrapper>
        <S.Button>Login</S.Button>
        <S.Button>Join</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}