import { ServicePage } from './servicePages'

export default function WebDevelopment() {
  return (
    <ServicePage
      title="Web Development"
      description="Scalable web applications and marketing sites built for fast launches, strong performance, and long-term growth."
      intro="We build modern web experiences that are fast, reliable, and designed for your users from the first interaction to the last checkout."
      path="/services/web-development"
      points={[
        'Custom React and modern frontend builds',
        'API integrations and backend connectivity',
        'Performance-first architecture and SEO-ready implementation',
        'CMS or content-driven experiences for growing brands',
      ]}
    />
  )
}
