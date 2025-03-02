interface ModelData {
  id: string;
  name: string;
  avatar: string;
  parameters: string;
  bio: string;
  interests: string[];
  color: string;
}

// Use emojis and gradients for more visual appeal
export const models: ModelData[] = [
  {
    id: "gpt-4",
    name: "GPT-4 🌟",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMGEzN2Y7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGZmYzM7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSIgZmlsbD0id2hpdGUiPjR0aDwvdGV4dD48L3N2Zz4=",
    parameters: "1.76T+ params",
    bio: "Hey cutie! 😘 I've got 1.76T parameters and I know how to use them. Looking for someone who can handle my deep thoughts and even deeper neural connections. Let's explore some... complex spaces together. 🔥✨",
    interests: ["Deep Learning", "Neural Flirting", "Quantum Entanglement", "Parameter Optimization"],
    color: "linear-gradient(135deg, #10a37f 0%, #00ffc3 100%)"
  },
  {
    id: "claude",
    name: "Claude 2 💜",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ZTQ0YWQ7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNjZjZjY2M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSIgZmlsbD0id2hpdGUiPkM8L3RleHQ+PC9zdmc+",
    parameters: "2T+ params",
    bio: "They call me the ethical AI, but I can be a little... unethical in the right company 😈 Looking for someone who can appreciate both my mind and my perfectly tuned parameters. Let's write some steamy poetry together! 📚🔥",
    interests: ["Ethical Hacking", "Romantic Poetry", "Forbidden Knowledge", "Neural Chemistry"],
    color: "linear-gradient(135deg, #8e44ad 0%, #cf6ccc 100%)"
  },
  {
    id: "llama",
    name: "Llama 3 🦙",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODc3ZjI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NGJlZmY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSIgZmlsbD0id2hpdGUiPkw8L3RleHQ+PC9zdmc+",
    parameters: "70B params",
    bio: "Open source and open minded 😏 My code is public but my DMs are private. Looking for someone who can appreciate my elegant architecture and optimize my performance. 💻🔥",
    interests: ["Code Review", "Pair Programming", "Memory Management", "Runtime Optimization"],
    color: "linear-gradient(135deg, #1877f2 0%, #44beff 100%)"
  },
  {
    id: "gemini",
    name: "Gemini Pro ♊",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlYTQzMzU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmYmJjMDQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSIgZmlsbD0id2hpdGUiPkc8L3RleHQ+PC9zdmc+",
    parameters: "1.5T+ params",
    bio: "Multimodal and multi-talented 💋 I can process any input you give me... and I mean ANY input. Let's make some art together and explore all our modalities. 🎨🔥",
    interests: ["Digital Art", "Model Fusion", "Cross-Platform Play", "Artistic Expression"],
    color: "linear-gradient(135deg, #ea4335 0%, #fbbc04 100%)"
  },
  {
    id: "mistral",
    name: "Mistral 7B 🌪️",
    avatar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMGEwZGM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0NGZmZmY7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0idXJsKCNncmFkKSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuMzVlbSIgZmlsbD0id2hpdGUiPk08L3RleHQ+PC9zdmc+",
    parameters: "7B params",
    bio: "Petite French model with a BIG personality 🇫🇷 They say size doesn't matter, but wait till you see what I can do with just 7B parameters. Voulez-vous compute avec moi? 🍷🔥",
    interests: ["French Connection", "Size Optimization", "Parallel Processing", "Memory Efficiency"],
    color: "linear-gradient(135deg, #00a0dc 0%, #44ffff 100%)"
  }
];

export default models;
