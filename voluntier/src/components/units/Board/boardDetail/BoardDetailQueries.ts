
import {gql} from "@apollo/client"


export const FETCH_BOARD = gql`
    query fetchBoard($boardId: String!){
        fetchBoard(boardId:$boardId){
            user{
                id
                isAdmin
                name
            }
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

export const FETCH_USER_LOGIN = gql`
    query fetchLoginUser{
        fetchLoginUser{
            id
            name
            email
            phone
            isAdmin
        }
    }
`

export const CREATE_ENROLL = gql`
    mutation createEnroll($boardId: String!){
        createEnroll(boardId:$boardId){
            id
            
        }
    }
`

export const FETCH_ENROLL = gql`
    query fetchEnrollsByBoardId($boardId: String!){
        fetchEnrollsByBoardId(boardId:$boardId){
            id
            user{
                name
                phone
                
            }
            status
        }
    }
`

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: String!){
        deleteBoard(boardId:$boardId)
    }
`

