import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message =
    "Hello Arivu Foundation, I would like to enquire about Tamil language classes.";

  const whatsappURL = `https://wa.me/447961277728?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Arivu Foundation on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={28} />
    </a>
  );
}
