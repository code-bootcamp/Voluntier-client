import { useState } from "react";
import MypageUI from "./MypagePresenter";

export default function Mypage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return <MypageUI isOpen={isOpen} onToggleModal={onToggleModal} />;
}
