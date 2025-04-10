import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from 'dotenv'
import { dot } from "node:test/reporters";
import { Collection } from "mongodb";
import { Db } from "mongodb";

export const collections: { characters?: Collection } = {}

// TODO: Remove this, its not being used anywhere
export async function connectToDatabase() {
  dotenv.config()

  const mongodb_key = process.env.MONGODB_KEY;
  const uri = "mongodb+srv://" + mongodb_key + "@cluster0.gtmhwde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client: MongoClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  await client.connect()

  const db: Db = client.db("wayofkings_info")

  const characters_collection: Collection = db.collection("characters");
  collections.characters = characters_collection
}

export async function run(query: string) {
  dotenv.config()

  const mongodb_key = process.env.MONGODB_KEY;
  const uri = "mongodb+srv://" + mongodb_key + "@cluster0.gtmhwde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri)

  try {
    const db = client.db("wayofkings_info")
    const characters_collection = db.collection("characters");
    const queryArgs = { name: { $regex: query } };
    const response = await characters_collection.find(queryArgs).toArray()
    return response
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}