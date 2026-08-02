import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/logo.png'

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services/web-development' },
      { label: 'Mobile App Development', to: '/services/mobile-app-development' },
      { label: 'UI/UX Design', to: '/services/ui-ux-design' },
      { label: 'SEO', to: '/services/seo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Careers', to: '/coming-soon' }, 
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/tashitechin/',
    label: 'LinkedIn',
  },
  {
    icon: FaXTwitter,
    href: 'https://twitter.com/tashitechin',
    label: 'X (Twitter)',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/tashitech.in',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:helptashitech@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-5">
                <img
                  src={logo}
                  alt="Tashi Tech"
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>

              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                We design and engineer scalable digital products for ambitious teams —
                web, mobile, cloud, and AI, built to grow with you.
              </p>

              <div className="flex items-center gap-3 mt-6">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-brand hover:bg-brand/20 transition-all duration-300 group"
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {COLUMNS.map((col) => (
                <div key={col.title} className="self-start">
                  <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wide">
                    {col.title}
                  </h4>

                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm text-white/50 hover:text-brand-light transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tashi Tech. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>

            <a
              href="https://wa.me/7208240169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors inline-flex items-center gap-1"
            >
              WhatsApp Us <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}