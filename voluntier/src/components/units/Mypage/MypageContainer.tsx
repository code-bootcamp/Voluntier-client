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
        title
      }
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
  console.log(PurchasesData)
  console.log(DonationData)
  console.log(EnrollsData)
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return <MypageUI isOpen={isOpen} onToggleModal={onToggleModal} />;
}
