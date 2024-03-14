import { Post } from "../page";

async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const singlePost = await getPostById(params.slug);
  return (
    <div className="grid items-center w-screen">
      <h1>{singlePost.title}</h1>
      <p>{singlePost.body}</p>
      <p>{singlePost.id}</p>
    </div>
  );
}
