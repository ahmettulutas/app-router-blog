export default function DynamicPage({ params }: { params: { slug: string } }) {
  return <div>DynamicPage. The id is {params.slug}</div>;
}
