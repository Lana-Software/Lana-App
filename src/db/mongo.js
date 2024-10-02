import { MongoClient, ServerApiVersion } from "mongodb";

// Replace the uri string with your connection string.
mongodb_key = process.env.MONGODB_KEY;
const uri = "mongodb+srv://"+ mongodb_key +"@cluster0.pjpbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export function run() {
  try {
	const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
	});

    const database = client.db('wayofkings_info');
    const characters = database.collection('characters');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Kaladin' };
    const character = characters.findOne(query);

    console.log(character);
  } catch(err){
		console.log(err);
  } //finally {
  //   // Ensures that the client will close when you finish/error
  //   client.close();
  // }
}
// run().catch(console.dir);

//run();