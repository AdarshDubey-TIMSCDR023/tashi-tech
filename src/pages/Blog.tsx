import { useEffect, useState } from 'react'
import { CalendarDays, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

interface NewsArticle {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export default function Blog() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY
        const API_URL = import.meta.env.VITE_NEWS_API_URL || 'https://newsapi.org/v2'
        
        if (!API_KEY) {
          throw new Error('News API key is missing. Please check your .env file.')
        }

        const response = await fetch(
          `${API_URL}/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
        )
        
        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to fetch news')
        }
        
        const data = await response.json()
        setArticles(data.articles || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'We could not load the latest news right now.')
        console.error('Error fetching news:', err)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [])

  // Rest of the component remains the same...
  return (
    <>
      <Seo
        title="Blog "
        description="Read the latest insights, product updates, and development tips from Tashi Tech."
        path="/blog"
      />

      <section className="pt-40 pb-16 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Blog</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Insights, product stories, and engineering updates
            </h1>
            <p className="mt-5 text-lg text-ink/60 max-w-3xl mx-auto">
              Explore practical advice and behind-the-scenes notes from our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {loading && (
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-2xl border border-line bg-white p-7 animate-pulse">
                  <div className="h-4 w-24 bg-mist rounded" />
                  <div className="h-6 w-3/4 bg-mist rounded mt-4" />
                  <div className="h-4 w-full bg-mist rounded mt-3" />
                  <div className="h-4 w-2/3 bg-mist rounded mt-2" />
                  <div className="h-10 w-32 bg-mist rounded mt-6" />
                </div>
              ))}
            </div>
          )}

          {error && !loading && (
            <div className="rounded-2xl border border-line bg-white p-8 text-center text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="rounded-2xl border border-line bg-white p-8 text-center text-ink/60">
              No articles are available yet. Please check back soon.
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article, index) => {
                const title = article.title || 'Untitled article'
                const excerpt = article.description || 'Read more about this update.'
                const date = article.publishedAt || ''
                const slug = article.url ? article.url.split('/').pop() || `article-${index}` : `article-${index}`
                const author = article.author || article.source?.name || 'Tashi Tech Team'

                return (
                  <Reveal
                    key={article.url || index}
                    delay={index * 0.05}
                  >
                    <Link 
                      to={`/blog/${slug}`}
                      state={{ article }}
                      className="block h-full group"
                    >
                      <article className="h-full rounded-2xl border border-line bg-white p-7 flex flex-col hover:shadow-lg hover:shadow-brand/5 hover:border-brand/30 transition-all duration-300">
                        {article.urlToImage && (
                          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-mist">
                            <img 
                              src={article.urlToImage} 
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-sm text-ink/50">
                          <CalendarDays size={15} />
                          <span>
                            {date
                              ? new Date(date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })
                              : 'Recently published'}
                          </span>
                        </div>

                        <h2 className="mt-4 font-display font-semibold text-2xl text-ink group-hover:text-brand transition-colors line-clamp-2">
                          {title}
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-ink/65 flex-1 line-clamp-3">
                          {excerpt}
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                          {author && (
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xs font-semibold">
                                {author.charAt(0).toUpperCase()}
                              </div>
                              <span className="text-xs text-ink/50">{author}</span>
                            </div>
                          )}
                          {article.source?.name && (
                            <span className="text-xs text-ink/30">• {article.source.name}</span>
                          )}
                        </div>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}