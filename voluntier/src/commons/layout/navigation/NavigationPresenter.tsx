import * as S from "../navigation/NavigationStyles";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";

interface IPropsNavigationUI {
  hide: () => void
  handleVisibleChange: () => void
  visible : boolean
  moveToPage(arg0: string): import("react").MouseEventHandler<HTMLImageElement>;
  onClickLogout: () => void;
  isBoards: boolean;
  isBoardsNew: boolean;
  isDonation: boolean;
  isProducts: boolean;
  isMagazine: boolean;
}

const FETCH_USER_LOGIN = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      email
      phone
      isAdmin
      profileImageUrl
    }
  }
`;

export default function NavigationUI(props: IPropsNavigationUI) {
  const [windowSize, setWindowSize] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGIN);
  const [accessToken] = useRecoilState(accessTokenState);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <S.Wrapper>
      {/* 웹 */}
      {!windowSize && (
        <>
          <S.LogoImg
            src="/images/Logo_green.png"
            onClick={props.moveToPage("/")}
          />
          <S.ProfileImg
            src={
              data?.fetchLoginUser.profileImageUrl
                ? `https://storage.googleapis.com/${data?.fetchLoginUser.profileImageUrl}`
                : "/images/Group 8.png"
            }
            onClick={props.moveToPage("/mypage")}
          />

          {accessToken ? (
            <S.UserLoginWrapper>
              <S.Font>{data?.fetchLoginUser.name}님 환영합니다!</S.Font>
              <S.UserInfoWrapper>
                <S.MyPageLogout onClick={props.moveToPage("/mypage")}>
                  My Page
                </S.MyPageLogout>
                <S.Division>|</S.Division>
                <S.MyPageLogout onClick={props.onClickLogout}>
                  Logout
                </S.MyPageLogout>
              </S.UserInfoWrapper>
            </S.UserLoginWrapper>
          ) : (
            <S.LoginInfoWrapper>
              <S.LoginJoin onClick={props.moveToPage("/login")}>
                Login
              </S.LoginJoin>
              <S.Division>|</S.Division>
              <S.LoginJoin onClick={props.moveToPage("/signup")}>
                Join
              </S.LoginJoin>
            </S.LoginInfoWrapper>
          )}

          <S.CategoryWrapper>
            {props.isBoards && (
              <S.Category
                onClick={props.moveToPage("/boards")}
                style={{
                  color: "#0085cb",
                  fontWeight: "700",
                  borderBottom: "2px solid",
                }}
              >
                봉사조회 및 신청
              </S.Category>
            )}
            {!props.isBoards && (
              <S.Category onClick={props.moveToPage("/boards")}>
                봉사조회 및 신청
              </S.Category>
            )}
            {props.isBoardsNew && (
              <S.Category
                onClick={props.moveToPage("/boards/new")}
                style={{
                  color: "#0085cb",
                  fontWeight: "700",
                  borderBottom: "2px solid",
                }}
              >
                봉사 모집하기
              </S.Category>
            )}
            {!props.isBoardsNew && (
              <S.Category onClick={props.moveToPage("/boards/new")}>
                봉사 모집하기
              </S.Category>
            )}
            {props.isDonation && (
              <S.Category
                onClick={props.moveToPage("/donation")}
                style={{
                  color: "#0085cb",
                  fontWeight: "700",
                  borderBottom: "2px solid",
                }}
              >
                젤리 후원하기
              </S.Category>
            )}
            {!props.isDonation && (
              <S.Category onClick={props.moveToPage("/donation")}>
                젤리 후원하기
              </S.Category>
            )}
            {props.isProducts && (
              <S.Category
                onClick={props.moveToPage("/products")}
                style={{
                  color: "#0085cb",
                  fontWeight: "700",
                  borderBottom: "2px solid",
                }}
              >
                젤리샵
              </S.Category>
            )}
            {!props.isProducts && (
              <S.Category onClick={props.moveToPage("/products")}>
                젤리샵
              </S.Category>
            )}
            {props.isMagazine && (
              <S.Category
                onClick={props.moveToPage("/magazine")}
                style={{
                  color: "#0085cb",
                  fontWeight: "700",
                  borderBottom: "2px solid",
                }}
              >
                월간젤리
              </S.Category>
            )}
            {!props.isMagazine && (
              <S.Category onClick={props.moveToPage("/magazine")}>
                월간젤리
              </S.Category>
            )}
          </S.CategoryWrapper>
        </>
      )}

      {/* 모바일 */}
      {windowSize && (
        <S.MobileCategoryWrapper>
          <S.MobileCategory>
            <S.CategoryIcon
              src="/images/navigation/home.png"
              onClick={props.moveToPage("/")}
            />
            <S.CategoryText onClick={props.moveToPage("/")}>
              Home
            </S.CategoryText>
          </S.MobileCategory>
          <S.MobileCategory>
            <S.CategoryIcon
              src="/images/navigation/donation.png"
              onClick={props.moveToPage("/donation")}
            />
            <S.CategoryText onClick={props.moveToPage("/donation")}>
              Donation
            </S.CategoryText>
          </S.MobileCategory>
          <S.MobileCategory>
            <S.CategoryIcon
              src="/images/navigation/shop.png"
              onClick={props.moveToPage("/products")}
            />
            <S.CategoryText onClick={props.moveToPage("/products")}>
              Shop
            </S.CategoryText>
          </S.MobileCategory>
          <S.MobileCategory>
            <S.CategoryIcon
              src="/images/navigation/mypage.png"
              style={{ filter: "opacity(.47) drop-shadow(0 0 0 #8E8E93)" }}
              onClick={props.moveToPage("/mypage")}
            />
            <S.CategoryText onClick={props.moveToPage("/mypage")}>
              Mypage
            </S.CategoryText>
          </S.MobileCategory>
        </S.MobileCategoryWrapper>
      )}
    </S.Wrapper>
  );
}
