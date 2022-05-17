import {gql} from "@apollo/client"

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput){
            id
            title
            contents
            centerName
            centerOwnerName
            centerPhone
            address
            AddressDetail
            location1
            location2
            
        }
    }
`