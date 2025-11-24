import { MongoClient } from "mongodb";
import { ENV } from "./env";

let client: MongoClient;

export async function mongoConnect() {
  if (!client) {
    client = new MongoClient(ENV.MONGO_URL);
    await client.connect();
  }
  return client.db(ENV.MONGO_DB);
}
