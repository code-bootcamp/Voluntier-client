import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPropsMyPageUI{
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
    onToggleModal : () => void
    PurchasesData? : Pick<IQuery,"fetchPurchases">
    DonationData? : Pick<IQuery,"fetchDonations">
    EnrollsData? : Pick<IQuery,"fetchEnrollsByUserId">
    BoardUserData? : Pick<IQuery,"fetchBoardsOfUser">
    DibsData? : Pick<IQuery,"fetchLogInUserDibs">
  }