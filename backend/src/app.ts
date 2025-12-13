import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get("/", (req, res) => {
    res.send("Farmers Marketplace API is running...");
});
export default app;

