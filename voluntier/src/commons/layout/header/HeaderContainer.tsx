import { gql, useMutation } from "@apollo/client";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import HeaderUI from "./HeaderPresenter";
import { Modal } from "antd";
import { useRouter } from "next/router";


const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export default function Header() {
  const router = useRouter()
  const { moveToPage } = useMoveToPage();
  const [logout] = useMutation(LOGOUT);

  const onClickLogout = async() => {
    try {
      await logout();
      Modal.success({ content: "로그아웃되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
    router.push('/')
    window.location.reload();
  };

  return <HeaderUI moveToPage={moveToPage} onClickLogout={onClickLogout} />;
}
