import { Users, Award, Target, Shield, Heart, Sparkles, ArrowRight, Linkedin, Twitter, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teamMembers, values } from '../data/content'

const stats = [
  { value: '500+', label: 'Employers Trust Us' },
  { value: '1,200+', label: 'Candidates Placed' },
  { value: '98%', label: 'Compliance Rate' },
  { value: '21 days', label: 'Average Time to Hire' },
]

const valueIcons = [Shield, Heart, Target, Award]

const milestones = [
  { year: '2021', title: 'Founded', description: 'TalentBridge AU launched in Melbourne' },
  { year: '2022', title: 'Expansion', description: 'Extended to Sydney and Brisbane' },
  { year: '2023', title: 'Growth', description: 'Reached 500+ employer partnerships' },
  { year: '2024', title: 'Innovation', description: 'Launched AI-powered matching' },
]

const AboutPage = () => (
  <>
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 mesh-gradient overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
          <Heart size={14} className="text-accent-400" />
          Our Story
        </div>
        
        <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
          Local expertise.{' '}
          <span className="text-accent-500">
            Verification-first experiences.
          </span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          We partner with employers and job seekers to streamline compliance, highlight verified credentials, and celebrate Australia's frontline industries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn btn-accent text-lg px-8 py-4">
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link to="/employers" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4">
            View Open Roles
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-secondary-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge badge-primary mb-4">
              <Target size={14} />
              Our Mission
            </div>
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-secondary-900 mb-6">
              Transforming how Australia hires
            </h2>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              We believe the right hire can transform a business. That's why we've built a platform that puts compliance, quality, and speed at the forefront of every recruitment process.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              From aged-care facilities to bustling hotels and growing property agencies, we understand the unique challenges of Australia's frontline industries — and we're here to solve them.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
                alt="Professional" 
                className="rounded-2xl shadow-xl h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-4">
            <Sparkles size={14} />
            What Drives Us
          </div>
          <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-secondary-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-secondary-600">
            The principles that guide every decision we make
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = valueIcons[index] || Shield
            return (
              <div 
                key={value} 
                className="group relative bg-secondary-50 rounded-3xl p-8 lg:p-10 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={26} />
                  </div>
                  
                  <p className="text-lg text-secondary-800 leading-relaxed font-medium">{value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent mb-4">
            <Zap size={14} />
            Our Journey
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
            Growing with Australia
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-accent-500 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-bold text-primary-600">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-secondary-900 mt-1">{milestone.title}</h3>
                    <p className="text-secondary-600 mt-2">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-4">
            <Users size={14} />
            Leadership
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-6">
            Meet the Founders
          </h2>
          <p className="text-lg text-secondary-600">
            The team behind TalentBridge AU
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <article 
              key={member.name} 
              className="group bg-secondary-50 rounded-3xl overflow-hidden border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-primary-500/25">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-secondary-600 leading-relaxed text-lg mb-6">
                  {member.copy}
                </p>
                
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-secondary-200 flex items-center justify-center text-secondary-400 hover:text-primary-600 hover:border-primary-200 transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-white border border-secondary-200 flex items-center justify-center text-secondary-400 hover:text-primary-600 hover:border-primary-200 transition-all">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </article>
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
            Join us in transforming Australian recruitment
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Whether you're hiring or looking for your next opportunity, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/employers" className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
              For Employers
            </Link>
            <Link to="/job-seekers" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg">
              For Job Seekers
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default AboutPage