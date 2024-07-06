import { GraphQLClient } from "graphql-request";

// Check for client
const isClient  = typeof window !== 'undefined'

export const client = new GraphQLClient("http://localhost:8000/graphql",{
    headers: () => ({
        Authorization: isClient? `Bearer ${window.localStorage.getItem('__twitter_token')}` : "undefined"
    })
})