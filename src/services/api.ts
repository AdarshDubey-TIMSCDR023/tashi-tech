import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim() || window.location.origin

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export interface ContactPayload {
  name: string
  company?: string
  email: string
  phone?: string
  service?: string
  budget?: string
  message: string
}

export interface BlogPost {
  _id?: string
  id?: string | number
  title?: string
  slug?: string
  excerpt?: string
  summary?: string
  description?: string
  content?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  author?: string
  category?: string
  image?: string
}

const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Building faster product launches with a lean engineering team',
    excerpt:
      'Learn how agile development, rapid prototyping, and scalable architecture help startups launch products faster without compromising quality.',
    createdAt: '2026-07-15T10:00:00.000Z',
  },
  {
    id: 2,
    title: 'Why modern startups are rethinking their cloud setup',
    excerpt:
      'Explore how cloud-native infrastructure improves scalability, security, and cost optimization for growing businesses.',
    createdAt: '2026-07-22T10:00:00.000Z',
  },
  {
    id: 3,
    title: 'The hidden cost of slow onboarding in SaaS products',
    excerpt:
      'Discover how intuitive UX, guided onboarding, and performance optimization can improve customer retention.',
    createdAt: '2026-07-29T10:00:00.000Z',
  },
  {
    id: 4,
    title: 'Why every business needs a responsive website in 2026',
    excerpt:
      'A responsive website improves user experience, boosts search rankings, and helps convert visitors into customers across every device.',
    createdAt: '2026-08-01T10:00:00.000Z',
  },
  {
    id: 5,
    title: 'How AI is transforming business operations',
    excerpt:
      'From intelligent chatbots to workflow automation, AI helps businesses reduce costs, improve efficiency, and deliver better customer experiences.',
    createdAt: '2026-08-05T10:00:00.000Z',
  },

]
export const submitContactLead = (payload: ContactPayload) =>
  api.post('/api/contact', payload)

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const candidateEndpoints = ['/api/posts', '/api/blog', '/api/articles']

  for (const endpoint of candidateEndpoints) {
    try {
      const response = await api.get(endpoint)
      const payload = response.data

      const posts = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.posts)
          ? payload.posts
          : Array.isArray(payload?.blogs)
            ? payload.blogs
            : Array.isArray(payload?.articles)
              ? payload.articles
              : []

      if (posts.length > 0) {
        return posts as BlogPost[]
      }
    } catch {
      // Fall back to local content when the backend route is unavailable.
    }
  }

  return FALLBACK_BLOG_POSTS
}
