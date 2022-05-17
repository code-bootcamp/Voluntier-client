import { gql } from "@apollo/client"

export const CREATE_USER = gql`
    mutation createUser($createUserInput: CreateUserInput!){
        createUser(createUserInput: $createUserInput){
            id
        }
    }
`
export const SEND_PHONE_AUTH = gql`
    mutation sendPhoneAuthToken($phone:String!){
        sendPhoneAuthToken(phone:$phone)
    }
`
export const CHECK_PHONE_AUTH = gql`
    mutation checkPhoneAuthToken($phone:String! $token:String!){
        checkPhoneAuthToken(phone:$phone, token:$token)
    }
`