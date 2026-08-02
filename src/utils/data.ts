import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Code2,
  Building2,
  Users2,
  ShoppingCart,
  Plug,
  Layers,
  Wrench,
  Search,
  Workflow,
} from 'lucide-react'

export const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, scalable web applications built on modern frameworks and clean architecture.',
    features: ['Custom React/Next.js builds', 'API integration', 'Performance-first engineering'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native-feel iOS and Android apps from a single, well-tested codebase.',
    features: ['Cross-platform delivery', 'Offline-first design', 'App store deployment'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces designed around how people actually think and work.',
    features: ['Research-driven wireframes', 'Design systems', 'Usability testing'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Infrastructure that scales with demand without scaling your headcount.',
    features: ['AWS / Azure architecture', 'CI/CD pipelines', 'Cost optimization'],
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Practical AI features that solve real workflow problems, not demos.',
    features: ['LLM integrations', 'Custom model pipelines', 'Automation agents'],
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Purpose-built systems for the workflows off-the-shelf tools can\u2019t handle.',
    features: ['Requirements engineering', 'Modular architecture', 'Long-term support'],
  },
  {
    icon: Building2,
    title: 'ERP Development',
    description: 'Unify operations, inventory, and finance into a single connected system.',
    features: ['Process mapping', 'Custom modules', 'Legacy data migration'],
  },
  {
    icon: Users2,
    title: 'CRM Development',
    description: 'Sales and support tools tailored to your actual pipeline, not a generic one.',
    features: ['Pipeline automation', 'Reporting dashboards', 'Third-party integrations'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Storefronts engineered for conversion, speed, and checkout reliability.',
    features: ['Headless commerce', 'Payment gateways', 'Inventory sync'],
  },
  {
    icon: Plug,
    title: 'API Development',
    description: 'Well-documented, secure APIs that your team and partners can build on.',
    features: ['REST & GraphQL', 'Rate limiting & auth', 'Versioned documentation'],
  },
  {
    icon: Layers,
    title: 'SaaS Products',
    description: 'From MVP to multi-tenant platform, built to onboard your first thousand users.',
    features: ['Multi-tenancy', 'Subscription billing', 'Usage analytics'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Ongoing monitoring, updates, and fixes so your product stays dependable.',
    features: ['Uptime monitoring', 'Security patching', 'Monthly reporting'],
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Technical and content SEO that compounds your organic visibility.',
    features: ['Technical audits', 'Structured data', 'Content strategy'],
  },
  {
    icon: Workflow,
    title: 'Digital Transformation',
    description: 'Modernize legacy processes into connected, measurable digital systems.',
    features: ['Systems audit', 'Change management', 'Phased rollout'],
  },
]

export const TECH_STACK = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Python',
  'Java', 'TypeScript', 'Firebase', 'AWS', 'Docker', 'Kubernetes',
  'Azure', 'Cloudinary', 'OpenAI', 'Stripe', 'Tailwind',
]

export const STATS = [
  {
    value: 30,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    value: 26,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Whitfield',
    company: 'VP Engineering, Northbridge Retail',
    review: 'Tashi Tech rebuilt our checkout flow from the ground up. Conversion rate is up 22% and support tickets dropped almost overnight.',
    rating: 5,
  },
  {
    name: 'Daniel Okoro',
    company: 'Founder, Fleetwise Logistics',
    review: 'They shipped our dispatch platform in twelve weeks — faster than any agency we\u2019d worked with, and the code quality held up under scale.',
    rating: 5,
  },
  {
    name: 'Priya Chandran',
    company: 'Head of Product, Meridian Health',
    review: 'The team understood HIPAA-adjacent constraints immediately and designed around them instead of bolting compliance on after launch.',
    rating: 5,
  },
]

export const INDUSTRIES = [
  'Healthcare', 'Education', 'Finance', 'Travel', 'Retail',
  'Manufacturing', 'Construction', 'Real Estate', 'Logistics', 'Food',
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹2,500',
    period: 'starting price',
    description: 'For small businesses launching their first digital product.',
    features: [
      'Single web or mobile app',
      'Up to 5 core screens',
      'Basic SEO setup',
      '4 weeks delivery',
      '30 days post-launch support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '₹8,500',
    period: 'starting price',
    description: 'For growing companies that need a full product build.',
    features: [
      'Full-stack web or mobile app',
      'Admin dashboard included',
      'Advanced SEO & analytics',
      '8\u201310 weeks delivery',
      '90 days post-launch support',
      'Dedicated project manager',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '₹20,000+',
    period: 'starting price',
    description: 'For organizations building complex, multi-system platforms.',
    features: [
      'Multi-platform architecture',
      'Custom integrations & APIs',
      'Dedicated engineering pod',
      'Priority SLA support',
      '12+ months partnership',
      'Security & compliance review',
    ],
    highlighted: false,
  },
]

export const FAQS = [
  {
    q: 'How long does a typical Tashi Tech project take?',
    a: 'At Tashi Tech, most web development projects take 6-12 weeks from kickoff to launch, depending on scope and complexity. Mobile app development and enterprise platforms typically run 12-20 weeks. We\'ll provide you with a detailed timeline with clear milestones after our comprehensive discovery call, ensuring complete transparency from day one.',
  },
  {
    q: 'Does Tashi Tech work with startups or only established companies?',
    a: 'Tashi Tech works with both. We offer flexible engagement models — fixed-scope builds for startups validating their MVP, and ongoing retainer agreements for established enterprises that need consistent engineering capacity. We adapt our approach to match your company\'s stage and specific needs.',
  },
  {
    q: 'What does Tashi Tech\'s pricing include?',
    a: 'Every Tashi Tech quote includes complete design, development, quality assurance testing, deployment, and a defined post-launch support window. We believe in transparent pricing with no hidden fees — any work outside the initial scope is quoted separately and approved by you before we begin.',
  },
  {
    q: 'Can Tashi Tech work with our existing codebase?',
    a: 'Yes, absolutely. At Tashi Tech, we regularly audit and extend existing systems rather than rebuilding from scratch, unless a rebuild is genuinely more cost-effective. We\'ll provide an honest, no-obligation assessment of which approach makes the most sense for your situation.',
  },
  {
    q: 'Does Tashi Tech provide ongoing maintenance after launch?',
    a: 'Yes, Tashi Tech offers monthly maintenance retainers that cover continuous monitoring, security patching, dependency updates, performance optimization, and small feature iterations. This ensures your application stays secure, fast, and up-to-date long after launch.',
  },
  {
    q: 'Where is the Tashi Tech team located?',
    a: 'Tashi Tech is a distributed team working across multiple time zones, with overlapping working hours to serve clients in the US, UK, and APAC regions. This allows us to provide responsive support when you need it most.',
  },
  {
    q: 'What technologies does Tashi Tech specialize in?',
    a: 'Tashi Tech specializes in modern web technologies including React, Next.js, TypeScript, Node.js, Python, and cloud platforms like AWS and Google Cloud. We stay current with the latest industry trends and best practices to deliver cutting-edge solutions.',
  },
  {
    q: 'How does Tashi Tech ensure quality?',
    a: 'Tashi Tech follows rigorous quality assurance processes including automated testing, comprehensive code reviews, performance testing, and user acceptance testing. Every project goes through multiple quality checkpoints before deployment to ensure excellence.',
  },
  {
    q: 'Does Tashi Tech sign NDAs and handle data securely?',
    a: 'Yes, Tashi Tech signs NDAs and follows strict data security protocols. We implement industry-standard security measures including data encryption, secure access controls, and compliance with relevant privacy regulations to protect your sensitive information.',
  },
  {
    q: 'Can Tashi Tech help with product strategy?',
    a: 'Absolutely. Tashi Tech offers product strategy consulting alongside development services. Our team can help with product roadmap planning, feature prioritization, technical architecture decisions, and go-to-market strategy to ensure your product\'s success.',
  },
  {
    q: 'What makes Tashi Tech different from other agencies?',
    a: 'Tashi Tech combines technical excellence with a deep understanding of business goals. We\'re not just developers — we\'re strategic partners who care about your success. Our transparent communication, flexible engagement models, and commitment to quality set us apart.',
  },
  {
    q: 'How does Tashi Tech handle project communication?',
    a: 'At Tashi Tech, we maintain transparent communication throughout your project. We provide regular progress updates, weekly status meetings, and access to project management tools. You\'ll always know exactly where your project stands.',
  },
]
