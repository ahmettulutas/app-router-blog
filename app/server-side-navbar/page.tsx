import { Suspense } from "react";
import Navbar from "../components/navbar";
import NavbarSkeleton from "../components/navbar/skeleton";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>
      <main className="h-screen w-full grid place-items-center bg-gray-100">
        USE CLIENT?
      </main>
    </>
  );
}
