"use client"

import { useQuery } from "@tanstack/react-query";

type Post = {
    userID: number,
    id: number,
    title: string,
    body: string,
}

async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //only use await in async functions
    return response.json()
}

export default function Home() {
    const { data, error, isLoading, isError } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

    if(isLoading) {
        return <p>Loading... </p>
    }

    if (isError) {
        return <p className="text-red-500">Error: {(error as Error).message}</p>
    }

    return (
        <div>
            {data?.map(function (post, key) {
                return <div key={key} className="border border-solid border-white p-4">
                    <p> Title: {post.title}</p>
                    <p> Body: {post.body}</p>
                </div>;
            })}
        </div>
    );
}