import { ServicePage } from './servicePages'

export default function SeoPage() {
  return (
    <ServicePage
      title="SEO"
      description="Technical and content SEO strategies that improve visibility, strengthen authority, and support long-term growth."
      intro="We combine technical improvements, content strategy, and on-page optimization to help your business get found by the right audience."
      path="/services/seo"
      points={[
        'Technical SEO audits and site health improvements',
        'Structured data and search-friendly implementation',
        'Content strategy aligned with your audience and goals',
        'Ongoing optimization for better visibility over time',
      ]}
    />
  )
}
