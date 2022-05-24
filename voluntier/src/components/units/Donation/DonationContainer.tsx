
import { gql, useQuery } from "@apollo/client";
import DonationUI from "./DonationPresenter";


// eslint-disable-next-line camelcase
const FETCH_All_DONATIONS = gql`
    query fetchAllUsersDonationsAmount{
        fetchAllUsersDonationsAmount
    }

`
export default function Donation(){
    const {data : allAmount} = useQuery(FETCH_All_DONATIONS)
    
    
    return(
    <DonationUI
    allAmount={allAmount}
    />
    )
}