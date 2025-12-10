import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ArrowRight, Sparkles, Calendar, Users } from 'lucide-react'
import { contactDetails } from '../data/content'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Drop us a line anytime',
    value: contactDetails.email,
    action: 'Send email',
    href: `mailto:${contactDetails.email}`,
    color: 'primary'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm AEST',
    value: contactDetails.phone,
    action: 'Call now',
    href: `tel:${contactDetails.phone}`,
    color: 'accent'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    value: contactDetails.office,
    action: 'Get directions',
    href: '#',
    color: 'primary'
  },
]

const faqs = [
  { q: 'How quickly will I get a response?', a: 'We aim to respond to all enquiries within 1 business day.' },
  { q: 'Do you offer demos?', a: 'Yes! Book a 30-minute demo to see the platform in action.' },
  { q: 'What support is included?', a: 'All plans include email support. Growth and Scale plans include priority support.' },
]

const ContactPage = () => (
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
          <MessageCircle size={14} className="text-accent-400" />
          Get in Touch
        </div>
        
        <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
          Need a faster hire?{' '}
          <span className="text-accent-500">
            Let's talk.
          </span>
        </h1>
        
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Expect a reply within 1 business day. We're here to help you streamline your recruitment process.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-accent text-lg px-8 py-4">
            <Calendar size={20} className="mr-2" />
            Book a Demo
          </button>
          <a href={`mailto:${contactDetails.email}`} className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4">
            <Mail size={20} className="mr-2" />
            Send Email
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-50 to-transparent"></div>
    </section>

    {/* Contact Methods */}
    <section className="py-16 bg-secondary-50 -mt-16 relative z-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <div 
              key={method.title}
              className="group bg-white rounded-2xl p-8 border border-secondary-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                method.color === 'primary' 
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25' 
                  : 'bg-gradient-to-br from-accent-500 to-accent-400 shadow-lg shadow-accent-500/25'
              }`}>
                <method.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-secondary-900 mb-1">{method.title}</h3>
              <p className="text-secondary-500 text-sm mb-4">{method.description}</p>
              <p className="text-secondary-900 font-medium mb-6">{method.value}</p>
              
              <a 
                href={method.href}
                className={`inline-flex items-center gap-2 font-semibold ${
                  method.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                } group-hover:gap-3 transition-all`}
              >
                {method.action} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-secondary-100">
              <div className="badge badge-primary mb-4">
                <Sparkles size={14} />
                Contact Form
              </div>
              <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-2">Send us a message</h2>
              <p className="text-secondary-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 placeholder-secondary-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Organisation</label>
                    <input 
                      type="text" 
                      placeholder="Company name" 
                      className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 placeholder-secondary-400"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 placeholder-secondary-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">Phone (optional)</label>
                    <input 
                      type="tel" 
                      placeholder="+61 400 000 000" 
                      className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 placeholder-secondary-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Enquiry Type</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 bg-white">
                    <option value="">Select an option</option>
                    <option value="employer">I'm an employer looking to hire</option>
                    <option value="candidate">I'm looking for a job</option>
                    <option value="partnership">Partnership enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your hiring needs or how we can help..." 
                    className="w-full px-5 py-4 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-secondary-900 placeholder-secondary-400 resize-none"
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-full py-4 text-lg">
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Response time card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Clock className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Fast Response</h3>
              <p className="text-primary-100 mb-6">We respond to all enquiries within 1 business day. For urgent matters, call us directly.</p>
              <div className="flex items-center gap-3 text-primary-100">
                <Phone size={18} />
                <span className="font-semibold text-white">{contactDetails.phone}</span>
              </div>
            </div>

            {/* FAQ mini section */}
            <div className="bg-white rounded-3xl p-8 border border-secondary-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="pb-4 border-b border-secondary-100 last:border-0 last:pb-0">
                    <p className="font-semibold text-secondary-900 mb-1">{faq.q}</p>
                    <p className="text-sm text-secondary-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-secondary-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-secondary-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-secondary-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold text-secondary-900">Closed</span>
                </div>
              </div>
              <p className="text-sm text-secondary-500 mt-4">All times in AEST</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Map Section Placeholder */}
    <section className="h-96 bg-secondary-200 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={48} className="text-secondary-400 mx-auto mb-4" />
          <p className="text-secondary-600 font-medium">Interactive map coming soon</p>
          <p className="text-secondary-500 text-sm">{contactDetails.office}</p>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-24 lg:py-32 mesh-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                Ready to transform your hiring?
              </h2>
              <p className="text-lg text-white/70">
                Book a 30-minute demo and see how TalentBridge can streamline your recruitment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
                <Calendar size={20} className="mr-2" />
                Book a Demo
              </button>
              <button className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg">
                <Users size={20} className="mr-2" />
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ContactPage