'use client'

import { useState, useEffect } from 'react'

// ============================================================================
// ICON COMPONENTS
// ============================================================================

const IconDesign = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
)

const IconFactory = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
)

const IconQuality = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const IconSpeed = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const IconLabel = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
)

const IconProgram = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
  </svg>
)

const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const IconBuilding = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
)

const IconShip = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
)

const IconLeaf = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
)

const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const IconLocation = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

const IconArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const IconClose = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

// ============================================================================
// CONCEPT DISCLAIMER BANNER COMPONENT
// ============================================================================

function ConceptBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4">
        <p className="text-neutral-400 text-xs sm:text-[13px] text-center">
          This is a concept redesign created as a demonstration project. It is not affiliated with YJM Apparel Group.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 p-1 text-neutral-500 hover:text-neutral-300 transition-colors"
          aria-label="Dismiss banner"
        >
          <IconClose />
        </button>
      </div>
    </div>
  )
}

// ============================================================================
// HEADER / NAVBAR COMPONENT
// ============================================================================

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass border-b border-dark-800/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <span className="text-dark-950 font-display font-bold text-sm">YJM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg text-dark-100 group-hover:text-accent transition-colors leading-tight">
                YJM Apparel Group
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Concept</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-accent transition-colors rounded-lg hover:bg-dark-900/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-dark-950 font-semibold text-sm rounded-full transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get Started
            <IconArrowRight />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-300 hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-dark-800/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-dark-200 hover:text-accent hover:bg-dark-900/50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-light text-dark-950 font-semibold rounded-full transition-all"
              >
                Get Started
                <IconArrowRight />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dark-900 via-dark-950 to-[#0a0a0b]" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-dark-800 text-xs text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by major North American retailers*
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-dark-100">End-to-End</span>
              <br />
              <span className="gradient-text">Apparel Manufacturing</span>
              <br />
              <span className="text-dark-100">for Global Retailers</span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-dark-400 max-w-xl leading-relaxed">
                From concept to delivery, we specialize in premium menswear, womenswear, 
                kidswear, activewear, and streetwear production. Your trusted partner for 
                private-label manufacturing at scale.
              </p>
              <p className="text-sm text-neutral-300">
                Built for buying, merchandising, and sourcing teams who need a reliable long-term manufacturing partner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-dark-950 font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                Start Your Project
                <IconArrowRight />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-dark-700 hover:border-accent/50 text-dark-200 hover:text-accent font-semibold rounded-full transition-all hover:bg-dark-900/50"
              >
                Explore Capabilities
              </a>
            </div>

            {/* Stats - Updated with placeholder text */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-8 pt-6 border-t border-dark-800/50">
                {[
                  { value: 'Decades', label: 'Industry Experience' },
                  { value: 'Millions', label: 'Units Shipped Annually' },
                  { value: 'Global', label: 'Manufacturing Network' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-500">
                *All figures shown are illustrative placeholders for this concept redesign.
              </p>
            </div>
          </div>

          {/* Right Content - Product Mix Cards */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-br from-dark-900 to-dark-950 border border-dark-800/50 glow">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Menswear', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=400&fit=crop&q=80' },
                  { label: 'Womenswear', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop&q=80' },
                  { label: 'Kidswear', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop&q=80' },
                  { label: 'Activewear', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop&q=80' },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="aspect-square rounded-2xl overflow-hidden border border-dark-700/30 flex items-end p-4 transition-transform hover:scale-[1.02] relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
                    <span className="relative z-10 text-sm font-medium text-dark-100">{item.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Floating Label */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-accent text-dark-950 font-semibold text-sm shadow-lg shadow-accent/20">
                Product Categories
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 blur-sm" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-2xl bg-dark-800/50 border border-dark-700/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// ABOUT SECTION COMPONENT
// ============================================================================

function AboutSection() {
  const features = [
    'Full-service design and development',
    'Global sourcing network',
    'Rigorous quality control',
    'Sustainable practices',
    'Fast speed-to-market',
    'Dedicated account management',
  ]

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">About Us</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
                Your Strategic Partner in <span className="gradient-text">Apparel Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 text-dark-400 leading-relaxed">
              <p>
                We are a premier apparel manufacturing company with decades of 
                experience delivering exceptional products to leading retailers 
                and brands. Our expertise spans across all categories of fashion — from 
                classic essentials to cutting-edge streetwear.
              </p>
              <p>
                Our mission is simple: to be the most trusted and innovative manufacturing 
                partner in the industry. We combine deep industry knowledge with modern 
                technology to deliver products that exceed expectations.
              </p>
              <p>
                With a commitment to quality, sustainability, and speed, we help our partners 
                navigate the complexities of global apparel production while maintaining the 
                highest standards of excellence.
              </p>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-dark-900/50 border border-dark-800/50">
              <h3 className="font-display text-xl font-semibold text-dark-100 mb-6">What Sets Us Apart</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                      <IconCheck />
                    </div>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats - Updated with placeholder text */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: 'Multiple', label: 'Regions' },
                { value: 'Expert', label: 'Teams' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-dark-900/30 border border-dark-800/30 text-center">
                  <div className="font-display text-xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PRODUCTS SECTION COMPONENT
// ============================================================================

const productCategories = [
  {
    title: 'Menswear',
    description: 'From tailored suits to casual essentials, we produce the full spectrum of men\'s fashion.',
    tags: ['Suits', 'Shirts', 'Pants', 'Outerwear', 'Casual'],
    image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Womenswear',
    description: 'Elegant dresses to everyday basics — our women\'s collections meet every need.',
    tags: ['Dresses', 'Blouses', 'Skirts', 'Activewear', 'Loungewear'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Kidswear',
    description: 'Fun, durable, and comfortable clothing designed for children of all ages.',
    tags: ['Infants', 'Toddlers', 'Kids', 'Tweens', 'School'],
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Activewear & Athleisure',
    description: 'Performance-driven apparel for sports, fitness, and active lifestyles.',
    tags: ['Performance', 'Gym', 'Yoga', 'Running', 'Outdoor'],
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Streetwear',
    description: 'Trend-forward urban fashion that captures the pulse of contemporary culture.',
    tags: ['Hoodies', 'Graphic Tees', 'Joggers', 'Caps', 'Limited Edition'],
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=400&fit=crop&q=80',
  },
]

function ProductsSection() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wide uppercase text-sm">Product Categories</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            Expertise Across Every <span className="gradient-text">Category</span>
          </h2>
          <p className="mt-6 text-dark-400 leading-relaxed">
            From classic menswear to trending streetwear, we manufacture high-quality apparel 
            across all major categories with precision and care.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((product, index) => (
            <div
              key={product.title}
              className={`group relative p-8 rounded-3xl bg-dark-900/50 border border-dark-800/30 overflow-hidden transition-all hover:border-accent/30 hover:-translate-y-1 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Product Image */}
              <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>

              <h3 className="font-display text-xl font-semibold text-dark-100 group-hover:text-accent transition-colors">
                {product.title}
              </h3>
              
              <p className="mt-3 text-sm text-dark-400 leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-dark-300 bg-dark-950/50 rounded-full border border-dark-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CAPABILITIES SECTION COMPONENT
// ============================================================================

const capabilities = [
  {
    icon: IconDesign,
    title: 'Design & Trend',
    description: 'Our in-house design team tracks global trends and translates them into commercially viable products.',
  },
  {
    icon: IconFactory,
    title: 'Sourcing & Production',
    description: 'Leveraging our extensive factory network across Asia for efficient, cost-effective manufacturing.',
  },
  {
    icon: IconQuality,
    title: 'Quality & Compliance',
    description: 'Rigorous quality control protocols and full compliance with international safety standards.',
  },
  {
    icon: IconSpeed,
    title: 'Speed to Market',
    description: 'Streamlined processes and strong logistics partnerships enable rapid turnaround times.',
  },
  {
    icon: IconLabel,
    title: 'Private Label',
    description: 'Complete private-label solutions from branding to packaging for your exclusive collections.',
  },
  {
    icon: IconProgram,
    title: 'Program Management',
    description: 'Dedicated account teams manage your entire production lifecycle from order to delivery.',
  },
]

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wide uppercase text-sm">Our Capabilities</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            Full-Service <span className="gradient-text">Manufacturing</span> Solutions
          </h2>
          <p className="mt-6 text-dark-400 leading-relaxed">
            From initial concept to final delivery, we provide comprehensive services that 
            cover every aspect of apparel production.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group p-8 rounded-3xl bg-dark-900/30 border border-dark-800/30 transition-all hover:bg-dark-900/50 hover:border-accent/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-dark-950 transition-all">
                <capability.icon />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-dark-100 group-hover:text-accent transition-colors">
                {capability.title}
              </h3>
              
              <p className="mt-3 text-sm text-dark-400 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// GLOBAL FOOTPRINT SECTION COMPONENT
// ============================================================================

const locations = [
  {
    icon: IconBuilding,
    title: 'Headquarters',
    description: 'Global headquarters managing operations, client relations, and strategic planning.',
    location: 'North America',
  },
  {
    icon: IconGlobe,
    title: 'Sourcing Hub',
    description: 'Regional offices in key manufacturing centers overseeing production and quality.',
    location: 'Asia Pacific',
  },
  {
    icon: IconShip,
    title: 'Factory Network',
    description: 'Partnerships with vetted factories across major manufacturing regions.',
    location: 'Global',
  },
]

function GlobalFootprintSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wide uppercase text-sm">Global Presence</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            Worldwide <span className="gradient-text">Reach</span>, Local Expertise
          </h2>
          <p className="mt-6 text-dark-400 leading-relaxed">
            Strategically positioned across the globe to provide seamless service and 
            rapid response to our partners.
          </p>
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.title}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-dark-900 to-dark-950 border border-dark-800/50 overflow-hidden"
            >
              {/* Map Placeholder */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <location.icon />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-dark-100">
                  {location.title}
                </h3>
                
                <p className="mt-3 text-sm text-dark-400 leading-relaxed">
                  {location.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-accent text-sm font-medium">
                  <IconLocation />
                  {location.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROCESS TIMELINE SECTION COMPONENT
// ============================================================================

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your brand, goals, and requirements to create a tailored manufacturing strategy.',
  },
  {
    step: '02',
    title: 'Sampling',
    description: 'Our team develops prototypes and samples for your approval before mass production.',
  },
  {
    step: '03',
    title: 'Production',
    description: 'Full-scale manufacturing with rigorous quality checks at every stage of the process.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Timely global logistics and fulfillment to get your products to market on schedule.',
  },
]

function ProcessTimelineSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-wide uppercase text-sm">Our Process</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            From Concept to <span className="gradient-text">Delivery</span>
          </h2>
          <p className="mt-6 text-dark-400 leading-relaxed">
            A streamlined four-step process that ensures quality, efficiency, and 
            transparency at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="relative p-8 rounded-3xl bg-dark-900/50 border border-dark-800/50 text-center transition-all hover:border-accent/30">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent font-display text-2xl font-bold mb-6">
                    {step.step}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-dark-100">
                    {step.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-dark-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-accent z-10">
                    <IconArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PARTNERS SECTION COMPONENT
// ============================================================================

function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-accent font-medium tracking-wide uppercase text-sm">Our Partners</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
            Trusted by <span className="gradient-text">Leading Retailers</span>
          </h2>
          <p className="mt-6 text-dark-400 leading-relaxed">
            We partner with recognized retail brands and fashion labels across the industry.
          </p>
        </div>

        {/* Placeholder Notice */}
        <p className="text-xs text-neutral-500 text-center mb-12">
          The following are generic placeholders. Actual partner logos would be added to the official site.
        </p>

        {/* Partner Logos Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[3/2] rounded-2xl bg-dark-900/50 border border-dark-800/30 flex items-center justify-center transition-all hover:border-dark-700/50"
            >
              <span className="text-dark-600 text-xs font-medium">Partner Logo</span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          {[
            'WRAP Certified',
            'BSCI Member',
            'SEDEX Registered',
            'OEKO-TEX® Certified',
          ].map((cert) => (
            <div key={cert} className="px-6 py-3 rounded-full bg-dark-900/50 border border-dark-800/30 text-sm text-dark-400">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SUSTAINABILITY SECTION COMPONENT
// ============================================================================

const sustainabilityPillars = [
  {
    icon: IconLeaf,
    title: 'Ethical Sourcing',
    description: 'We partner only with factories that meet strict ethical labor and environmental standards.',
  },
  {
    icon: IconQuality,
    title: 'Regular Audits',
    description: 'Continuous monitoring and third-party audits ensure ongoing compliance across the supply chain.',
  },
  {
    icon: IconGlobe,
    title: 'Global Compliance',
    description: 'Full adherence to international regulations including REACH, CPSIA, and regional safety standards.',
  },
]

function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">Sustainability</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
                Committed to <span className="gradient-text">Responsible</span> Manufacturing
              </h2>
            </div>

            <p className="text-dark-400 leading-relaxed">
              Sustainability is a core principle that guides every decision we make. 
              From ethical labor practices to environmental stewardship, 
              we&apos;re committed to making a positive impact.
            </p>

            <div className="space-y-4">
              {[
                'Zero tolerance for child labor and forced labor',
                'Fair wages and safe working conditions',
                'Eco-friendly materials and processes',
                'Waste reduction and recycling initiatives',
                'Carbon footprint reduction programs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-emerald-900/30 text-emerald-400 flex items-center justify-center">
                    <IconCheck />
                  </div>
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Sustainability Disclaimer */}
            <p className="text-xs text-neutral-500 pt-4 border-t border-dark-800/30">
              All sustainability claims shown here are conceptual placeholders demonstrating potential content direction.
            </p>
          </div>

          {/* Right - Pillars */}
          <div className="space-y-6">
            {sustainabilityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800/30 flex gap-6 items-start transition-all hover:border-emerald-900/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-900/20 text-emerald-400 flex items-center justify-center">
                  <pillar.icon />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark-100">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CONTACT SECTION COMPONENT
// ============================================================================

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // No backend - just show alert
    alert('Thank you for your inquiry! This is a demo form.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">Get in Touch</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-100 leading-tight">
                Let&apos;s Build Something <span className="gradient-text">Great Together</span>
              </h2>
            </div>

            <p className="text-dark-400 leading-relaxed">
              Ready to take your apparel line to the next level? Get in touch with our team 
              to discuss your manufacturing needs and discover how we can help bring your 
              vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <IconLocation />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100">Address</h4>
                  <p className="text-sm text-dark-400">123 Demo Street<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <IconMail />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100">Email</h4>
                  <p className="text-sm text-dark-400">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <IconPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-100">Phone</h4>
                  <p className="text-sm text-dark-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Contact Placeholder Notice */}
            <p className="text-xs text-neutral-500 pt-4 border-t border-dark-800/30">
              Contact information is placeholder content for this concept demonstration.
            </p>
          </div>

          {/* Right - Form */}
          <div className="p-8 rounded-3xl bg-dark-900/50 border border-dark-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-dark-100 placeholder-dark-600 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-dark-100 placeholder-dark-600 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-dark-100 placeholder-dark-600 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-dark-300 mb-2">
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-dark-100 focus:outline-none focus:border-accent/50 transition-colors"
                  >
                    <option value="">Select a role</option>
                    <option value="buyer">Buyer / Merchandiser</option>
                    <option value="designer">Designer</option>
                    <option value="executive">Executive</option>
                    <option value="founder">Founder / Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-dark-800 text-dark-100 placeholder-dark-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-dark-950 font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/20"
              >
                Send Message
                <IconArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

function Footer() {
  return (
    <footer className="relative py-16 bg-dark-950 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-dark-950 font-display font-bold text-sm">YJM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-xl text-dark-100">
                  YJM Apparel Group
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Concept Redesign</span>
              </div>
            </div>
            <p className="text-dark-500 text-sm leading-relaxed max-w-sm">
              Your trusted partner for end-to-end apparel manufacturing. Quality, speed, 
              and reliability for global retailers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-200 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Products', 'Capabilities', 'Sustainability', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-dark-500 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-dark-200 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-500">
              <li>123 Demo Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">contact@example.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-dark-600">
              © {new Date().getFullYear()} YJM Apparel Group (Concept Redesign)
            </p>
            <p className="text-xs text-neutral-500 text-center">
              Concept Design • Not affiliated with YJM Apparel Group • For demonstration only
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  return (
    <main className="min-h-screen">
      <ConceptBanner />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CapabilitiesSection />
      <GlobalFootprintSection />
      <ProcessTimelineSection />
      <PartnersSection />
      <SustainabilitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
