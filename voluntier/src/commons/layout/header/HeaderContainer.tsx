import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import HeaderUI from "./HeaderPresenter";

export default function Header() {
  const { moveToPage } = useMoveToPage();

  return <HeaderUI moveToPage={moveToPage} />;
}
