import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-forest shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MANDI PARTNER on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
