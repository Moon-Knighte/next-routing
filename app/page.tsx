import Link from "next/link";
import Dashboard from "./dashboard/page";
import { Suspense } from "react";
import Loading from "./dashboard/loading";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <div>
        <Suspense fallback={<Loading />}>
          <Link
            className="font-medium text-sm hover:bg-slate-600 rounded-md border-[2px] border-slate-600 bg-slate-400 p-2"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </Suspense>
        <Link
          className="font-medium ml-2 text-sm hover:bg-slate-600 rounded-md border-[2px] border-slate-600 bg-slate-400 p-2"
          href="/about"
        >
          About
        </Link>
      </div>
    </main>
  );
};

export default Home;
