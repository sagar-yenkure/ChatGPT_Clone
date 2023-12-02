import { asyncHandler } from "../asynchandler.js"
import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.AI_KEY
});

const askprompt = asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    try {
        if (prompt == null) {
            throw new Error("Uh oh,no prompt was provided");
        }
        const responce = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        });
        if (!responce) {
            res.send("cheak the api of OPENAI")

        }
        return res.status(200).json({
            success: true,
            responce: (responce.choices[0].message.content)
        });

    } catch (error) {
        return res.status(500).json({ "SERVER problem": error.message });
    }
})

export { askprompt }