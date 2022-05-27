import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import useAuth from "../../commons/hooks/useAuth";
import MypageUI from "./MypagePresenter";

const FETCH_PURCHASES = gql`
  query fetchPurchases {
    fetchPurchases {
      id
      user {
        name
      }
      product {
        id
        name
      }
      createdAt
      usedPoint
      cancelledAt
    }
  }
`;

const FETCH_DONATIONS = gql`
  query fetchDonations {
    fetchDonations {
      amount
      createdAt
    }
  }
`;

const FETCH_ENROLLS = gql`
  query fetchEnrollsByUserId {
    fetchEnrollsByUserId {
      board {
        centerName
        id
      }
      createdAt
      status
    }
  }
`;

const FETCH_BOARDS_USER = gql`
  query fetchBoardsOfUser {
    fetchBoardsOfUser {
      id
      title
      createdAt
    }
  }
`;

const FETCH_USER_DIBS = gql`
  query fetchLogInUserDibs {
    fetchLogInUserDibs {
      id
      product {
        id
        name
        price
      }
    }
  }
`;

export default function Mypage() {
  useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { data: PurchasesData } = useQuery(FETCH_PURCHASES);
  const { data: DonationData } = useQuery(FETCH_DONATIONS);
  const { data: EnrollsData } = useQuery(FETCH_ENROLLS);
  const { data: BoardUserData } = useQuery(FETCH_BOARDS_USER);
  const { data: DibsData } = useQuery(FETCH_USER_DIBS);
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
