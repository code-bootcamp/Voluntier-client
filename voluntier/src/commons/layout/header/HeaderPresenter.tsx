import * as S from "./HeaderStyles";

export default function HeaderUI(props) {
  return (
    <S.Wrapper>
      <S.Logo onClick={props.moveToPage("/")} />
      <S.ButtonWrapper>
        <S.Button onClick={props.moveToPage("/login")}>Login</S.Button>
        <S.Button onClick={props.moveToPage("/signup")}>Join</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
