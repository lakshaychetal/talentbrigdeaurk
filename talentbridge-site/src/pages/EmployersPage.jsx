import { CheckCircle, Shield, Users, Clock, ArrowRight, Zap, Target, FileCheck, Calendar, BarChart3, Sparkles, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { employerPillars, employerFeatures, employerFaq } from '../data/content'

const heroImage = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'

const stats = [
  { value: '72%', label: 'Roles filled under 21 days' },
  { value: '98%', label: 'Compliance verification rate' },
  { value: '500+', label: 'Trusted employers' },
]

const benefits = [
  { 
    icon: Shield, 
    title: 'Compliance-First Hiring', 
    description: 'Every candidate is pre-verified with AHPRA, WWC, police checks, and industry-specific credentials.',
    color: 'primary'
  },
  { 
    icon: Zap, 
    title: 'Speed to Hire', 
    description: 'Receive interview-ready shortlists within 48 hours. No more weeks of screening.',
    color: 'accent'
  },
  { 
    icon: Target, 
    title: 'Industry Specialists', 
    description: 'Recruiters who understand healthcare, hospitality, and property inside out.',
    color: 'primary'
  },
  { 
    icon: BarChart3, 
    title: 'Data-Driven Insights', 
    description: 'Track time-to-hire, fill rates, and candidate quality with real-time dashboards.',
    color: 'accent'
  },
]

const EmployersPage = () => (
  <>
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-700 to-primary-800 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Office meeting" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 via-primary-700/70 to-transparent"></div>
      </div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/90 backdrop-blur-sm text-white text-xs font-bold mb-8 tracking-[0.18em] uppercase">
            <Users size={14} />
            For Employers
          </div>

          <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            Hire qualified staff,{' '}
            <span className="text-accent-500">
              not just applications
            </span>
          </h1>
          
          <p className="text-base lg:text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
            Industry-specific screening, compliance verification, and pre-qualified candidates delivered in days. Built for Australian healthcare, hospitality, and property teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn btn-accent text-[15px] font-semibold px-8 py-4">
              Book a Demo
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/pricing" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-[15px] font-semibold px-8 py-4">
              <Play size={20} className="mr-2" />
              Watch How It Works
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    {/* Benefits Grid */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-4">
            <Sparkles size={14} />
            Why Choose TalentBridge
          </div>
          <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-secondary-900 mb-6">
            Hiring excellence, simplified
          </h2>
          <p className="text-lg text-secondary-600">
            We solve the biggest headaches in recruitment: speed, quality, and compliance — all in one platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="group relative bg-secondary-50 rounded-3xl p-8 lg:p-10 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  benefit.color === 'primary' 
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25' 
                    : 'bg-gradient-to-br from-accent-500 to-accent-400 shadow-lg shadow-accent-500/25'
                }`}>
                  <benefit.icon className="text-white" size={26} />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">{benefit.title}</h3>
                <p className="text-secondary-600 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge badge-primary mb-4">
              <FileCheck size={14} />
              Platform Features
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
              Everything you need to hire with confidence
            </h2>
            <p className="text-lg text-secondary-600 mb-10">
              Our platform automatically verifies certifications and checks before you even see a candidate. No more manual verification headaches.
            </p>
            
            <div className="space-y-4">
              {employerFeatures.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <CheckCircle className="text-primary-600 group-hover:text-white transition-colors" size={18} />
                  </div>
                  <p className="text-secondary-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>
            
            <Link to="/pricing" className="btn btn-primary mt-8">
              Explore All Features
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-secondary-100">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                alt="Compliance dashboard" 
                className="rounded-2xl shadow-lg"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-secondary-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-secondary-900">100% Verified</p>
                    <p className="text-sm text-secondary-500">All compliance checks passed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">
            <Sparkles size={14} />
            Common Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-600">
            Everything you need to know about hiring with TalentBridge
          </p>
        </div>
        
        <div className="space-y-4">
          {employerFaq.map((item, index) => (
            <div 
              key={item.question} 
              className="group bg-secondary-50 rounded-2xl p-6 lg:p-8 border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{item.question}</h3>
              <p className="text-secondary-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-24 lg:py-32 mesh-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-white/20 text-center">
          <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-white mb-6">
            Ready to transform your hiring?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join 500+ Australian businesses hiring smarter, faster, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
              Get Started Now
            </Link>
            <Link to="/pricing" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default EmployersPage