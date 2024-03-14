import Link from "next/link";
import React from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getAllPosts(): Promise<Array<Post>> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  return res.json();
}
export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className=" w-screen flex flex-col items-center justify-center">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
}
