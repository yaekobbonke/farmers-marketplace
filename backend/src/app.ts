import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler";
import authRoute  from "./modules/auth/auth.routes"
import { AuthController } from "./modules/auth/auth.controller";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute)
app.use('/api', routes);

app.get("/", (req, res) => {
    res.send("Farmers Marketplace API is running...");
});
app.use(errorHandler);

export default app;

