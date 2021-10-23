const MongoClient = require("mongodb").MongoClient;
let cachedDb = null;

export const connectToDatabase = async () => {
	if (cachedDb) {
		console.log("Using existing connection");
		return Promise.resolve(cachedDb);
	}

	// return MongoClient.connect("mongodb://localhost:27017", {})
	return MongoClient.connect(
		"mongodb+srv://raymondmnziku:kv3WJ4Et7PmrZ8Kt@fishydata.b9jm6.mongodb.net",
		{},
	)
		.then((client) => {
			let db = client.db("tfds_system");
			console.log("New DB Connection");
			cachedDb = db;
			return cachedDb;
		})
		.catch((error) => {
			console.log("Mongo connect Error");
			console.log(error);
		});
};
