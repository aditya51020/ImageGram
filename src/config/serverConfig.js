import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Mimic __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file in the src directory
dotenv.config({ path: path.resolve(__dirname, './.env') });

console.log("DB_URL from .env:", process.env.DB_URL); // Debug to verify the value
export const DB_URL = process.env.DB_URL;


