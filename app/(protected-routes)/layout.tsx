export default function ProtctedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthorized = true;
  if (!isAuthorized) return <main>You are unauthorized to see this page.</main>;
  return <section>{children}</section>;
}
