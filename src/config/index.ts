import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGO_URI: string;
}

export default {
  port: process.env.PORT,
  databse_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
};
