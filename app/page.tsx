import Link from "next/link";
import Dashboard from "./dashboard/page";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <div>
        <Link
          className="font-medium text-sm hover:bg-slate-600 rounded-md border-[2px] border-slate-600 bg-slate-400 p-2"
          href="/dashboard"
        >
          Dashboard
        </Link>
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
