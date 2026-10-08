import type { NextRequest } from "next/server";
import { links } from "@/data/profile";
import { clicksCollection } from "@/lib/mongodb";

// 해당 링크의 클릭 수를 1 증가
export async function POST(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  if (!links.some((l) => l.id === id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }
  try {
    const result = await (await clicksCollection()).findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return Response.json({ id, count: result?.count ?? 1 });
  } catch {
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
