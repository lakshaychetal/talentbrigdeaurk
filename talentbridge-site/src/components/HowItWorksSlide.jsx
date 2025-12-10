import { CheckCircle, ArrowRight } from 'lucide-react'

const HowItWorksSlide = ({ stepNumber, content }) => {
  const gridColumnClass = content.showImage ? 'lg:grid-cols-[5fr,7fr]' : 'lg:grid-cols-1'

  return (
    <div className="h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
      <div className={`grid ${gridColumnClass} gap-0 h-full`}>
        {content.showImage && content.bgImage && (
          <div className="relative overflow-hidden h-48 lg:h-auto">
            <img
              src={content.bgImage}
              alt={content.title}
              className="w-full h-full object-cover"
              style={{ filter: 'contrast(1.05) brightness(0.85) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800/80 via-primary-800/50 to-transparent"></div>
          </div>
        )}

        <div className="p-6 lg:p-8 flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-accent-400 font-bold">Step {stepNumber + 1}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">{content.title}</h3>
              <p className="text-sm text-white/60">{content.subtitle}</p>
            </div>
            <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-accent-500/30">
              {stepNumber + 1}
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-white/70 leading-relaxed">{content.summary}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {content.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-white/40 uppercase tracking-wide text-[0.6rem] mb-0.5">{stat.label}</p>
                <p className="text-white font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {content.highlights.map((highlight, idx) => (
              <li key={`${highlight}-${idx}`} className="flex gap-2 items-start text-sm text-white/70">
                <CheckCircle className="h-4 w-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="pt-2 mt-auto">
            <button className="w-full lg:w-auto bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-600 hover:to-accent-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2">
              {content.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSlide
