import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { submitContactLead } from '../services/api'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  company: z.string().trim().min(1, 'Please enter your company name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().min(7, 'Please enter your phone number'),
  service: z.string().trim().min(1, 'Please select a service'),
  budget: z.string().trim().min(1, 'Please select a budget range'),
  message: z.string().trim().min(10, 'Tell us a bit more (10+ characters)'),
})

type ContactForm = z.infer<typeof contactSchema>

const SERVICES_LIST = [
  'Web Development', 'Mobile App Development', 'UI/UX Design', 'Cloud Solutions',
  'AI Development', 'Custom Software', 'E-Commerce', 'Other',
]

const BUDGETS = ['Under ₹5,000', '₹5,000 – ₹15,000', '₹15,000 – ₹50,000', '₹50,000+']

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactForm) => {
    setStatus('idle')
    try {
      const payload = {
        ...data,
        company: data.company?.trim() || '',
        service: data.service?.trim() || '',
        budget: data.budget?.trim() || '',
      }

      await submitContactLead(payload)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Tashi Tech for a free consultation on your next web, mobile, or software project."
        path="/contact"
      />

      <section className="pt-40 pb-16 lg:pt-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-ink">
              Let's talk about your project
            </h1>
            <p className="mt-5 text-lg text-ink/60">
              Fill out the form and we'll respond within 48 hours with next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-line bg-white p-7 sm:p-9 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" error={errors.name?.message} required>
                  <input
                    {...register('name')}
                    className={inputClass(!!errors.name)}
                    placeholder="Jordan Lee"
                  />
                </Field>
                <Field label="Company" required>
                  <input
                    {...register('company')}
                    className={inputClass(false)}
                    placeholder="Acme Inc."
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" error={errors.email?.message} required>
                  <input
                    {...register('email')}
                    type="email"
                    className={inputClass(!!errors.email)}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    {...register('phone')}
                    className={inputClass(false)}
                    placeholder="+1 (555) 000-0000"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Service" required>
                  <select {...register('service')} className={inputClass(false)} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget" required>
                  <select {...register('budget')} className={inputClass(false)} defaultValue="">
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project details" error={errors.message?.message} required>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={inputClass(!!errors.message)}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </Field>

              <Button type="submit" size="lg" className="w-full" onClick={undefined}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 size={16} /> Thanks — we'll be in touch within 48 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={16} /> Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-line p-7 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'helptashitech@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 7208240169' },
                { icon: MapPin, label: 'Office', value: 'Dev Ashirwad CHS, Plot No. 58, Navade Phase 2, Taloja, Maharashtra – 410208, India' },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM (PST)' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center text-brand shrink-0">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-ink/45">{item.label}</p>
                    <p className="text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-line overflow-hidden h-64">
              <iframe
                title="Tashi Tech office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3266271348184!2d73.09992947524961!3d19.049371582149814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9f02cfb4efd%3A0xbad7ce8c3da037fb!2sDev%20Ashirwad%20CHS!5e0!3m2!1sen!2sin!4v1785608059099!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 transition-all ${
    hasError
      ? 'border-red-300 focus:ring-red-100'
      : 'border-line focus:border-brand focus:ring-brand/15'
  }`
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-ink/60 mb-1.5">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>
      {children}
      {error && <span className="block text-xs text-red-500 mt-1">{error}</span>}
    </label>
  )
}
