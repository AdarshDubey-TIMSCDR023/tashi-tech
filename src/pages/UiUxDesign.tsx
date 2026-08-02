import { ServicePage } from './servicePages'

export default function UiUxDesign() {
  return (
    <ServicePage
      title="UI/UX Design"
      description="Thoughtful product design that makes complex products feel simple, clear, and engaging."
      intro="We combine research, wireframing, and visual design to create experiences that are intuitive and built around real user needs."
      path="/services/ui-ux-design"
      points={[
        'Research-driven information architecture',
        'User flows, wireframes, and high-fidelity screens',
        'Design systems for scalable product teams',
        'Usability improvements informed by real feedback',
      ]}
    />
  )
}
