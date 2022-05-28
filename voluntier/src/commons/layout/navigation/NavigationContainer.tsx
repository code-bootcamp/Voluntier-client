import NavigationUI from "./NavigationPresenter";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import { Modal } from "antd";
import { useRouter } from "next/router";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function Navigation() {
  const [logout] = useMutation(LOGOUT);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = () => {
    setVisible(true);
  };

  const { moveToPage } = useMoveToPage();

  const onClickLogout = () => {
    try {
      logout();
      Modal.success({ content: "로그아웃되었습니다." });
      router.push(`/login`)
    } catch (error) {
    if(error instanceof Error)  Modal.error({ content: error.message });
    }
  };

  const asPath = String(router.asPath);

  let isBoards;
  asPath.slice(-6) === "boards" ? (isBoards = true) : (isBoards = false);

  let isBoardsNew;
  asPath.slice(-3) === "new" ? (isBoardsNew = true) : (isBoardsNew = false);

  let isDonation;
  asPath.slice(-8) === "donation" ? (isDonation = true) : (isDonation = false);

  let isProducts;
  asPath.slice(-8) === "products" ? (isProducts = true) : (isProducts = false);

  let isMagazine;
  asPath.slice(-8) === "magazine" ? (isMagazine = true) : (isMagazine = false);

  return (
    <NavigationUI
      hide={hide}
      handleVisibleChange={handleVisibleChange}
      visible={visible}
      moveToPage={moveToPage}
      onClickLogout={onClickLogout}
      isBoards={isBoards}
      isBoardsNew={isBoardsNew}
      isDonation={isDonation}
      isProducts={isProducts}
      isMagazine={isMagazine}
    />
  );
}
