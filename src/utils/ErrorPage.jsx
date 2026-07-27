import { Home, RefreshCcw, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = ({ onReload }) => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-lg text-center">
        <TriangleAlert size={70} className="mx-auto text-red-500" />

        <h1 className="mt-6 text-4xl font-bold text-white">
          Something went wrong
        </h1>

        <p className="mt-3 text-slate-400">
          An unexpected error occurred while loading this page.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={onReload}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <RefreshCcw size={18} />
            Reload
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
