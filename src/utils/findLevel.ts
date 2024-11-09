export const findLevel = (text: string) => {
    const levels = {
        junior: ["junior", "entry-level", "intern"],
        middle: ["middle", "mid-level", "intermediate"],
        senior: ["senior", "experienced"],
        lead: ["lead", "principal", "head"],
    };

    const lowerText = text.toLowerCase();

    for (const [level, keywords] of Object.entries(levels)) {
        if (keywords.some((keyword) => lowerText.includes(keyword))) {
            return level;
        }
    }

    return "unknown";
};
