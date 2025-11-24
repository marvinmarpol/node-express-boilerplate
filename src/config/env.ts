import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_DRIVER: process.env.DB_DRIVER || "memory",
  POSTGRES_URL: process.env.POSTGRES_URL || "",
  MONGO_URL: process.env.MONGO_URL || "",
  MONGO_DB: process.env.MONGO_DB || "test",
};
