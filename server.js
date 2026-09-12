const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // এখানে পরে AI API যুক্ত করা হবে
    res.json({
      reply: "তোমার মেসেজ পাওয়া গেছে: " + message
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("AI Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
