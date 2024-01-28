/* https://randomuser.me/api/ */

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const data: { id: string; title: string; body: string } = await res.json();
  return (
    <main className="flex gap-2 flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Single Data</h1>
      <h2 className="block">
        <u>Post Title:</u> {data.title}
      </h2>
      <p className="block">
        <u>Post Body:</u> {data.body}
      </p>
    </main>
  );
}
