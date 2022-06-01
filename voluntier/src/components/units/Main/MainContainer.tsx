import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import MainUI from "./MainPresenter";

export default function Main() {
  const { moveToPage } = useMoveToPage();

  return (
    <>
      <MainUI moveToPage={moveToPage} />
    </>
  );
}
