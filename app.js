import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json()); 

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/upload", (req, res) => {
  res.render("Upload");
});


app.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }


    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta/llama3-70b-instruct",
        messages: [
          {
            role: "user",
            content: `
Analyze the following resume and return ONLY a valid JSON object.

DO NOT include explanations or markdown.
DO NOT include text outside JSON.

Return in this exact format:

{ 
  "welcomeMessage": "A short friendly message addressing the user",
  "rating": number (out of 10),
  "atsScore": number (0-100),
  "strongPoints": [array of strings],
  "weakPoints": [array of strings ],
  "suggestions": [Detailed with 5 to 10 sggestions]
}

Make the welcome message friendly and professional like:
"Hey there! Here's a detailed analysis of your resume to help you improve."

Resume:
${text.slice(0, 3000)}
`
          }
        ],
        temperature: 0.5,
        max_tokens: 500
      })
    });

    const data = await response.json();

    const aiText = data.choices[0].message.content;
    
    res.json(data);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

