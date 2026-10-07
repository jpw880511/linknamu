import type { LinkItem } from "@/data/profile";

export default function LinkCard({ title, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/70 bg-white/40 px-6 py-4 text-center font-medium shadow-[0_8px_32px_rgba(180,100,50,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_10px_36px_rgba(180,100,50,0.16)] active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
