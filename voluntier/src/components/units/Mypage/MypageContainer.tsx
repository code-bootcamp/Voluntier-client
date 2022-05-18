import { useState } from "react";
import useAuth from "../../commons/hooks/useAuth";
import MypageUI from "./MypagePresenter";

export default function Mypage() {
  useAuth()
  const [isOpen, setIsOpen] = useState(false);
  
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return <MypageUI isOpen={isOpen} onToggleModal={onToggleModal} />;
}
