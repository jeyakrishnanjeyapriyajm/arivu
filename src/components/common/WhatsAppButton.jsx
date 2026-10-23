import { FaWhatsapp } from "react-icons/fa";

import { whatsappLink } from "../../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Arivu Foundation on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25d366] pl-4 pr-4 text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#1ebe5a] sm:pr-5"
    >
      <FaWhatsapp size={26} />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
