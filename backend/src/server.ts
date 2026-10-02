import { createServer } from "node:http";
import { ToolCategory, type Tool } from "../../shared/types.js";

const tools: Tool[] = [
  {
    id: 1,
    name: "Cordless Drill",
    description: "A versatile cordless drill for various drilling tasks.",
    price: 99.99,
    category: ToolCategory.PowerTools,
    imageUrl: "https://example.com/images/cordless-drill.jpg",
  },
  {
    id: 2,
    name: "Hammer",
    description: "A durable hammer for general construction and woodworking.",
    price: 19.99,
    category: ToolCategory.HandTools,
    imageUrl: "https://example.com/images/hammer.jpg",
  },
  {
    id: 3,
    name: "Garden Trowel",
    description: "A small hand tool for gardening and planting.",
    price: 9.99,
    category: ToolCategory.GardenTools,
    imageUrl: "https://example.com/images/garden-trowel.jpg",
  },
];

const server = createServer((req, res) => {
  if (req.url === "/api/alive") {
    res.writeHead(200, { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify({
        status: "alive",
        message: "Server is alive and running!",
        timestamp: new Date().toISOString(),
        preview: tools[0] // Return the first tool as a preview
    }));
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
);

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});     