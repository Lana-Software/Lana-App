import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import type { Collection } from "mongodb";
import type { Db } from "mongodb";

export const collections: { characters?: Collection } = {};

export async function connectToDatabase() {
	dotenv.config();
	const uri = process.env.DB_CONN_STRING;
	if (!uri) {
		throw new Error("[DB] No connection string found");
	}
	const client: MongoClient = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	});

	await client.connect();

	const db: Db = client.db("wayofkings_info");

	const characters_collection: Collection = db.collection("characters");
	collections.characters = characters_collection;
}

export async function run(query: string) {
	dotenv.config();

	const uri = process.env.DB_CONN_STRING;
	if (!uri) {
		throw new Error("[DB] No connection string found");
	}
	const client = new MongoClient(uri);

	try {
		const db = client.db("wayofkings_info");
		const characters_collection = db.collection("characters");
		const queryArgs = { name: query };
		const response = await characters_collection.findOne(queryArgs);
		return response;
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

export async function run2(query: string) {
	dotenv.config();
	const client = "";
}
