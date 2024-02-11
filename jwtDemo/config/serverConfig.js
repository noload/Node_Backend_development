import envObj from "dotenv";
envObj.config();
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const JWT_KEY = process.env.JWT_KEY;
