import { clicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 { [linkId]: count } 형태로 반환
export async function GET() {
  try {
    const docs = await (await clicksCollection()).find().toArray();
    return Response.json(
      Object.fromEntries(docs.map((d) => [d._id, d.count])),
    );
  } catch {
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
