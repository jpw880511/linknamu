import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

// 개발 중 핫 리로드 시 연결이 중복 생성되지 않도록 global에 보관
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

const clientPromise = (globalForMongo.mongoClient ??= new MongoClient(
  uri,
).connect());

export type ClickDoc = { _id: string; count: number };

export async function clicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
