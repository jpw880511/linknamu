import type { LinkItem } from "@/data/profile";

type Props = LinkItem & { count: number; onClick: () => void };

export default function LinkCard({ title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-3xl border border-white/70 bg-white/40 px-6 py-4 text-center font-medium shadow-[0_8px_32px_rgba(180,100,50,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_10px_36px_rgba(180,100,50,0.16)] active:scale-[0.99]"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal text-foreground/50">
        {count}회
      </span>
    </a>
  );
}
