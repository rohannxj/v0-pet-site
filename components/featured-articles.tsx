import { ChevronRight } from "lucide-react"

const articles = [
  {
    id: 1,
    date: "December 15, 2025",
    title: "SAMeThistle Pro vs. Denamarin: What's the Difference and Which Is Right for Your Dog?",
  },
  {
    id: 2,
    date: "December 10, 2025",
    title: "SAMeThistle Pro Dosing by Weight: Simple Chart and Tips for Picky Eaters",
  },
  {
    id: 3,
    date: "October 31, 2025",
    title: "How Lignans May Help Reduce the Risk of Breast Cancer",
  },
]

export function FeaturedArticles() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3b5e2b] mb-3">Featured Articles</h2>
          <div className="w-32 h-[3px] bg-[#3b5e2b] mx-auto" />
        </div>
        <div className="flex justify-end mb-8">
          <a
            href="/blog"
            className="flex items-center gap-1 text-sm text-gray-700 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition-colors"
          >
            Visit our blog <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
          {articles.map((article) => (
            <div key={article.id}>
              <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug hover:text-[#3b5e2b] cursor-pointer transition-colors">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
