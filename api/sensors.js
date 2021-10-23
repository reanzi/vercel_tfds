import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
	if (req.method === "GET") {
		const db = await connectToDatabase();
		const collection = await db.collection("sensors");
		// Select the users collection from the database
		const sensors = await collection.find({}).toArray();

		res.status(200).json({ sensors });
	} else if (req.method === "POST") {
		// Take the user in the post
		const newSensor = req.body;
		// connect to the DB
		const db = await connectToDatabase();
		// Use our collection
		const collection = await db.collection("sensors");
		//insert the user into the database.
		const sensor = await collection.insertOne(newSensor);
		// Respond with a JSON string of all sensors in the collection
		res.status(200).json({ sensor });
	} else {
		res.status(404).json({ status: "Error route note found" });
	}
};
