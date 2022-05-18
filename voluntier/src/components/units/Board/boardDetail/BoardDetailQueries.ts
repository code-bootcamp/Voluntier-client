
import {gql} from "@apollo/client"


export const FETCH_BOARD = gql`
    query fetchBoard($boardId: String!){
        fetchBoard(boardId:$boardId){
            title
            contents
            centerName
            centerOwnerName
            centerPhone
            recruitCount
            serviceDate
            serviceTime
            address
            addressDetail
            location1
            location2
            
        }
    } 
`