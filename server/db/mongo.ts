import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Load environment variables from .env file
dotenv.config();

export async function runSearch(query: string) {
	// Get the MongoDB connection token (user:password) from environment variables
	const mongodbKey = process.env.MONGODB_KEY;
	const uri = `mongodb+srv://${mongodbKey}@cluster0.gtmhwde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

	const client = new MongoClient(uri);

	try {
		//Define database and collections to use
		const db = client.db("lana_app_db");

		// TODO: figure out a way to use the types defined in client/ globally and add type safety
		const usersCollection = db.collection("users"); // -> const usersCollection = db.collection<User>("users");
		const postsCollection = db.collection("posts"); // -> const usersCollection = db.collection<Post>("users");

		// Define the queries for the search
		const usersQueryArgs = {
			userName: { $regex: query, $options: "i" },
		};
		const postsQueryArgs = {
			$or: [
				{
					"author.userName": {
						$regex: `/^${query}/i`,
						$options: "i",
					},
				},
				{ text: { $regex: query, $options: "i" } },
			],
		};

		// Find all users and posts that match the respective queries
		// The $regex operator is used to perform a case-insensitive search
		// TODO: limit the amount of results to the first 10 or 5 matching users and posts and implement a functionality to look for more if needed
		const [response1, response2] = await Promise.all([
			usersCollection.find(usersQueryArgs).toArray(),
			postsCollection.find(postsQueryArgs).toArray(),
		]);

		return {
			users: response1,
			posts: response2,
		};
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
