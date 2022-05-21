import { gql, useMutation } from "@apollo/client";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import HeaderUI from "./HeaderPresenter";
import { Modal } from "antd";

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function Header() {
  const { moveToPage } = useMoveToPage();
  const [logout] = useMutation(LOGOUT);

  const onClickLogout = () => {
    try {
      logout();
      Modal.success({ content: "로그아웃되었습니다." });
      window.location.reload();
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return <HeaderUI moveToPage={moveToPage} onClickLogout={onClickLogout} />;
}
