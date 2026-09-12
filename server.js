const express = require("express");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: req.body.message
    });

    res.json({
      reply: response.output_text
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "AI response failed"
    });
  }
});

app.get("/", (req, res) => {
  res.send("AI Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
