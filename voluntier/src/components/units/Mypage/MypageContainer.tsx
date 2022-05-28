import { useQuery } from "@apollo/client";
import { useState } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import useAuth from "../../commons/hooks/useAuth";
import MypageUI from "./MypagePresenter";
import { FETCH_BOARDS_USER, FETCH_DONATIONS, FETCH_ENROLLS, FETCH_PURCHASES, FETCH_USER_DIBS } from "./MypageQueries";


export default function Mypage() {
  useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { data: PurchasesData } = useQuery<Pick<IQuery,"fetchPurchases">>(FETCH_PURCHASES);
  const { data: DonationData } = useQuery<Pick<IQuery,"fetchDonations">>(FETCH_DONATIONS);
  const { data: EnrollsData } = useQuery<Pick<IQuery,"fetchEnrollsByUserId">>(FETCH_ENROLLS);
  const { data: BoardUserData } = useQuery<Pick<IQuery,"fetchBoardsOfUser">>(FETCH_BOARDS_USER);
  const { data: DibsData } = useQuery<Pick<IQuery,"fetchLogInUserDibs">>(FETCH_USER_DIBS);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MypageUI
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      PurchasesData={PurchasesData}
      DonationData={DonationData}
      EnrollsData={EnrollsData}
      BoardUserData={BoardUserData}
      DibsData={DibsData}
    />
  );
}
