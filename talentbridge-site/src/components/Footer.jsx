import { Facebook, Instagram, Linkedin, Twitter, Sparkles, ArrowUpRight, Mail } from 'lucide-react'

const footerColumns = [
  { title: 'Product', links: ['Job board', 'Job builder', 'Compliance', 'API Access'] },
  { title: 'Employers', links: ['Pricing', 'Hiring guides', 'Partner stories', 'Enterprise'] },
  { title: 'Job Seekers', links: ['Create profile', 'Resources', 'Verified badges', 'Career tips'] },
  { title: 'Company', links: ['About us', 'Blog', 'Careers', 'Press'] },
]

const Footer = () => (
  <footer className="relative bg-secondary-950 text-white overflow-hidden">
    {/* Decorative gradient orbs */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
    
    {/* Newsletter Section */}
    <div className="relative border-b border-white/10">
      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-2">Stay ahead of hiring trends</h3>
            <p className="text-secondary-400">Get weekly insights, templates, and salary data delivered to your inbox.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <div className="relative flex-1 lg:w-80">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-500" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-secondary-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              />
            </div>
            <button className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </div>

    <div className="relative container-custom pt-16 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-xl font-heading font-bold">
              TalentBridge<span className="text-primary-400">AU</span>
            </span>
          </div>
          <p className="text-secondary-400 mb-8 max-w-sm leading-relaxed">
            Australia's specialist recruitment platform for healthcare, hospitality, and real estate. Connecting verified talent with employers who can't afford the wrong hire.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a 
                key={i}
                href={href} 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">{column.title}</h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-secondary-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary-500 text-sm">
          © {new Date().getFullYear()} TalentBridge AU. All rights reserved. ABN 12 345 678 901
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
