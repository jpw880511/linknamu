export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export const profile: Profile = {
  name: "정평화",
  bio: "세계 최강 바이브코더",
  imageUrl: "https://i.pravatar.cc/300?img=12", // 더미 사진
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "Blog", url: "https://velog.io" },
];
