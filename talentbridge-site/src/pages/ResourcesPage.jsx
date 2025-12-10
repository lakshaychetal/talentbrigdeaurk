import { FileText, ArrowRight, Search, BookOpen, TrendingUp, Users, Shield, Clock, Sparkles, Download, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { resourceFilters, resourceArticles } from '../data/content'

const featuredResources = [
  {
    type: 'Guide',
    title: 'Complete Compliance Checklist for Healthcare Hiring',
    description: 'Everything you need to know about AHPRA, WWC, police checks, and NDIS worker screening requirements.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    readTime: '12 min read',
    category: 'Healthcare'
  },
  {
    type: 'Report',
    title: '2024 Australian Salary Guide: Healthcare, Hospitality & Property',
    description: 'Comprehensive salary data across all states with penalty rates and industry benchmarks.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read',
    category: 'Salary'
  },
]

const allResources = [
  { title: 'How to write a high-converting RN job description', category: 'Healthcare', type: 'Guide', icon: FileText },
  { title: 'Reducing no-shows in hospitality recruitment', category: 'Hospitality', type: 'Guide', icon: Users },
  { title: 'State-by-state salary comparison 2024', category: 'Salary', type: 'Report', icon: TrendingUp },
  { title: 'RSA/RSG compliance requirements explained', category: 'Hospitality', type: 'Checklist', icon: Shield },
  { title: 'Interview templates for aged care roles', category: 'Healthcare', type: 'Template', icon: FileText },
  { title: 'Real estate licence requirements by state', category: 'Real Estate', type: 'Guide', icon: BookOpen },
]

const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['All', ...resourceFilters]

  return (
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
            <BookOpen size={14} className="text-accent-400" />
            Knowledge Hub
          </div>
          
          <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
            Resources for{' '}
            <span className="text-accent-500">
              smarter hiring
            </span>
          </h1>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Guides, templates, salary insights and compliance checklists to power your recruitment strategy.
          </p>
          
          {/* Search Box */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50" size={22} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all text-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white -mt-16 relative z-10">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-accent-500" size={20} />
            <h2 className="text-lg font-bold text-secondary-900">Featured Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredResources.map((resource) => (
              <article 
                key={resource.title}
                className="group relative bg-secondary-50 rounded-3xl overflow-hidden border border-secondary-100 hover:border-primary-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5">
                  {/* Image */}
                  <div className="md:col-span-2 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wide">
                        {resource.type}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary-200 text-secondary-600 text-xs font-bold uppercase tracking-wide">
                        {resource.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                      {resource.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-6 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-secondary-500 text-sm">
                        <Clock size={14} />
                        {resource.readTime}
                      </div>
                      <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                        Read now <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeFilter === filter 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25' 
                    : 'bg-white text-secondary-600 border border-secondary-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.map((resource, index) => (
              <article 
                key={resource.title}
                className="group bg-white rounded-2xl p-6 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-secondary-100 text-secondary-600 text-xs font-bold uppercase tracking-wide">
                      {resource.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <resource.icon size={18} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors flex-grow">
                  {resource.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  <span className="text-sm text-secondary-500 font-medium">{resource.type}</span>
                  <a href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Access <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn btn-secondary">
              Load More Resources
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                  <Download size={14} />
                  Free Download
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                  2024 Complete Hiring Toolkit
                </h2>
                <p className="text-lg text-primary-100 mb-8">
                  Get all our templates, checklists, and guides in one comprehensive package. Perfect for HR teams and hiring managers.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Job description templates', 'Interview scorecards', 'Compliance checklists', 'Salary benchmarks'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
                  <Download size={20} className="mr-2" />
                  Download Free Toolkit
                </button>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                          <FileText size={24} />
                        </div>
                        <div className="flex-grow">
                          <div className="h-3 bg-secondary-200 rounded-full w-3/4 mb-2"></div>
                          <div className="h-2 bg-secondary-100 rounded-full w-1/2"></div>
                        </div>
                        <Download size={18} className="text-primary-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 lg:py-32 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-white mb-6">
              Stay ahead of hiring trends
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Get weekly insights, new resources, and salary data delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
              <button className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResourcesPage