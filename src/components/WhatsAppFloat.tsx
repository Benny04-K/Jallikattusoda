import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917448422201";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi! I'd like to know more about Jallikattu Soda."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping" />
    </a>
  );
}