import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-[2rem] border border-[#e8e1d6] bg-white p-7 shadow-sm sm:p-9">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e1f2a]">
          Send an enquiry
        </p>

        <h2 className="mt-3 font-display text-3xl text-[#1d1b19] sm:text-4xl">
          We'd love to hear from you.
        </h2>

        <p className="mt-3 text-sm leading-7 text-[#6e6962]">
          Have a question about our Tamil classes, locations or enrolment? Send
          us a message and we'll get back to you.
        </p>
      </div>

      {submitted ? (
        <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8f4ed] text-[#6e1f2a]">
            <CheckCircle2 size={30} />
          </div>

          <h3 className="mt-6 font-display text-2xl text-[#1d1b19]">
            Thank you for contacting us.
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-7 text-[#6e6962]">
            Your message has been received. We will get back to you as soon as
            possible.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-7 rounded-full border border-[#e8e1d6] px-5 py-3 text-sm font-semibold text-[#6e1f2a] transition hover:border-[#c9a45c]"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <FormField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
          />

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6962]"
            >
              School location
            </label>

            <select
              id="location"
              name="location"
              className="w-full rounded-xl border border-[#e8e1d6] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#1d1b19] outline-none transition focus:border-[#c9a45c]"
            >
              <option value="">Select a location</option>
              <option value="Coventry">Coventry</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Shirley">Shirley</option>
              <option value="General enquiry">General enquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6962]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="How can we help?"
              className="w-full resize-none rounded-xl border border-[#e8e1d6] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#1d1b19] outline-none transition placeholder:text-[#6e6962]/50 focus:border-[#c9a45c]"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#6e1f2a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#46121a]"
          >
            Send Message
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>
      )}
    </div>
  );
}

function FormField({ label, name, type, placeholder, required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#6e6962]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[#e8e1d6] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#1d1b19] outline-none transition placeholder:text-[#6e6962]/50 focus:border-[#c9a45c]"
      />
    </div>
  );
}
