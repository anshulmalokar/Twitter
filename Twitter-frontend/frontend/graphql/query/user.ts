import { graphql } from "@/gql";

export const verifyuserGoogleToken = graphql(
    `
    query VerifyUserGoogleToken($token: String!){
        verifyToken(token: $token)
    }
`
);

export const getCurrentUserQuery = graphql(`
    query ExampleQuery {
        getCurrentUser {
            id
            profileImageUrl
            email
            firstName
            lastName
        }
    }    
`);