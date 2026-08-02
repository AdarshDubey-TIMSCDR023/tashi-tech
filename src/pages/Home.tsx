import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle2, Zap, Users, Shield, Clock, Building2, Heart, GraduationCap, Landmark, Plane, ShoppingBag, Factory, Home as HomeIcon, Truck, Utensils } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { SERVICES, TECH_STACK, TESTIMONIALS } from '../utils/data'
import { useEffect, useRef, useState } from 'react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

// Custom stats data
const STATS = [
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 26, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
]

// Industry data with icons
const INDUSTRIES = [
  { name: 'Healthcare', icon: Heart },
  { name: 'Education', icon: GraduationCap },
  { name: 'Finance', icon: Landmark },
  { name: 'Travel', icon: Plane },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Construction', icon: Building2 },
  { name: 'Real Estate', icon: HomeIcon },
  { name: 'Logistics', icon: Truck },
  { name: 'Food', icon: Utensils },
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

export default function Home() {
  return (
    <>
      <Seo
        title="Tashi Tech - Scalable Software Development Company"
        description="Tashi Tech builds scalable web apps, mobile apps, AI solutions, and enterprise software that drive business growth."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5" aria-hidden="true" />
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="absolute inset-0 glow" aria-hidden="true" />
        
        <motion.div
          className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-brand/10 blur-3xl"
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInDown}>
              <Eyebrow>Tashi Tech · Innovate · Build · Elevate</Eyebrow>
            </motion.div>

            <motion.h1 
              variants={scaleIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink max-w-5xl mx-auto text-center"
            >
              We build scalable digital solutions that drive business growth
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-ink/60 max-w-3xl mx-auto leading-relaxed text-justify"
            >
              Transform your ideas into modern web applications, mobile apps, AI
              solutions, cloud platforms, and enterprise software — engineered by a
              team that ships.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Button to="/contact" size="lg" icon={<ArrowRight size={18} />}>
                Get Started
              </Button>
              <Button to="/contact" size="lg" variant="secondary">
                Book Consultation
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-6 text-sm text-ink/50"
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                  >
                    <Star size={14} className="fill-brand text-brand" />
                  </motion.span>
                ))}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="ml-1.5 font-medium text-ink/70"
                >
                  4.9/5
                </motion.span>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-6 pt-2"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.img 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      src={`https://i.pravatar.cc/32?img=${i}`} 
                      alt="Team member" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="w-8 h-8 rounded-full border-2 border-white bg-brand/10 flex items-center justify-center text-[9px] font-semibold text-brand"
                  >
                    +20
                  </motion.div>
                </div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-xs text-ink/40"
                >
                  Expert team
                </motion.span>
              </motion.div>
              <div className="w-px h-6 bg-line" />
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-xs text-ink/40"
                >
                  99.9% uptime
                </motion.span>
              </motion.div>
            </motion.div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-brand/20"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: 0
                  }}
                  animate={{
                    y: ["0%", "-100%", "0%"],
                    x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                    scale: [0, 1, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-line bg-mist relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {STATS.map((stat, i) => (
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

      {/* SERVICES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>What Tashi Tech does</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              End-to-end engineering, under one roof
            </h2>
            <p className="mt-4 text-lg text-ink/60 leading-relaxed text-justify">
              From first sketch to production deployment, our team covers the full
              stack — so you're not stitching together five different vendors.
            </p>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="group h-full p-7 rounded-2xl border border-line hover:border-brand/30 bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="w-full h-full bg-brand rounded-bl-full" />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors relative z-10">
                    <service.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg text-ink relative z-10">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed relative z-10 text-justify">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/services" variant="secondary" icon={<ArrowRight size={16} />}>
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="py-20 bg-mist border-y border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <Eyebrow>Our portfolio</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              Projects that speak for themselves
            </h2>
            <p className="mt-4 text-lg text-ink/60 text-center">
              See how we've helped businesses transform their digital presence
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { 
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", 
                title: "FinTech Dashboard", 
                desc: "Real-time analytics platform" 
              },
              { 
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop", 
                title: "Healthcare App", 
                desc: "Patient management system" 
              },
              { 
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", 
                title: "E-Commerce Platform", 
                desc: "Scalable online marketplace" 
              }
            ].map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-line hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-brand/5 relative">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-xs font-semibold text-brand-light">Tashi Tech</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-ink">{project.title}</h3>
                    <p className="text-sm text-ink/50">{project.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/portfolio" variant="secondary" icon={<ArrowRight size={16} />}>
              View our portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-light">
              Technologies
            </p>
            <h2 className="mt-3 font-display font-bold text-3xl text-white">
              Built on tools that scale
            </h2>
            <p className="mt-2 text-white/40 text-sm">
              The modern stack we use to build your success
            </p>
          </Reveal>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-4 pr-4 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="px-5 py-2.5 rounded-full border border-white/10 text-white/70 text-sm font-medium whitespace-nowrap hover:border-brand/30 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 text-center">
          <span className="text-xs text-white/20 font-mono"># Built with love by Tashi Tech</span>
        </div>
      </section>

      {/* INDUSTRIES - Redesigned with better visual appeal */}
      <section className="py-20 lg:py-28 bg-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              Domain experience that <br className="hidden sm:block" />
              <span className="text-brand">shortens the ramp-up</span>
            </h2>
            <p className="mt-3 text-lg text-ink/60">
              We understand your industry's unique challenges
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.name} delay={i * 0.04}>
                <motion.div 
                  className="group relative p-4 sm:p-5 rounded-xl border border-line bg-white hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 transition-all duration-300 cursor-default text-center"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <industry.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-ink/70 group-hover:text-ink transition-colors">
                      {industry.name}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-ink/40 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-line" />
              And many more industries we serve
              <span className="w-8 h-px bg-line" />
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-mist border-y border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Client feedback</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              Trusted by teams who ship
            </h2>
            <p className="mt-2 text-lg text-ink/60 text-center">
              Real reviews from real clients who chose Tashi Tech
            </p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full p-7 rounded-2xl bg-white border border-line hover:border-brand/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={14} className="fill-brand text-brand" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-brand-light/50">Tashi Tech</span>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed text-justify">"{t.review}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-display font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink/50">{t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TASHI TECH */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <Eyebrow>Why Tashi Tech</Eyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
              Built differently. Built to last.
            </h2>
            <p className="mt-4 text-lg text-ink/60 text-center">
              We combine technical excellence with a deep commitment to your success
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized performance from day one" },
              { icon: Users, title: "Dedicated Team", desc: "Your success is our priority" },
              { icon: Shield, title: "Enterprise Grade", desc: "Security and reliability built-in" },
              { icon: Clock, title: "On-Time Delivery", desc: "We respect your deadlines" }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-brand/8 flex items-center justify-center mx-auto group-hover:bg-brand group-hover:text-white transition-colors">
                    <item.icon size={24} className="text-brand group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink/50">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl bg-ink px-8 py-14 lg:px-16 lg:py-16 text-center overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-white max-w-2xl mx-auto">
                  Ready to build something that scales?
                </h2>
                <p className="mt-3 text-white/60 max-w-lg mx-auto">
                  Book a free consultation and get a project estimate within 48 hours.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button to="/contact" size="lg" icon={<ArrowRight size={18} />}>
                    Get Free Consultation
                  </Button>
                  <Button to="/contact" size="lg" variant="secondary">
                    Contact Us
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
                  {['No obligation', 'Response within 48h', 'NDA on request', '100% Confidential'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-brand-light" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-[10px] text-white/20 font-mono">
                  Tashi Tech · Built to Scale · Since 2020
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}