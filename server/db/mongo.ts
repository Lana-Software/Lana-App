import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

export async function run(query: string) {
	// Load environment variables from .env file
	dotenv.config();

	// Get the MongoDB connection token (user:password) from environment variables
	const mongodb_key = process.env.MONGODB_KEY;
	const uri = `mongodb+srv://${mongodb_key}@cluster0.gtmhwde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

	const client = new MongoClient(uri);

	try {
		//Define database and collection to use
		const db = client.db("lana_app_db");
		const users_collection = db.collection("users");

		// Define the query for the search
		const queryArgs = { name: { $regex: query } };

		// Find all users that match the query and sort them by name in ascending order (1)
		// The $regex operator is used to perform a case-insensitive search
		const response = await users_collection
			.find(queryArgs)
			.sort({ name: 1 })
			.toArray();
		return response;
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
