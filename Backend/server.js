import {config} from "dotenv"
import express from "express"
import cors from 'cors'
import OpenAI from 'openai';
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())

config()

const openai = new OpenAI({
  apiKey:process.env.AI_KEY
});

app.post("/api/ask", async (req, res) => {
  const prompt = req.body.prompt;
  try {
    if (prompt == null) {
      throw new Error("Uh oh,no prompt was provided");
    }
    const responce = await openai.chat.completions.create({
      messages: [{ role:'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    return res.status(200).json({
      success: true,
      responce:(responce.choices[0].message.content)
    });
  } catch (error) {
    res.send(error.message);
  }
});
app.listen(port, () => {
  console.log(`server connected at ${port}`)
})
