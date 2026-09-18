import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#fffdf8] px-6 py-20">
      <div className="text-center">
        <p className="font-display text-8xl text-[#6e1f2a]">404</p>

        <h1 className="mt-5 font-display text-3xl text-[#1d1b19] sm:text-4xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#6e6962]">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6e1f2a] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#46121a]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
