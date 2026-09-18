import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      setSubmitted(false);
      return;
    }

    if (!emailPattern.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-red-800 px-4 py-16 text-white sm:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Join the Arivu Foundation mailing list
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-red-100">
            Receive school announcements, upcoming event information, learning
            resources and important class updates.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            className="flex items-start gap-4 rounded-2xl bg-white p-6 text-slate-900"
          >
            <CheckCircle2 size={27} className="shrink-0 text-green-600" />

            <div>
              <p className="font-black">Thank you for subscribing.</p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your email address has been submitted successfully.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-bold text-red-700 hover:text-red-800"
              >
                Add another email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <div className="relative flex-1">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="newsletter-email"
                  name="newsletterEmail"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  className="h-14 w-full rounded-full border border-transparent bg-white pl-12 pr-5 text-sm text-slate-900 outline-none focus:border-amber-300 focus:ring-4 focus:ring-amber-300/20"
                />
              </div>

              <button
                type="submit"
                className="h-14 rounded-full bg-amber-300 px-7 text-sm font-black text-slate-950 hover:bg-amber-200"
              >
                Subscribe
              </button>
            </div>

            {error && (
              <p role="alert" className="mt-3 text-sm font-semibold text-white">
                {error}
              </p>
            )}

            <p className="mt-3 text-xs leading-5 text-red-100">
              By subscribing, you agree to receive school-related updates.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
