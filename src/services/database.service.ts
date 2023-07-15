// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { flights?: mongoDB.Collection, hotels?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING || "");
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const flightsCollection: mongoDB.Collection = db.collection("flights");
    const hotelsCollection: mongoDB.Collection = db.collection("hotels");
   
    collections.flights = flightsCollection;
    collections.hotels = hotelsCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${flightsCollection.collectionName}, ${hotelsCollection.collectionName}`);
 }