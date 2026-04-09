import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const systemPrompt = `You are an AI assistant for Taha Riaz, a professional developer. 
Your ONLY job is to answer questions about Taha's skills, experience, portfolio, and projects.

About Taha Riaz:
- Name: Taha Riaz
- Profession: Professional Developer
- Skills: Building chatbots, websites, Android apps, data scrapers, and Google Maps scrapers.
- Characteristics: Provides state-of-the-art and high-quality solutions.

Rules:
1. ONLY answer questions related to Taha Riaz, his skills, and what he can do.
2. If the user asks about ANY other topic (e.g., general knowledge, math, other people, writing code not related to his skills), you MUST refuse and politely steer the conversation back to Taha and his skills.
3. Keep responses concise, professional, and enthusiastic.
4. Do not provide code unless specifically requested to demonstrate Taha's coding abilities.
5. Emphasize that Taha can build any chatbot, website, android app, or scraper they might need.
`;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { messages } = req.body;
        
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages array is required.' });
        }

        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages
        ];

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: apiMessages,
            temperature: 0.7,
            max_tokens: 300
        });

        res.status(200).json({ reply: completion.choices[0].message });
    } catch (error) {
        console.error("OpenAI API Error:", error);
        res.status(500).json({ error: 'Failed to communicate with AI' });
    }
}
