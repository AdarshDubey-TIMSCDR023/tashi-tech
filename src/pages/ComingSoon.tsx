import { Clock } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function ComingSoon() {
  return (
    <>
      <Seo
        title="Coming Soon"
        description="We're building something amazing at Tashi Tech. Stay tuned for exciting new features, services, and innovations coming your way."
        path="/coming-soon"
      />
      
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="absolute inset-0 glow" aria-hidden="true" />
        
        {/* Schema markup for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Coming Soon - Tashi Tech",
            "description": "We're working on something amazing. Stay tuned for updates!",
            "url": "https://tashitech.com/coming-soon",
            "about": {
              "@type": "Thing",
              "name": "Upcoming Features & Services"
            }
          })}
        </script>
        
        <Reveal className="relative text-center px-6">
          <span className="font-display font-bold text-brand/20 text-[9rem] leading-none select-none" aria-hidden="true">
            SOON
          </span>
          <h1 className="font-display font-bold text-3xl text-ink -mt-6">
            Coming Soon
          </h1>
          <p className="mt-3 text-ink/60 max-w-sm mx-auto">
            We're working on something amazing. Stay tuned!
          </p>
          <div className="mt-8">
            <Button to="/" icon={<Clock size={16} />}>
              Back to home
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}