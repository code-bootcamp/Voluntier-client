import * as S from "../navigation/NavigationStyles";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";

interface IPropsNavigationUI {
  moveToPage(arg0: string): import("react").MouseEventHandler<HTMLImageElement>;
  onClickLogout: () => void;
}

export const FETCH_USER_LOGIN = gql`
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
  console.log(data);

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
              <S.Font>😙 {data?.fetchLoginUser.name}님 환영합니다!</S.Font>
              <S.UserInfoWrapper>
                <S.MyPageLogout onClick={props.moveToPage("/mypage")}>
                  My Page
                </S.MyPageLogout>
                <S.Mark></S.Mark>
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
              <S.Mark></S.Mark>
              <S.LoginJoin onClick={props.moveToPage("/signup")}>
                Join
              </S.LoginJoin>
            </S.LoginInfoWrapper>
          )}

          <S.ContentsWrapper>
            <S.Category onClick={props.moveToPage("/boards")}>
              봉사조회 및 신청
            </S.Category>
            <S.Category onClick={props.moveToPage("/boards/new")}>
              봉사 모집하기
            </S.Category>
            <S.Category onClick={props.moveToPage("/donation")}>
              젤리 후원하기
            </S.Category>
            <S.Category onClick={props.moveToPage("/products")}>
              젤리샵
            </S.Category>
          </S.ContentsWrapper>
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
