const advantages = [
  {
    title: "Advanced Reasoning",
    description:
      "Tackles complex, multi-step problems with deep analytical thinking and nuanced judgment.",
  },
  {
    title: "Safety & Honesty",
    description:
      "Built with a strong commitment to being truthful, avoiding harm, and acknowledging uncertainty.",
  },
  {
    title: "Long Context Window",
    description:
      "Processes up to 1 million tokens, enabling analysis of entire codebases, books, or document sets in one go.",
  },
  {
    title: "Coding Excellence",
    description:
      "Writes, reviews, and debugs code across dozens of languages with production-quality results.",
  },
  {
    title: "Nuanced Writing",
    description:
      "Adapts tone and style to produce everything from technical documentation to creative storytelling.",
  },
  {
    title: "Agentic Capabilities",
    description:
      "Executes long-horizon tasks autonomously using tools like web search, code execution, and file management.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Why Choose Claude?
          </h1>
          <p className="text-xl text-gray-600">
            Anthropic&apos;s AI assistant built for safety, intelligence, and
            reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
