import Image from "next/image";
/* https://randomuser.me/api/ */

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data: { id: string; title: string } = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Single Data</h1>
      <div className="block">{data.title}</div>
    </main>
  );
}
