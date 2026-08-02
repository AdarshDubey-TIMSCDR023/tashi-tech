import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

interface ServicePageProps {
  title: string
  description: string
  intro: string
  points: string[]
  path: string
}

export function ServicePage({ title, description, intro, points, path }: ServicePageProps) {
  return (
    <>
      <Seo title={title} description={description} path={path} />

      <section className="pt-40 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>{title}</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink max-w-3xl">
              {title}
            </h1>
            <p className="mt-6 text-lg text-ink/60 max-w-3xl leading-relaxed">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-2xl border border-line bg-white p-8">
              <h2 className="font-display font-semibold text-2xl text-ink">What this service includes</h2>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-mist p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-semibold text-xl text-ink">Need a tailored approach?</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">
                  We shape each engagement around your goals, users, and technical constraints so the work is useful from day one.
                </p>
              </div>
              <Button to="/contact" className="mt-8 w-fit" icon={<ArrowRight size={16} />}>
                Book a consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
