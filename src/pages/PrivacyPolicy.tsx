import Seo from '../components/Seo'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'

const SECTIONS = [
  {
    title: 'Information we collect',
    body:
      'We collect the information you provide when you contact us, request a quote, or subscribe for updates. This may include your name, email address, phone number, company name, project details, and any other information you choose to share.',
  },
  {
    title: 'How we use your information',
    body:
      'We use your information to respond to inquiries, provide project support, improve our website experience, and communicate relevant updates about our services.',
  },
  {
    title: 'Sharing your information',
    body:
      'We do not sell or rent your personal information. We may share it with trusted service providers who help us operate our website and deliver services, subject to appropriate confidentiality obligations.',
  },
  {
    title: 'Cookies and analytics',
    body:
      'Our site may use cookies and similar tools to understand traffic patterns, improve performance, and make the experience more relevant. You can disable cookies in your browser settings if you prefer.',
  },
  {
    title: 'Data retention',
    body:
      'We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.',
  },
  {
    title: 'Your choices',
    body:
      'You may contact us at any time to request access to, correction of, or deletion of your personal information, subject to applicable law.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Learn how Tashi Tech collects, uses, and protects your personal information on this website."
        path="/privacy"
      />

      <section className="pt-40 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Privacy Policy</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Privacy Policy
            </h1>
            <p className="mt-5 text-lg text-ink/60 leading-relaxed">
              This Privacy Policy explains how Tashi Tech collects, uses, and protects information about visitors and clients using our website and services.
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
