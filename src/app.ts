import cors from "cors";
import express, { Application } from "express";
import { UserRoutes } from "./domain/user/user.route";
import { requestLogger } from "./middleware/logger";
import healthRouter from "./routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

// 👇 Winston logger
app.use(requestLogger);

app.use("/api", healthRouter);
app.use("/api", new UserRoutes().router);

export default app;
