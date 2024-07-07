import { client } from "@/client/api"
import { CreateTweetData } from "@/gql/graphql";
import { createTweetMutation } from "@/graphql/mutations/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";

export const useCreateTweet = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateTweetData) => client.request(createTweetMutation,{payload}),
        // @ts-ignore
        onSuccess: async () => {
            // @ts-ignore
            await queryClient.invalidateQueries(["all-tweets"]);
            toast.success('Create Success',{id: "1"});
        },
        onError: () => toast.error("Wait for few seconds before tweeting again",{id:"1"})
    })
    return mutation;
}

export const useGetAllTweets = () => {
    const query = useQuery({
        queryKey: ['all-tweets'],
        queryFn: () => client.request(getAllTweetsQuery),
    })

    return  {
        ...query,
        tweets: query.data?.getAllTweets
    }
}