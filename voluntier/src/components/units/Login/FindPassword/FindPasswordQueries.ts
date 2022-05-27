import { gql } from "@apollo/client"

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
export const RESET_PASSWORD = gql`
  mutation resetPassword($phone:String! $email:String! $password:String!){
    resetPassword(phone:$phone email:$email password:$password)
  }
`