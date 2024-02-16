"use client";
import { useGetAllPostsQuery } from "@/provider/redux/query/tradeSlice";
import Card from "../_components/Card";

export default function Home() {
  const { data, isLoading } = useGetAllPostsQuery();

  return (
    <main className="pt-10">
      {!isLoading &&
        !!data?.posts?.length &&
        data?.posts.map(({title, body, id}: {title: string, body: string, id: number}) => (
          <Card
            key={id}
            imageUrl="https://via.placeholder.com/150"
            title={title}
            description={body}
            reverse={Boolean(id % 2)}
          />
        ))}
    </main>
  );
}
