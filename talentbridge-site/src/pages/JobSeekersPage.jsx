import { Upload, FileText, Search, CheckCircle, ArrowRight, Sparkles, Shield, Award, Zap, TrendingUp, Star, Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { seekerSteps } from '../data/content'

const heroImage = 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80'

const benefits = [
  {
    icon: Shield,
    title: 'Verified Profile Badge',
    description: 'Stand out with verified credentials that employers trust. Show your AHPRA, WWC, and industry certifications.',
    color: 'primary'
  },
  {
    icon: Zap,
    title: 'One-Click Applications',
    description: 'Apply to multiple roles instantly with your complete profile. No repetitive form filling.',
    color: 'accent'
  },
  {
    icon: TrendingUp,
    title: 'Salary Insights',
    description: 'Know your worth. Access real salary data by role, location, and experience level.',
    color: 'primary'
  },
  {
    icon: Users,
    title: 'Direct Employer Access',
    description: 'Connect directly with hiring managers at verified Australian employers.',
    color: 'accent'
  },
]

const resources = [
  {
    icon: FileText,
    category: 'Templates',
    title: '360° Resume Templates',
    description: 'Polished, ATS-friendly structure built for healthcare, hospitality and property.',
    color: 'accent',
    cta: 'Download'
  },
  {
    icon: CheckCircle,
    category: 'Tips',
    title: 'Interview Checklist',
    description: 'Prepare for role-specific questions, super discussions and availability tracking.',
    color: 'primary',
    cta: 'Read guide'
  },
  {
    icon: Search,
    category: 'Insights',
    title: 'Salary Snapshots',
    description: 'See pay ranges, penalty loadings and state-based expectations.',
    color: 'secondary',
    cta: 'View data'
  },
]

const JobSeekersPage = () => (
  <>
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center mesh-gradient overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Job seeker" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 via-primary-800/70 to-transparent"></div>
      </div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
              <Award size={14} className="text-accent-400" />
              For Job Seekers
            </div>

            <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
              One profile.{' '}
              <span className="text-accent-500">
                Endless opportunities.
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Create your verified profile, showcase your credentials, and get matched with employers who value your skills across Australia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn btn-accent text-lg px-8 py-4">
                Create Your Profile
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4">
                <Upload size={20} className="mr-2" />
                Upload Resume
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-primary-800 flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm">Join 1,200+ verified candidates</p>
            </div>
          </div>

          {/* Right side - floating card */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/30 to-primary-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="space-y-4">
                {/* Profile card mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-bold text-secondary-900 text-lg">Jane Doe</p>
                      <p className="text-secondary-500">Registered Nurse</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['AHPRA', 'WWC', 'First Aid'].map(badge => (
                      <span key={badge} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold border border-green-100">
                        <CheckCircle size={12} />
                        {badge}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} size={14} className="text-accent-400 fill-accent-400" />
                      ))}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold">
                      Profile 100% Complete
                    </span>
                  </div>
                </div>
                
                {/* Match notification */}
                <div className="bg-gradient-to-r from-accent-500 to-accent-400 rounded-xl p-4 text-white animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">3 New Matches!</p>
                      <p className="text-sm text-white/80">Employers are interested</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-4">
            <Sparkles size={14} />
            Simple Process
          </div>
          <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-secondary-900 mb-6">
            Get hired in three easy steps
          </h2>
          <p className="text-lg text-secondary-600">
            Our streamlined process gets you in front of employers faster than ever.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>
          
          {seekerSteps.map((step, index) => (
            <div key={step} className="relative text-center">
              <div className="relative inline-flex mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/25">
                  {index + 1}
                </div>
              </div>
              <p className="text-lg font-medium text-secondary-900 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-4">
            <Award size={14} />
            Why Join Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
            More than just a job board
          </h2>
          <p className="text-lg text-secondary-600">
            We invest in your career success with tools, insights, and direct connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group bg-white rounded-3xl p-8 lg:p-10 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
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
          ))}
        </div>
      </div>
    </section>

    {/* Resources Section */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="badge badge-accent mb-4">
              <FileText size={14} />
              Free Resources
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-3">Candidate Resources</h2>
            <p className="text-secondary-600">Resume templates, interview tips and salary insights — all free.</p>
          </div>
          <Link to="/resources" className="btn btn-secondary gap-2">
            View All Resources <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <article 
              key={resource.title}
              className="group bg-secondary-50 p-8 rounded-3xl border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                resource.color === 'accent' 
                  ? 'bg-accent-100 text-accent-600'
                  : resource.color === 'primary'
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-secondary-200 text-secondary-600'
              }`}>
                <resource.icon size={26} />
              </div>
              <p className={`text-sm font-semibold mb-2 ${
                resource.color === 'accent' ? 'text-accent-600' :
                resource.color === 'primary' ? 'text-primary-600' :
                'text-secondary-600'
              }`}>{resource.category}</p>
              <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{resource.title}</h3>
              <p className="text-secondary-600 mb-6">{resource.description}</p>
              <button className={`inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                resource.color === 'accent' ? 'text-accent-600' :
                resource.color === 'primary' ? 'text-primary-600' :
                'text-secondary-600'
              }`}>
                {resource.cta} <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-24 lg:py-32 mesh-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-white mb-6">
            Ready to find your next opportunity?
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of candidates finding better roles with verified Australian employers.
          </p>
          <button className="btn bg-white text-primary-700 hover:bg-white/90 px-10 py-4 text-lg shadow-xl">
            Create Free Profile
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  </>
)

export default JobSeekersPage