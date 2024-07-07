"use client"
import FeedCard from "@/Components/FeedCard";
import InputCard from "@/Components/InputCard";
import { useGetAllTweets } from "@/hooks/tweet";

export default function Home() {
  const { tweets } = useGetAllTweets();
  return (
    <>
      <InputCard />
      {tweets?.map((tweet) => (
        <FeedCard key={tweet?.id} tweet={tweet} />
      ))}
      <div className="border-b-2 border-b-slate-600"></div>
    </>
  );
}
