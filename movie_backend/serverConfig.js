import envObj from "dotenv";
envObj.config();

export const data = {
  DB_URL: process.env.DB_URL,
};
