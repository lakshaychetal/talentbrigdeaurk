import { Check, HelpCircle, Sparkles, Zap, Shield, ArrowRight, Star, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pricingPlans, pricingFeatures, pricingFaq } from '../data/content'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('per-role')
  const [openFaq, setOpenFaq] = useState(null)

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
            <Sparkles size={14} className="text-accent-400" />
            Transparent Pricing
          </div>
          
          <h1 className="text-[48px] lg:text-[56px] font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
            Pick a plan that fits your{' '}
            <span className="text-accent-500">
              hiring pace
            </span>
          </h1>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Pay-per-role for occasional hiring or subscribe for high-volume recruiting. No hidden fees, cancel anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm p-1.5 rounded-xl border border-white/20">
            <button 
              onClick={() => setBillingCycle('per-role')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                billingCycle === 'per-role' 
                  ? 'bg-white text-primary-700 shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Pay-per-role
            </button>
            <button 
              onClick={() => setBillingCycle('subscription')}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'subscription' 
                  ? 'bg-white text-primary-700 shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Subscription
              <span className="px-2 py-0.5 rounded-full bg-accent-500 text-white text-xs font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-50 to-transparent"></div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-secondary-50 -mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name} 
                className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  index === 1 
                    ? 'border-2 border-primary-500 ring-4 ring-primary-500/10' 
                    : 'border border-secondary-100 hover:border-primary-200'
                }`}
              >
                {/* Popular badge */}
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary-500/30 flex items-center gap-1.5">
                      <Star size={14} className="fill-white" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-secondary-900">
                      {billingCycle === 'subscription' && plan.price !== 'Custom' 
                        ? `$${Math.round(parseInt(plan.price.replace(/\D/g, '')) * 0.8)}` 
                        : plan.price.split(' ')[0]}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-secondary-500 font-medium">/role</span>
                    )}
                  </div>
                  {billingCycle === 'subscription' && plan.price !== 'Custom' && (
                    <p className="text-sm text-accent-600 font-medium mt-1">Save 20% with subscription</p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                        <Check className="text-primary-600" size={14} />
                      </div>
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  index === 1 
                    ? 'btn btn-primary' 
                    : 'btn btn-secondary'
                }`}>
                  {index === 2 ? 'Contact Sales' : `Choose ${plan.name}`}
                </button>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-12 border-t border-secondary-200">
            {[
              { icon: Shield, text: '30-day guarantee' },
              { icon: Zap, text: 'Instant activation' },
              { icon: Check, text: 'No hidden fees' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-secondary-600">
                <item.icon size={20} className="text-primary-600" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge badge-primary mb-4">
              <Sparkles size={14} />
              Full Comparison
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">Compare All Features</h2>
            <p className="text-lg text-secondary-600">See exactly what you get with each plan</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-secondary-100">
                  <th className="text-left py-5 px-6 text-secondary-500 font-medium">Features</th>
                  <th className="text-center py-5 px-6">
                    <span className="text-secondary-900 font-bold text-lg">Start</span>
                  </th>
                  <th className="text-center py-5 px-6 bg-primary-50 rounded-t-2xl">
                    <span className="text-primary-600 font-bold text-lg">Growth</span>
                    <span className="block text-xs text-primary-500 font-medium">Recommended</span>
                  </th>
                  <th className="text-center py-5 px-6">
                    <span className="text-secondary-900 font-bold text-lg">Scale</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-100">
                {pricingFeatures.map((feature, index) => (
                  <tr key={feature.label} className="hover:bg-secondary-50 transition-colors">
                    <td className="py-5 px-6 text-secondary-900 font-medium flex items-center gap-2">
                      {feature.label}
                      <HelpCircle size={14} className="text-secondary-400 cursor-help" />
                    </td>
                    <td className="text-center py-5 px-6 text-secondary-600">
                      {feature.plans[0] === '✔️' ? (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                            <Check className="text-primary-600" size={14} />
                          </div>
                        </div>
                      ) : feature.plans[0] === '—' ? (
                        <span className="text-secondary-300">—</span>
                      ) : (
                        <span>{feature.plans[0]}</span>
                      )}
                    </td>
                    <td className="text-center py-5 px-6 text-secondary-600 bg-primary-50">
                      {feature.plans[1] === '✔️' ? (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                            <Check className="text-white" size={14} />
                          </div>
                        </div>
                      ) : (
                        <span className="font-medium text-primary-700">{feature.plans[1]}</span>
                      )}
                    </td>
                    <td className="text-center py-5 px-6 text-secondary-600">
                      {feature.plans[2] === '✔️' ? (
                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                            <Check className="text-primary-600" size={14} />
                          </div>
                        </div>
                      ) : (
                        <span className="font-medium">{feature.plans[2]}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="badge badge-primary mb-4">
              <HelpCircle size={14} />
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="space-y-4">
            {pricingFaq.map((item, index) => (
              <div 
                key={item.question} 
                className="bg-white rounded-2xl border border-secondary-100 overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                >
                  <h3 className="text-lg font-bold text-secondary-900 pr-4">{item.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`flex-shrink-0 text-secondary-400 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-48' : 'max-h-0'
                }`}>
                  <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-secondary-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
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
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[36px] lg:text-[40px] font-heading font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Our team is here to help you find the perfect plan for your hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-xl">
                Talk to Sales
              </Link>
              <button className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 text-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingPage