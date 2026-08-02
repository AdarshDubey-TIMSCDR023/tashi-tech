import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { SERVICES } from '../utils/data'

const DISPLAY_SERVICES = [
  {
    title: 'Web Development',
    path: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    path: '/services/mobile-app-development',
  },
  {
    title: 'UI/UX Design',
    path: '/services/ui-ux-design',
  },
  {
    title: 'SEO',
    path: '/services/seo',
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore Tashi Tech's full range of software services — web development, mobile app development, UI/UX design, and SEO."
        path="/services"
      />

      <section className="pt-40 pb-16 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Services</Eyebrow>

            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Everything you need to ship, in one place
            </h1>

            <p className="mt-5 text-lg text-ink/60 max-w-2xl mx-auto">
              Four specialized services designed to help your business grow with
              modern technology and exceptional user experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISPLAY_SERVICES.map((item, i) => {
            const service = SERVICES.find((s) => s.title === item.title)

            if (!service) return null

            return (
              <Reveal key={service.title} delay={(i % 3) * 0.06}>
                <div className="group h-full p-7 rounded-2xl border border-line hover:border-brand/30 bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <service.icon size={20} />
                  </div>

                  <h3 className="mt-5 font-display font-semibold text-lg text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-ink/55 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 flex-1">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ink/60"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand mt-0.5 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    to={item.path}
                    variant="ghost"
                    className="mt-6 !px-0 self-start"
                    icon={<ArrowRight size={15} />}
                  >
                    Learn More
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="py-20 bg-mist border-y border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-ink">
              Not sure which service fits?
            </h2>

            <p className="mt-3 text-ink/60">
              Tell us what you're building — we'll recommend the right approach
              on a free 30-minute consultation.
            </p>

            <div className="mt-8">
              <Button
                to="/contact"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Book Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}