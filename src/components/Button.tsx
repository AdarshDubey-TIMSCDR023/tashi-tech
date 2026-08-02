import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  type?: 'button' | 'submit'
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  icon,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
  const sizes = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm'
  const variants = {
    primary:
      'bg-ink text-white hover:bg-brand shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-brand/20',
    secondary:
      'bg-white text-ink border border-line hover:border-brand hover:text-brand',
    ghost: 'text-ink hover:text-brand',
  }
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {icon}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  )
}
