import { ArrowRight, Briefcase, Globe, Sparkles } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'

const PROJECTS = [
  {
    title: 'B2B SaaS platform redesign',
    summary:
      'We modernized a complex analytics workflow with a cleaner information architecture, faster onboarding, and better mobile usability.',
    tags: ['Product Strategy', 'UI/UX', 'Frontend'],
  },
  {
    title: 'Retail commerce experience',
    summary:
      'Built a scalable storefront with checkout optimization, CMS-driven content, and high-conversion merchandising patterns.',
    tags: ['E-commerce', 'Performance', 'React'],
  },
  {
    title: 'AI-powered operations dashboard',
    summary:
      'Delivered a real-time command center with dashboards, workflow automation, and integrations for cross-team collaboration.',
    tags: ['AI', 'Dashboards', 'Cloud'],
  },
]

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Outcome-driven delivery',
    text: 'From discovery to launch, every engagement is shaped around product goals, measurable growth, and long-term maintainability.',
  },
  {
    icon: Globe,
    title: 'Scalable product architecture',
    text: 'We design systems that can grow with your business, from early MVPs to multi-team platforms.',
  },
  {
    icon: Sparkles,
    title: 'Design and engineering together',
    text: 'Our team combines product thinking, interface design, and engineering execution under one roof.',
  },
]

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Explore Tashi Tech's portfolio of web, mobile, AI, and SaaS product launches built for growth-focused brands."
        path="/portfolio"
      />

      <section className="pt-40 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Portfolio</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink max-w-3xl">
              Products we’ve built for ambitious companies
            </h1>
            <p className="mt-6 text-lg text-ink/60 max-w-3xl leading-relaxed">
              Our portfolio spans software products, marketplaces, internal tools, and digital experiences designed to help teams grow faster.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-white p-7 flex flex-col">
                <h2 className="font-display font-semibold text-xl text-ink">{project.title}</h2>
                <p className="mt-3 text-sm text-ink/60 leading-7 flex-1">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand/8 px-3 py-1 text-xs font-medium text-brand">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="rounded-2xl border border-line bg-mist p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center text-brand">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-7">{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-ink">Ready to build your next product?</h2>
            <p className="mt-3 text-ink/60">We can help you turn a complex idea into a launch-ready experience.</p>
            <div className="mt-8">
              <Button to="/contact" size="lg" icon={<ArrowRight size={18} />}>
                Start a project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
