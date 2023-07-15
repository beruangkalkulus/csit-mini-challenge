import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv"

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

dotenv.config();

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
