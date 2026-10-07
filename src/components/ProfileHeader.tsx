import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, imageUrl }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          className="h-[150px] w-[150px] rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_32px_rgba(180,100,50,0.25)]"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-orange-400 text-4xl font-bold text-white ring-4 ring-white/80 shadow-[0_12px_32px_rgba(180,100,50,0.25)]"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{bio}</p>
    </header>
  );
}
