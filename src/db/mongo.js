import { MongoClient, ServerApiVersion } from "mongodb";

//console.log(import.meta.env.VITE_MONGODB_KEY)
// Replace the uri string with your connection string.
let mongodb_key = import.meta.env.VITE_MONGODB_KEY;
const uri = "mongodb+srv://" + mongodb_key +"@cluster0.pjpbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
	})

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("wayofkings_info").command({ ping: 1 });
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
	
	const db = client.db("wayofkings_info")
	const characters_collection = db.collection("characters"); 
	const query = {name: 'Kaladin'};
	const response = await characters_collection.findOne(query)
	console.log(response)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
//run();