import { graphql } from "@/gql";

export const verifyuserGoogleToken = graphql(
  `
    query VerifyUserGoogleToken($token: String!) {
      verifyToken(token: $token)
    }
  `
);

export const getCurrentUserQuery = graphql(`
  query ExampleQuery {
  getCurrentUser {
    id
    firstName
    email
    lastName
    profileImageUrl
    tweets {
      id
      content
      author {
        firstName
        lastName
        profileImageUrl
      }
    }
  }
}
`);
