import { Target, Eye, Heart, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { useEffect, useRef, useState } from 'react'

const VALUES = [
  { icon: Target, title: 'Outcomes over output', text: 'We measure success by the business result, not lines of code shipped.' },
  { icon: Eye, title: 'Radical transparency', text: 'Fixed sprints, open backlogs, and direct access to the engineers on your project.' },
  { icon: Heart, title: 'Built to last', text: 'We write code we\'d be comfortable maintaining ourselves, five years from now.' },
]

const TIMELINE = [
  {
    year: '2025',
    title: 'Founded',
    text: 'Tashi Tech was founded with a vision to build innovative digital solutions that empower startups, businesses, and organizations through modern technology.',
  },
  {
    year: '2025',
    title: 'First Projects Delivered',
    text: 'Successfully delivered custom websites, business applications, and software solutions with a strong focus on quality, performance, and user experience.',
  },
  {
    year: '2026',
    title: 'Service Expansion',
    text: 'Expanded our expertise into AI-powered applications, mobile app development, cloud solutions, and scalable full-stack software development.',
  },
  {
    year: 'Future',
    title: 'Global Vision',
    text: 'Our goal is to become a trusted technology partner for businesses worldwide by delivering innovative, reliable, and future-ready digital solutions.',
  },
]

// Custom stats data with Tashi Tech branding
const ABOUT_STATS = [
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 26, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
]

// Counter component with counting effect
interface CounterProps {
  value: number
  suffix: string
  label: string
  duration?: number
}

function Counter({ value, suffix, label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const endValue = value
    const isSupport = suffix === '/7'
    
    if (isSupport) {
      setCount(endValue)
      return
    }

    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easedProgress * endValue)
      
      setCount(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration, suffix])

  const displayValue = (): string => {
    if (suffix === '%') {
      return count + '%'
    } else if (suffix === '/7') {
      return '24/7'
    } else {
      return count + suffix
    }
  }

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline gap-0.5">
        <span className="font-display font-bold text-3xl sm:text-4xl text-ink">
          {displayValue()}
        </span>
      </div>
      <p className="mt-1 text-sm text-ink/55">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <>
      <Seo
        title="About Us "
        description="Learn about Tashi Tech's story, mission, and the team building scalable software for growing companies. 30+ projects completed with 100% client satisfaction."
        path="/about"
      />

      <section className="pt-40 pb-20 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Eyebrow>About Tashi Tech</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink max-w-2xl">
              We're a team of engineers who care whether the product actually works
            </h1>
            <p className="mt-6 text-lg text-ink/60 max-w-2xl leading-relaxed">
              Tashi Tech was founded on a simple idea: software companies should be
              judged by what they ship, not what they pitch. Since 2017 we've built
              that reputation one project at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS - Centered */}
      <section className="border-y border-line bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <div className="flex flex-col items-center">
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    label={stat.label}
                  />
                  {i === 0 && (
                    <span className="inline-block mt-1 text-[10px] font-semibold text-brand-light tracking-wider uppercase">
                      Tashi Tech
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-line h-full">
                <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center text-brand">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/55 leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-mist border-y border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              How we got here
            </h2>
          </Reveal>
          <div className="relative pl-8 border-l-2 border-line space-y-12">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1} className="relative">
                <span className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full bg-brand ring-4 ring-mist" />
                <p className="text-sm font-semibold text-brand">{item.year}</p>
                <h3 className="mt-1 font-display font-semibold text-lg text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink/55 leading-relaxed max-w-lg">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-ink">
              Want to work with us?
            </h2>
            <p className="mt-3 text-ink/60">We're always open to meeting teams building something worthwhile.</p>
            <div className="mt-8">
              <Button to="/contact" size="lg" icon={<ArrowRight size={18} />}>
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}