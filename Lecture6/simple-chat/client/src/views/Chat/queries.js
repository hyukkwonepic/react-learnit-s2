import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      nickname
      message
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation AddMessage($nickname: String!, $message: String!) {
    addMessage(nickname: $nickname, message: $message) {
      id
      nickname
      message
    }
  }
`;

export const MESSAGE_ADDED = gql`
  subscription MessageAdded {
    messageAdded {
      id
      nickname
      message
    }
  }
`;