import { Check, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { PRICING_PLANS } from '../utils/data'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Transparent starting prices for Tashi Tech's Starter, Professional, and Enterprise software development packages."
        path="/pricing"
      />

      <section className="pt-40 pb-16 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Straightforward pricing, no surprises
            </h1>
            <p className="mt-5 text-lg text-ink/60">
              Every engagement starts with a scoping call. These are starting
              points — your final quote depends on complexity and timeline.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'bg-ink text-white shadow-2xl shadow-brand/20 lg:-translate-y-3'
                    : 'bg-white border border-line text-ink'
                }`}
              >
                {plan.highlighted && (
                  <span className="self-start mb-4 px-3 py-1 rounded-full bg-brand text-white text-xs font-semibold">
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl">{plan.name}</h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-white/60' : 'text-ink/55'}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display font-bold text-4xl">{plan.price}</span>
                </div>
                <p className={`text-xs mt-1 ${plan.highlighted ? 'text-white/40' : 'text-ink/40'}`}>
                  {plan.period}
                </p>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${plan.highlighted ? 'text-brand-light' : 'text-brand'}`}
                      />
                      <span className={plan.highlighted ? 'text-white/80' : 'text-ink/70'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className={`mt-8 w-full ${plan.highlighted ? '!bg-brand hover:!bg-brand-light' : ''}`}
                >
                  Get started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-3xl mx-auto mt-8 px-6 lg:px-8">
          <div className="rounded-2xl border border-dashed border-line p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-display font-semibold text-lg text-ink">Need something custom?</h3>
              <p className="text-sm text-ink/55 mt-1">
                Multi-system platforms and long-term partnerships get a tailored quote.
              </p>
            </div>
            <Button to="/contact" variant="secondary" icon={<ArrowRight size={16} />}>
              Request custom quote
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
