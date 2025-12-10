import { Search, MapPin, Briefcase, ArrowRight, CheckCircle, Star, Shield, Users, Zap, TrendingUp, Award, Play, ChevronRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  heroStats,
  industryCards,
  homeSteps,
  jobCards,
  resourceArticles,
  testimonials,
} from '../data/content'

const heroImages = [
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
]

const resourceImages = [
  'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
]

const howItWorksSlidesData = [
  {
    title: 'Post your role',
    subtitle: 'Define shifts, locations & skills',
    summary: 'Confirm pay bands, requirements, and compliance documents before the role goes live.',
    stats: [
      { label: 'Role brief', value: 'Completed' },
      { label: 'Location', value: 'Melbourne CBD' },
      { label: 'Skills', value: 'AHPRA, aged care, empathy' },
      { label: 'Checks', value: 'WWC + Police' },
    ],
    highlights: [
      'Compliance checklist reviewed with a consultant',
      'Role live across TalentBridge + partners instantly',
    ],
    cta: 'Create role',
    showImage: false,
  },
  {
    title: 'Screen & shortlist',
    subtitle: 'Pre-qualified candidates ready for interviews',
    summary: 'We verify licences, right-to-work, and soft skills before your shortlist lands in-app.',
    stats: [
      { label: 'Applications screened', value: '15 in 48h' },
      { label: 'Verified', value: '12 AHPRA+WWC' },
      { label: 'Matched skills', value: '8 qualified' },
      { label: 'Ready to interview', value: '7 shortlisted' },
    ],
    highlights: [
      'Automated compliance flags plus manual checks',
      'Shortlists share interview packs & recruiter notes',
    ],
    cta: 'View shortlist',
    bgImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    showImage: true,
  },
  {
    title: 'Interview-ready',
    subtitle: 'Candidates briefed & ready to impress',
    summary: 'Share interviews, exchange notes, and lock in panels with compliance controls.',
    stats: [
      { label: 'Briefings sent', value: '3 key contacts' },
      { label: 'Top candidates', value: '3 selected' },
      { label: 'Checks cleared', value: '100% verified' },
      { label: 'Next step', value: 'Schedule interviews' },
    ],
    highlights: [
      'Inline scheduler with automated reminders',
      'Recruiter briefings for every candidate',
    ],
    cta: 'Schedule interviews',
      bgImage: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=900&q=80',
    showImage: true,
  },
  {
    title: 'Hire & onboard',
    subtitle: 'Compliance and payroll handover',
    summary: 'Offer letters, onboarding packets, and compliance checklists share a single status so nothing slips.',
    stats: [
      { label: 'Offers ready', value: '1 awaiting approval' },
      { label: 'Onboarding list', value: '8 items' },
      { label: 'Induction booked', value: 'Today 2pm' },
      { label: 'Start date', value: 'Mon, 15 Dec' },
    ],
    highlights: [
      'Automated reminders for compliance paperwork',
      'Payroll handover notes shared with finance',
    ],
    cta: 'Send offer & onboard',
      bgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    showImage: true,
  },
]

const trustedLogos = [
  'Harbourview Aged Care',
  'Seaside Hotels',
  'Northside Realty',
  'CarePlus',
  'Urban Hospitality',
  'Metro Property'
]

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  // Scroll-driven step activation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.stepIndex)
            setActiveStep(index)
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section - Light Blue Background */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-200/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-primary-300/30 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/90 backdrop-blur-sm text-white text-xs font-bold mb-8 tracking-[0.18em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Smarter Hiring, Powered by AI
              </div>

              {/* Headline */}
              <h1 className="text-[48px] sm:text-[52px] lg:text-[56px] font-heading font-bold text-secondary-900 leading-[1.1] mb-6">
                Hire exceptional talent in{' '}
                <span className="text-primary-500">days, not weeks</span>
              </h1>

              <p className="text-base lg:text-lg text-secondary-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                TalentBridge AU connects pre-verified local talent with employers who demand excellence — from aged-care facilities to hotels, restaurants, and property teams.
              </p>

              {/* Search Box */}
              <div className="bg-white/80 backdrop-blur-xl p-2 rounded-2xl border border-primary-200/50 max-w-2xl mx-auto lg:mx-0 mb-10 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Job title or keyword" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-secondary-200 text-secondary-900 placeholder-secondary-400 focus:bg-white focus:border-primary-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Suburb or city" 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-secondary-200 text-secondary-900 placeholder-secondary-400 focus:bg-white focus:border-primary-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <button className="btn btn-primary w-full text-sm font-semibold">
                    Search Jobs
                  </button>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-secondary-600 text-sm">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-secondary-900 font-semibold">Trusted by 500+ businesses</p>
                  <div className="flex items-center gap-1 justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={14} className="text-accent-500 fill-accent-500" />
                    ))}
                    <span className="ml-1">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Floating Cards */}
            <div className="relative hidden lg:block">
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-3xl blur-2xl"></div>
                <img 
                  src={heroImages[0]} 
                  alt="Healthcare professional" 
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-secondary-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-secondary-900">98%</p>
                      <p className="text-sm text-secondary-500">Placement Success</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Card */}
                <div className="absolute -right-8 top-1/3 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-secondary-100 animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">Verified</p>
                      <p className="text-xs text-secondary-500">All checks passed</p>
                    </div>
                  </div>
                </div>

                {/* Floating Time Card */}
                <div className="absolute -bottom-6 left-1/4 bg-gradient-to-r from-accent-500 to-accent-400 rounded-2xl p-5 shadow-2xl text-white">
                  <div className="flex items-center gap-3">
                    <Zap size={24} />
                    <div>
                      <p className="font-bold text-lg">21 Days</p>
                      <p className="text-sm text-white/80">Average time to hire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-50 to-transparent"></div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-800 border-b border-primary-900/20">
        <div className="container-custom">
          <p className="text-center text-white/70 text-xs font-bold uppercase tracking-[0.18em] mb-8">Trusted by leading Australian organisations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {trustedLogos.map((logo) => (
              <div key={logo} className="text-white/90 font-heading font-semibold text-lg hover:text-white transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {heroStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-secondary-200 hover:border-primary-300 transition-all duration-300 text-center group-hover:shadow-xl">
                  <p
                    data-stat-target={stat.value}
                    aria-label={`${stat.label}: ${stat.value}`}
                    className="text-5xl font-bold text-primary-500 mb-3"
                  >
                    0
                  </p>
                  <p className="text-secondary-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent-500 text-xs font-bold uppercase tracking-[0.18em] mb-4">
              Specialized Expertise
            </p>
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-secondary-900 mb-6 leading-tight">
              Industries where compliance and speed matter most
            </h2>
            <p className="text-base text-secondary-500 leading-relaxed">
              We don't do generalist hiring. We focus on sectors where getting it wrong costs more than time — it costs trust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryCards.map((card, index) => (
              <div 
                key={card.title} 
                className="group relative bg-white rounded-3xl overflow-hidden border border-secondary-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-secondary-900/20 to-transparent z-10"></div>
                  <img 
                    src={heroImages[index]} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      {index === 0 ? <Shield className="text-primary-600" size={24} /> : 
                       index === 1 ? <Star className="text-primary-600" size={24} /> : 
                       <MapPin className="text-primary-600" size={24} />}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{card.title}</h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">{card.description}</p>
                  <Link 
                    to="/employers" 
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link"
                  >
                    Explore roles 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Scroll-Driven */}
      <section className="relative mesh-gradient text-white" data-no-reveal>
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-24 lg:py-32">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-[0.18em] mb-6">
              <Zap size={14} className="text-accent-400" />
              How it Works
            </div>
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold mb-4 leading-tight">
              Four guided steps to your perfect hire
            </h2>
            <p className="text-base text-white/70">
              Every stage includes compliance verification, so you hire with confidence.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-10 lg:gap-14">
            {/* Left Side - Sticky Steps Navigation */}
            <div className="lg:sticky lg:top-28 self-start space-y-3">
              {howItWorksSlidesData.map((slide, index) => (
                <div
                  key={index}
                  className={`relative flex gap-4 items-start p-6 rounded-2xl transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-white/15 backdrop-blur-sm border border-white/30 shadow-xl'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  {/* Step Number with Orange Indicator */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/30 scale-110'
                          : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {index + 1}
                    </div>
                    {/* Connecting Line */}
                    {index < howItWorksSlidesData.length - 1 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white/10"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h3 className={`font-heading font-bold text-lg mb-1 transition-colors duration-300 ${
                      activeStep === index ? 'text-white' : 'text-white/60'
                    }`}>
                      {slide.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      activeStep === index ? 'text-white/80' : 'text-white/40'
                    }`}>
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <button className="btn btn-accent text-[15px] font-semibold">See the Flow</button>
                <button className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-[15px] font-semibold">
                  <Play size={16} className="mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Scrollable Content */}
            <div className="space-y-8">
              {howItWorksSlidesData.map((slide, index) => (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step-index={index}
                  className="min-h-[600px] lg:min-h-[700px]"
                >
                  {/* Content Card */}
                  <div className="glass-card p-8 lg:p-10 rounded-3xl border border-white/20 backdrop-blur-xl bg-white/10">
                    {/* Background Image if available */}
                    {slide.showImage && slide.bgImage && (
                      <div className="relative h-64 -mx-8 -mt-8 lg:-mx-10 lg:-mt-10 mb-8 rounded-t-3xl overflow-hidden">
                        <img 
                          src={slide.bgImage} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/80 via-primary-800/50 to-transparent"></div>
                      </div>
                    )}

                    {/* Step Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-300 text-xs font-bold uppercase tracking-wider mb-6">
                      Step {index + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-white/70 mb-8">
                      {slide.summary}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {slide.stats.map((stat, statIndex) => (
                        <div 
                          key={statIndex}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                        >
                          <p className="text-xs text-white/50 mb-1">{stat.label}</p>
                          <p className="text-lg font-bold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {slide.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-3">
                          <CheckCircle className="text-accent-400 flex-shrink-0 mt-0.5" size={18} />
                          <p className="text-white/80 text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full lg:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                      {slide.cta}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="badge badge-accent mb-4">
                <Briefcase size={14} />
                Hot Opportunities
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">Featured Roles</h2>
              <p className="text-secondary-600">Verified positions from trusted employers, ready to interview</p>
            </div>
            <Link to="/job-seekers" className="btn btn-secondary gap-2">
              View All Jobs <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {jobCards.map((job) => (
              <div 
                key={job.title} 
                className="group relative bg-white p-6 rounded-2xl border border-secondary-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide ${
                    job.badge === 'Urgent' 
                      ? 'bg-red-50 text-red-600 border border-red-100' 
                      : job.badge === 'Verified employer'
                        ? 'bg-green-50 text-green-600 border border-green-100'
                        : 'bg-primary-50 text-primary-600 border border-primary-100'
                  }`}>
                    {job.badge}
                  </span>
                  <button className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center text-secondary-400 hover:bg-primary-50 hover:text-primary-600 transition-all">
                    <Star size={18} />
                  </button>
                </div>

                {/* Job Info */}
                <h3 className="text-lg font-bold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">{job.title}</h3>
                <p className="text-secondary-500 text-sm mb-5">{job.company}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-secondary-600">
                    <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center">
                      <MapPin size={14} className="text-secondary-500" />
                    </div>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-secondary-600">
                    <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center">
                      <Briefcase size={14} className="text-secondary-500" />
                    </div>
                    {job.shift}
                  </div>
                </div>

                {/* Salary & CTA */}
                <div className="pt-5 border-t border-secondary-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-secondary-400 mb-0.5">Salary</p>
                    <p className="text-lg font-bold text-secondary-900">{job.salary}</p>
                  </div>
                  <button className="btn btn-primary py-2.5 px-4 text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-primary mb-4">
              <Award size={14} />
              Success Stories
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              What our partners say
            </h2>
            <p className="text-lg text-secondary-600">
              Real results from real Australian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative bg-white rounded-3xl p-8 lg:p-10 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote mark */}
                <div className="absolute top-8 right-8 text-6xl font-serif text-primary-100">"</div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={18} className="text-accent-400 fill-accent-400" />
                    ))}
                  </div>
                  <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="badge badge-primary mb-4">
                <Zap size={14} />
                Knowledge Hub
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">Latest Resources</h2>
              <p className="text-secondary-600">Insights, guides, and data to power your hiring strategy</p>
            </div>
            <Link to="/resources" className="btn btn-secondary gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resourceArticles.map((article, index) => (
              <a key={article.title} href="#" className="group block">
                <div className="aspect-[16/10] bg-secondary-100 rounded-2xl mb-5 overflow-hidden relative">
                  <img 
                    src={resourceImages[index]} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors leading-snug">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-white mb-6">
              Ready to transform your hiring?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Join 500+ Australian businesses hiring smarter, faster, and with confidence. Start your first search today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/employers" className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
                Post a Role
              </Link>
              <Link to="/contact" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage