import { gql } from "@apollo/client";

export const FETCH_PURCHASES = gql`
  query fetchPurchases {
    fetchPurchases {
      id
      user {
        name
      }
      product {
        id
        name
      }
      createdAt
      usedPoint
      cancelledAt
    }
  }
`;

export const FETCH_DONATIONS = gql`
  query fetchDonations {
    fetchDonations {
      amount
      createdAt
    }
  }
`;

export const FETCH_ENROLLS = gql`
  query fetchEnrollsByUserId {
    fetchEnrollsByUserId {
      board {
        centerName
        id
      }
      createdAt
      status
    }
  }
`;

export const FETCH_BOARDS_USER = gql`
  query fetchBoardsOfUser {
    fetchBoardsOfUser {
      id
      title
      createdAt
    }
  }
`;

export const FETCH_USER_DIBS = gql`
  query fetchLogInUserDibs {
    fetchLogInUserDibs {
      id
      product {
        id
        name
        price
      }
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
query fetchLoginUser {
  fetchLoginUser {
    id
    name
    email
    phone
    isAdmin
    profileImageUrl
    donationAmount
    point
    serviceTime
    provider
    createdAt
  }
}
`;