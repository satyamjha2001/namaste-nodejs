const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  //Insert

  const data = {
    firstname: "Akshay",
    lastname: "Kumar",
    city: "Mumbai",
    phoneNumber: "9988776655",
  };

  // Create
  // const insertData = await collection.insertMany([data])
  // console.log("data inserted = ", insertData)
  
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);
  
  // Update
  const updateData = await collection.updateOne({ _id: new ObjectId('68cea2a30b89518273cc89d2') }, { $set: { firstname: "Mint" } })
  console.log("Updated document ", updateData)

  //Read
  const findData = await collection.find({}).toArray();
  console.log("All data :", findData);

  //delete
  // const deletedata = await collection.deleteOne({ _id: new ObjectId('68cea284caf93da30e2d97f4') })
  // console.log("deleted data=>", deletedata)
  // const deletedata = await collection.deleteOne({ firstname: 'Mint' })
  // console.log("deleted data=>", deletedata)

  //Count documents
  const countData = await collection.countDocuments({});
  console.log("Number of documents in db are :", countData);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
