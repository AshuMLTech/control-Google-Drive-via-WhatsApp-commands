// aiSummary.js
// Summarizes text content using OpenAI GPT-4o

const OpenAI = require('openai');

async function summarizeText(text) {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt = `Summarize the following content into concise bullet points:\n\n${text}`;
    
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3
    });

    return response.choices[0].message.content.trim();
}

module.exports = summarizeText;
