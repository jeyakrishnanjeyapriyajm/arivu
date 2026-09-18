export default function PlaceholderPage({ title }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 py-24">
      <div className="text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
          Arivu Foundation
        </p>

        <h1 className="text-4xl font-black text-slate-950 sm:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-600">
          This page will be developed in the next stage.
        </p>
      </div>
    </section>
  );
}
