import { gql } from "@apollo/client";

export const FETCH_CHAT_HISTORY = gql`
  query fetchChatHistory($boardId: String!) {
    fetchChatHistory(boardId: $boardId) {
      id
      user {
        id
        name
      }
      message
    }
  }
`;
