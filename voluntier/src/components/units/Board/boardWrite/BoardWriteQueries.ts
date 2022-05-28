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
            addressDetail
            location1
            location2
            
        }
    }
`

export const UPDATE_BOARD =gql`
    mutation updateBoard($boardId: String!, $updateBoardInput: UpdateBoardInput!){
        updateBoard(boardId:$boardId,updateBoardInput:$updateBoardInput ){
            title
        }
    }


`