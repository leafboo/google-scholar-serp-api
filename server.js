import { getJson } from 'serpapi';
import { createServer } from 'node:http'
import 'dotenv/config'

const hostname = '127.0.0.1'; // The numerical IP Address of localhost 
const port = 3000;

const apiKey = process.env.API_KEY;

const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`); // new URL(input, base) => https://base/input
    const searchParams = url.searchParams; // Returns an object of {key, value}
    const query = searchParams.get('q'); // Returns the value of the key 'q'


    try {
        // get the data from the SerpApi
        const response = await getJson({
            engine: "google",
            api_key: apiKey, 
            q: query,
            location: "Austin, Texas",
        });
        // the data will then be provided to the frontend
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch(error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
    }
    
});
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});