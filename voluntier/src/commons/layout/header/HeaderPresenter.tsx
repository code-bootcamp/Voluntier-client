import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import * as S from "./HeaderStyles";

export default function HeaderUI(props:any) {
  const [accessToken] = useRecoilState(accessTokenState);

  return (
    <S.Wrapper>
      {accessToken && (
        <>
          <S.Logo onClick={props.moveToPage("/")} />
          <S.ButtonWrapper style={{ justifyContent: "center" }}>
            <S.Button onClick={props.onClickLogout}>Logout</S.Button>
          </S.ButtonWrapper>
        </>
      )}
      {!accessToken && (
        <>
          <S.Logo onClick={props.moveToPage("/")} />
          <S.ButtonWrapper>
            <S.Button onClick={props.moveToPage("/login")}>Login</S.Button>
            <S.Button onClick={props.moveToPage("/signup")}>Join</S.Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.Wrapper>
  );
}
