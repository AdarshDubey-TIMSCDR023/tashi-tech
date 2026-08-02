import { ServicePage } from './servicePages'

export default function MobileAppDevelopment() {
  return (
    <ServicePage
      title="Mobile App Development"
      description="Native-feel mobile apps for iOS and Android, built to scale with your product and business needs."
      intro="We create mobile experiences that feel polished, ship quickly, and remain maintainable as the product grows."
      path="/services/mobile-app-development"
      points={[
        'Cross-platform mobile app development',
        'Offline-ready and performance-focused experiences',
        'App store deployment and release support',
        'Thoughtful product flows for better user retention',
      ]}
    />
  )
}
