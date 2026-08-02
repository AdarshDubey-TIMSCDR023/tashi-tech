import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { FAQS } from '../utils/data'

export default function Faqs() {
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = useMemo(
    () =>
      FAQS.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  )

  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about working with Tashi Tech — timelines, pricing, support, and more."
        path="/faqs"
      />

      <section className="pt-40 pb-16 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>FAQs</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Frequently asked questions
            </h1>
            <p className="mt-5 text-lg text-ink/60">
              Can't find what you're looking for? Reach out and we'll answer directly.
            </p>

            <div className="mt-8 relative max-w-md mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-11 pr-4 py-3 rounded-full border border-line bg-white text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <Reveal key={faq.q} delay={i * 0.04}>
                  <div className="rounded-2xl border border-line bg-white overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-ink">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-brand"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-ink/60 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
            {filtered.length === 0 && (
              <p className="text-center text-ink/50 py-12">No questions match your search.</p>
            )}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="text-ink/60">Still have questions?</p>
            <div className="mt-5">
              <Button to="/contact" icon={<ArrowRight size={16} />}>
                Ask us directly
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
