import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import useAuth from "../../commons/hooks/useAuth";
import MypageUI from "./MypagePresenter";

const FETCH_PURCHASES = gql`
  query fetchPurchases{
    fetchPurchases{
      user{
        name
      }
      product{
        name
      }
      createdAt
      usedPoint
    }
  }
`
const FETCH_DONATIONS = gql`
  query fetchDonations{
    fetchDonations{
      amount
      createdAt
    }
  }
`
const FETCH_ENROLLS = gql`
  query fetchEnrollsByUserId{
    fetchEnrollsByUserId{
      board{
        centerName
      }
      createdAt
      status
    }
  }
`

const FETCH_BOARDS_USER = gql`
  query fetchBoardsOfUser{
    fetchBoardsOfUser{
      id
      title
      createdAt
    }
  }
`



  
export default function Mypage() {
  useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const {data:PurchasesData} = useQuery(FETCH_PURCHASES)
  const {data:DonationData} = useQuery(FETCH_DONATIONS)
  const {data:EnrollsData} = useQuery(FETCH_ENROLLS)
  const {data:BoardUserData} = useQuery(FETCH_BOARDS_USER)
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return <MypageUI 
  isOpen={isOpen} 
  onToggleModal={onToggleModal} 
  PurchasesData={PurchasesData}
  DonationData={DonationData}
  EnrollsData={EnrollsData}
  BoardUserData={BoardUserData}
  />;
}
