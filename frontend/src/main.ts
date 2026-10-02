import type { Tool } from "../../shared/types.js";
interface AliveResponse {
    status: string;
    message: string;
    timestamp: string;
    preview: Tool;
}

async function checkServerAlive(): Promise<void> {
    const statusElement = document.getElementById("alive-status");
    if (!statusElement) return;
    
    try {
        const response = await fetch("http://localhost:3000/alive");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as AliveResponse;
        statusElement.textContent =
            `${data.message} Tool: ${data.preview.name} - ${data.preview.category} - $${data.preview.price}`;
    } catch (error) {
        console.error("Error checking server alive status:", error);
        statusElement.textContent = "Server is not alive.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    checkServerAlive();
});