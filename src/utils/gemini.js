const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("./constants");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default genAI;