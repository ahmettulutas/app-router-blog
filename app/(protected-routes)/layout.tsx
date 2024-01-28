import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isAuthorized = true;
  if (isAuthorized)
    return (
      <main>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        {children}
      </main>
    );
}
