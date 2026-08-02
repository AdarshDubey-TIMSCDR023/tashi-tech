import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" aria-hidden="true" />
        <div className="absolute inset-0 glow" aria-hidden="true" />
        <Reveal className="relative text-center px-6">
          <span className="font-display font-bold text-brand/20 text-[9rem] leading-none select-none">
            404
          </span>
          <h1 className="font-display font-bold text-3xl text-ink -mt-6">
            This page went missing
          </h1>
          <p className="mt-3 text-ink/60 max-w-sm mx-auto">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="mt-8">
            <Button to="/" icon={<ArrowLeft size={16} />}>
              Back to home
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
