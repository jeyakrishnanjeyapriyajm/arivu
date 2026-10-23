import { ArrowLeft } from "lucide-react";

import Button from "../components/ui/Button";
import RisingBars from "../components/ui/RisingBars";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 pb-20 pt-36">
      <div className="text-center">
        <RisingBars className="mx-auto h-24 w-28 gap-1.5" />
        <p className="mt-8 font-tamil text-lg font-semibold text-crimson">
          பக்கம் கிடைக்கவில்லை
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-ink-deep sm:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted">
          The page you’re looking for has moved or doesn’t exist.
        </p>
        <Button to="/" variant="ink" className="mt-9">
          <ArrowLeft size={17} />
          Back to home
        </Button>
      </div>
    </section>
  );
}
