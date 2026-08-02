import { useEffect, useState } from 'react'
import { CalendarDays, ArrowRight, Clock, ChevronLeft, Link2, Check } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { useParams, Link, useLocation } from 'react-router-dom'

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

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  
  const articleFromState = location.state?.article as NewsArticle | undefined
  const [article, setArticle] = useState<NewsArticle | null>(articleFromState || null)

  useEffect(() => {
    if (articleFromState) {
      setLoading(false)
      return
    }

    const fetchArticle = async () => {
      try {
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY
        const API_URL = import.meta.env.VITE_NEWS_API_URL || 'https://newsapi.org/v2'
        
        if (!API_KEY) {
          throw new Error('News API key is missing')
        }

        const response = await fetch(
          `${API_URL}/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch article')
        }
        
        const data = await response.json()
        const articles = data.articles || []
        
        const foundArticle = articles.find((a: NewsArticle) => {
          const articleSlug = a.url ? a.url.split('/').pop() : ''
          return articleSlug === slug
        })
        
        if (foundArticle) {
          setArticle(foundArticle)
        } else {
          setError('Article not found')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'We could not load this article right now.')
        console.error('Error fetching article:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug, articleFromState])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const url = window.location.href
    const title = article?.title || ''

    if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        '_blank'
      )
    } else if (platform === 'linkedin') {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        '_blank'
      )
    }
  }

  // Loading State
  if (loading) {
    return (
      <>
        <Seo title="Loading..." description="Loading article..." path={`/blog/${slug}`} />
        <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-4 w-32 bg-mist rounded mb-6" />
              <div className="h-10 w-3/4 bg-mist rounded mb-4" />
              <div className="h-4 w-48 bg-mist rounded mb-6" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-mist" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-mist rounded" />
                  <div className="h-3 w-24 bg-mist rounded" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-mist rounded" />
                <div className="h-4 w-full bg-mist rounded" />
                <div className="h-4 w-3/4 bg-mist rounded" />
                <div className="h-4 w-full bg-mist rounded" />
                <div className="h-4 w-5/6 bg-mist rounded" />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Error State
  if (error || !article) {
    return (
      <>
        <Seo title="Article Not Found" description="The requested article could not be found." path={`/blog/${slug}`} />
        <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="rounded-2xl border border-line bg-white p-12">
              <h1 className="font-display font-bold text-2xl text-ink mb-4">
                {error || 'Article Not Found'}
              </h1>
              <p className="text-ink/60 mb-8">
                The article you're looking for doesn't exist or has been moved.
              </p>
              <Button to="/blog" icon={<ArrowRight size={18} />}>
                Back to Blog
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  const title = article.title || 'Untitled article'
  const description = article.description || ''
  const date = article.publishedAt || ''
  const author = article.author || article.source?.name || 'Tashi Tech Team'
  const content = article.content || article.description || ''
  const featuredImage = article.urlToImage || ''
  const source = article.source?.name || ''

  return (
    <>
      <Seo
        title={`${title} - Tashi Tech Blog`}
        description={description.slice(0, 160)}
        path={`/blog/${slug}`}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent" aria-hidden="true" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-brand transition-colors mb-6 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to all posts
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-ink/50 mb-4">
              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                <span>
                  {date ? new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'Recently published'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} />
                <span>5 min read</span>
              </div>
              {source && (
                <span className="px-2 py-1 rounded-full bg-brand/5 border border-brand/10 text-xs text-brand">
                  {source}
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.1]">
              {title}
            </h1>

            {description && (
              <p className="mt-4 text-lg lg:text-xl text-ink/60 max-w-2xl leading-relaxed">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-semibold text-sm">
                  {author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{author}</p>
                  <p className="text-xs text-ink/50">Author</p>
                </div>
              </div>
              <a 
                href="https://x.com/tashitechin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow @tashitechin
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="relative max-w-6xl mx-auto px-6 lg:px-8 -mt-4 mb-8">
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-line shadow-xl shadow-brand/5">
              <img 
                src={featuredImage} 
                alt={title}
                className="w-full h-auto max-h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      )}

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal delay={0.2}>
            <div className="prose prose-lg prose-brand max-w-none">
              {content ? (
                <div>
                  <p className="text-lg leading-relaxed">{content}</p>
                  {article.url && (
                    <div className="mt-8 p-6 bg-mist rounded-2xl border border-line">
                      <p className="text-sm text-ink/60">
                        Read the full article on{' '}
                        <a 
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand hover:underline font-medium"
                        >
                          {source || 'original source'}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl border border-line bg-mist p-8 text-center text-ink/60">
                  <p className="text-lg">Full content is being prepared. Please check back soon.</p>
                </div>
              )}
            </div>
          </Reveal>

          {/* Share Section */}
          <Reveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-line">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink mb-3">Share this article</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="p-2.5 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="p-2.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={handleCopyLink}
                      className="p-2.5 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors"
                      aria-label="Copy link"
                    >
                      {copied ? <Check size={18} /> : <Link2 size={18} />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="https://x.com/tashitechin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Follow @tashitechin
                  </a>
                  <Button to="/contact" size="md" icon={<ArrowRight size={16} />}>
                    Work With Us
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA Section */}
          <Reveal delay={0.4}>
            <div className="mt-12 pt-8 border-t border-line">
              <div className="bg-gradient-to-br from-brand/5 via-transparent to-brand/5 rounded-2xl border border-line p-8 text-center">
                <h3 className="font-display font-semibold text-xl text-ink mb-2">
                  Enjoyed this article?
                </h3>
                <p className="text-ink/60 text-sm mb-6">
                  Explore more insights from our team or start a project with us.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://x.com/tashitechin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DA1F2] text-white hover:bg-[#1A8CD8] transition-colors text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Follow @tashitechin
                  </a>
                  <Button to="/blog" variant="secondary" icon={<ArrowRight size={16} />}>
                    Read More Articles
                  </Button>
                  <Button to="/contact" icon={<ArrowRight size={16} />}>
                    Start a Project
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}