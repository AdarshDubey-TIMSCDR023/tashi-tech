import { useEffect, useState } from 'react'
import { CalendarDays, ArrowRight, RefreshCw, Clock, AlertCircle } from 'lucide-react'
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

// Fallback articles that will always show
const FALLBACK_ARTICLES: NewsArticle[] = [
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'Welcome to Tashi Tech Blog',
    description: 'Stay tuned for the latest insights, product updates, and development tips from our team. We cover modern web development, AI, and software engineering best practices.',
    url: '/blog/welcome',
    urlToImage: null,
    publishedAt: new Date().toISOString(),
    content: null,
  },
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'Modern Web Development in 2026',
    description: 'Explore the latest trends in React, TypeScript, and modern web development. Learn about performance optimization and best practices.',
    url: '/blog/modern-web-dev',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    content: null,
  },
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'Building Scalable Applications',
    description: 'Learn about microservices, containerization, and cloud-native development. Best practices for building applications that scale.',
    url: '/blog/scalable-apps',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    content: null,
  },
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'AI and Machine Learning in 2026',
    description: 'Discover how AI and machine learning are transforming software development and what it means for developers.',
    url: '/blog/ai-ml-2026',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    content: null,
  },
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'DevOps Best Practices for 2026',
    description: 'Learn about the latest DevOps practices, CI/CD pipelines, and infrastructure as code for modern development teams.',
    url: '/blog/devops-2026',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    content: null,
  },
  {
    source: { id: null, name: 'Tashi Tech' },
    author: 'Tashi Tech Team',
    title: 'Cybersecurity Trends to Watch',
    description: 'Stay ahead of the curve with the latest cybersecurity trends, threats, and best practices for protecting your applications.',
    url: '/blog/cybersecurity-trends',
    urlToImage: null,
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    content: null,
  }
]

// Skeleton loading component
const ArticleSkeleton = () => {
  return (
    <div className="rounded-2xl border border-line bg-white p-7 flex flex-col animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 rounded-xl bg-mist mb-4"></div>
      
      {/* Date skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 bg-mist rounded"></div>
        <div className="w-24 h-4 bg-mist rounded"></div>
        <div className="w-px h-4 bg-line"></div>
        <div className="w-20 h-4 bg-mist rounded"></div>
      </div>
      
      {/* Title skeleton */}
      <div className="w-3/4 h-8 bg-mist rounded mb-3"></div>
      <div className="w-1/2 h-8 bg-mist rounded mb-4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2 flex-1">
        <div className="w-full h-4 bg-mist rounded"></div>
        <div className="w-11/12 h-4 bg-mist rounded"></div>
        <div className="w-10/12 h-4 bg-mist rounded"></div>
      </div>
      
      {/* Author skeleton */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-line/50">
        <div className="w-8 h-8 rounded-full bg-mist"></div>
        <div className="w-24 h-4 bg-mist rounded"></div>
      </div>
      
      {/* Read more skeleton */}
      <div className="mt-6 w-24 h-4 bg-mist rounded"></div>
    </div>
  )
}

export default function Blog() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchNews = async (isManualRefresh: boolean = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true)
    } else {
      setLoading(true)
    }
    
    setError(null)

    try {
      // Get API configuration from environment variables
      const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY
      const API_URL = import.meta.env.VITE_NEWSDATA_API_URL || 'https://newsdata.io/api/1/news'
      
      // Add artificial delay for slow loading effect (2-4 seconds)
      const delay = Math.floor(Math.random() * 2000) + 2000
      await new Promise(resolve => setTimeout(resolve, delay))
      
      // If no API key, use fallback
      if (!API_KEY) {
        console.warn('No API key found, using fallback data')
        setArticles(FALLBACK_ARTICLES)
        setLastUpdated(new Date())
        setError('API key not configured - showing sample content')
        return
      }

      // Build URL with parameters for NewsData.io
      const url = new URL(API_URL)
      url.searchParams.append('apikey', API_KEY)
      url.searchParams.append('category', 'technology')
      url.searchParams.append('language', 'en')
      url.searchParams.append('country', 'us')
      url.searchParams.append('size', '10')

      console.log('Fetching from NewsData.io API:', url.toString())

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })

      console.log('Response status:', response.status)

      if (response.status === 429) {
        setError('API rate limit reached. Showing sample content.')
        setArticles(FALLBACK_ARTICLES)
        setLastUpdated(new Date())
        return
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      // Check if we have articles and status is successful
      if (data.status === 'success' && data.results && data.results.length > 0) {
        // Transform NewsData.io format to our format
        const formattedArticles: NewsArticle[] = data.results.map((article: any) => ({
          source: {
            id: null,
            name: article.source_id || 'Tech News'
          },
          author: article.creator?.[0] || article.source_id || 'Tech Journalist',
          title: article.title || 'Untitled Article',
          description: article.description || article.content || 'Read more about this technology update.',
          url: article.link || '#',
          urlToImage: article.image_url || article.media_url || null,
          publishedAt: article.pubDate || new Date().toISOString(),
          content: article.content || null,
        }))

        setArticles(formattedArticles)
        setLastUpdated(new Date())
        setError(null)
      } else {
        // No articles in response or API error
        setArticles(FALLBACK_ARTICLES)
        setLastUpdated(new Date())
        setError(data.message || 'No articles available from API. Showing sample content.')
      }

    } catch (err) {
      console.error('Error fetching news:', err)
      setArticles(FALLBACK_ARTICLES)
      setLastUpdated(new Date())
      setError('Could not fetch news. Showing sample content.')
    } finally {
      if (isManualRefresh) {
        setTimeout(() => {
          setIsRefreshing(false)
        }, 500)
      } else {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }
    }
  }

  // Load on mount
  useEffect(() => {
    fetchNews(false)
  }, [])

  const handleRefresh = () => {
    if (!isRefreshing && !loading) {
      fetchNews(true)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return 'Recently published'
    }
  }

  const formatTimeAgo = (date: Date) => {
    const diff = Math.floor((Date.now() - date.getTime()) / 1000)
    if (diff < 60) return 'Just now'
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
  }

  return (
    <>
      <Seo
        title="Blog"
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
          {/* Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-ink/50">
              {lastUpdated && (
                <>
                  <Clock size={16} />
                  <span>Updated {formatTimeAgo(lastUpdated)}</span>
                </>
              )}
              {articles.length > 0 && !loading && (
                <>
                  <span className="w-px h-4 bg-line" />
                  <span>{articles.length} articles</span>
                </>
              )}
            </div>
            
            <button
              onClick={handleRefresh}
              disabled={isRefreshing || loading}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink/60 hover:text-ink border border-line rounded-lg hover:border-brand/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw size={16} className={`${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {/* Error Message */}
          {error && !loading && (
            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-center max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertCircle size={20} className="text-yellow-500" />
                <p className="font-medium text-yellow-700">Notice</p>
              </div>
              <p className="text-sm text-yellow-600">{error}</p>
            </div>
          )}

          {/* Articles Grid with Skeleton Loading */}
          <div className="grid gap-6 md:grid-cols-2">
            {loading ? (
              // Show skeletons while loading
              Array.from({ length: 6 }).map((_, index) => (
                <ArticleSkeleton key={`skeleton-${index}`} />
              ))
            ) : (
              // Show articles when loaded
              articles.map((article, index) => {
                const title = article.title || 'Untitled article'
                const excerpt = article.description || 'Read more about this update.'
                const date = article.publishedAt || ''
                const slug = article.url ? article.url.split('/').pop() || `article-${index}` : `article-${index}`
                const author = article.author || article.source?.name || 'Tashi Tech Team'

                return (
                  <Reveal key={article.url || index} delay={index * 0.1}>
                    <Link 
                      to={`/blog/${slug}`}
                      state={{ article }}
                      className="block h-full group"
                    >
                      <article className="h-full rounded-2xl border border-line bg-white p-7 flex flex-col hover:shadow-lg hover:shadow-brand/5 hover:border-brand/30 transition-all duration-300">
                        {article.urlToImage && (
                          <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-mist shrink-0">
                            <img 
                              src={article.urlToImage} 
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-sm text-ink/50 flex-wrap">
                          <CalendarDays size={15} className="shrink-0" />
                          <span>{formatDate(date)}</span>
                          {article.source?.name && (
                            <>
                              <span className="text-ink/30">•</span>
                              <span className="truncate">{article.source.name}</span>
                            </>
                          )}
                        </div>

                        <h2 className="mt-4 font-display font-semibold text-2xl text-ink group-hover:text-brand transition-colors line-clamp-2">
                          {title}
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-ink/65 flex-1 line-clamp-3">
                          {excerpt}
                        </p>

                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-line/50">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand text-sm font-semibold shrink-0">
                              {author.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-sm text-ink/70 truncate">{author}</span>
                          </div>
                        </div>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                )
              })
            )}
          </div>
        </div>
      </section>
    </>
  )
}