import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'

const SECTIONS = [
  {
    title: 'Acceptance of terms',
    body:
      'By visiting or using the Tashi Tech website, you agree to be bound by these Terms of Service and any applicable laws or regulations. If you do not agree, please do not use this website.',
  },
  {
    title: 'Use of the website',
    body:
      'You agree to use the website only for lawful purposes and not to engage in any activity that could harm, disrupt, or interfere with the operation of the site or its services.',
  },
  {
    title: 'Intellectual property',
    body:
      'All content, branding, design assets, graphics, and code displayed on this website are the property of Tashi Tech unless otherwise stated and may not be copied, reused, or distributed without permission.',
  },
  {
    title: 'Client work and deliverables',
    body:
      'Any project-specific scope, timeline, pricing, and deliverables are governed by a separate written agreement between Tashi Tech and the client. These terms do not replace those agreements.',
  },
  {
    title: 'Limitation of liability',
    body:
      'Tashi Tech will not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of this website or any services provided through it.',
  },
  {
    title: 'Changes to these terms',
    body:
      'We may update these Terms of Service from time to time. Continued use of the website after any changes means you accept the revised terms.',
  },
]

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Service"
        description="Read the terms governing the use of the Tashi Tech website and services."
        path="/terms"
      />

      <section className="pt-40 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Terms of Service</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Terms of Service
            </h1>
            <p className="mt-5 text-lg text-ink/60 leading-relaxed">
              These terms govern your access to and use of the Tashi Tech website and any related services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          {SECTIONS.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-line bg-white p-7">
                <h2 className="font-display font-semibold text-xl text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink/65">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
