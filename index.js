import { getJson } from "serpapi";
import 'dotenv/config'

const apiKey = process.env.API_KEY;

const response = await getJson({
  engine: "google",
  api_key: apiKey, 
  q: "Computer Science",
  location: "Austin, Texas",
});
console.log(response);