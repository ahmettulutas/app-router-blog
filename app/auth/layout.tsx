export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <footer className="fixed bottom-0 left-0 right-0">This is logo</footer>
    </main>
  );
}
