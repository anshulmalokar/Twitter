import { graphql } from "@/gql";

export const getAllTweetsQuery = graphql(`
  query GetAllTweets {
    getAllTweets {
      author {
        email
        firstName
        lastName
        profileImageUrl
      }
      id
      imageURL
      content
    }
  }
`);