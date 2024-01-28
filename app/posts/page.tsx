import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data: Array<{ id: string; title: string }> = await res.json();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl my-2">ALL POSTS</h1>
      <ul className="grid gap-2">
        {data.map((item) => (
          <ol className="p-2 border-2 border-green-600" key={item.id}>
            <Link href={`/posts/${item.id}`}>
              <p className="hover:underline">{item.title}</p>
            </Link>
          </ol>
        ))}
      </ul>
    </main>
  );
}
