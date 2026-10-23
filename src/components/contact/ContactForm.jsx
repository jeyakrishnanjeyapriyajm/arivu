import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { locations } from "../../data/locations";
import { site, whatsappLink } from "../../data/site";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-crimson focus:bg-white focus:ring-4 focus:ring-crimson/10";

function buildMessage(data) {
  const details = [
    `Name: ${data.name}`,
    data.phone && `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    `Preferred school: ${data.school}`,
    data.age && `Child's age: ${data.age}`,
  ].filter(Boolean);

  return `${details.join("\n")}\n\n${data.message}`;
}

// No backend yet: the enquiry is handed to the family's email app or WhatsApp,
// pre-filled, so it still reaches the school directly.
export default function ContactForm() {
  const [sentVia, setSentVia] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const channel = event.nativeEvent.submitter?.value ?? "email";
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const body = buildMessage(data);

    if (channel === "whatsapp") {
      window.open(whatsappLink(`Hello Arivu Foundation,\n\n${body}`), "_blank", "noopener");
    } else {
      const subject = `Tamil class enquiry – ${data.school}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    setSentVia(channel);
  }

  if (sentVia) {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf/15 text-leaf-deep">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink-deep">
          Almost there!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
          We’ve opened {sentVia === "whatsapp" ? "WhatsApp" : "your email app"} with
          your enquiry filled in — just press send. If nothing opened, call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-crimson">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSentVia(null)}
          className="mt-7 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Parent / guardian name
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your full name" />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="07…" />
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink">
        Email
        <input name="email" type="email" autoComplete="email" className={fieldClass} placeholder="you@example.com" />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Preferred school
          <select name="school" className={fieldClass} defaultValue={locations[0].name}>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name} — {location.day}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink">
          Child’s age
          <input name="age" inputMode="numeric" className={fieldClass} placeholder="e.g. 7" />
        </label>
      </div>

      <label className="block text-sm font-semibold text-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your child’s Tamil level or any questions you have."
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          value="email"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-crimson px-6 py-4 text-sm font-semibold text-white transition hover:bg-crimson-deep"
        >
          <Mail size={17} />
          Send by email
        </button>
        <button
          type="submit"
          value="whatsapp"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
        >
          <FaWhatsapp size={17} />
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
