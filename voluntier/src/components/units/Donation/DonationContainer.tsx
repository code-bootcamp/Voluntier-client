import { gql, useQuery } from "@apollo/client";
import DonationUI from "./DonationPresenter";

const FETCH_DONATIONS = gql`
    query fetchDonationAmount{
        fetchDonationAmount
    }

`

export default function Donation(){
    const {data} = useQuery(FETCH_DONATIONS)

    console.log(data)
    return(
    <DonationUI/>
    )
}