import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = ({ slides, autoplay = true, interval = 4200, showDots = true, showArrows = true, onSlideChange, activeIndex, setActiveIndex }) => {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(autoplay)
  const timerRef = useRef(null)

  // Sync external activeIndex
  useEffect(() => {
    if (activeIndex !== undefined) {
      setCurrent(activeIndex)
    }
  }, [activeIndex])

  // Notify parent of changes
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(current)
    }
    if (setActiveIndex) {
      setActiveIndex(current)
    }
  }, [current, onSlideChange, setActiveIndex])

  const slideCount = slides.length

  const goToSlide = (index, disableAutoplay = true) => {
    setCurrent((index + slideCount) % slideCount)
    if (disableAutoplay && autoplay) {
      setIsAutoplay(false)
    }
  }

  const nextSlide = () => goToSlide(current + 1)
  const prevSlide = () => goToSlide(current - 1)

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplay) return

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount)
    }, interval)

    return () => clearInterval(timerRef.current)
  }, [isAutoplay, slideCount, interval])

  const handleMouseEnter = () => {
    if (autoplay) {
      setIsAutoplay(false)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (autoplay) {
      setIsAutoplay(true)
    }
  }

  // Touch support
  const touchStartRef = useRef(0)
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStartRef.current - touchEnd

    if (diff > 40) nextSlide()
    else if (diff < -40) prevSlide()
  }

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [current, slideCount])

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hiring flow carousel"
    >
      {/* Slides Container */}
      <div className="overflow-hidden rounded-2xl lg:rounded-3xl h-auto min-h-[420px] lg:min-h-[460px]">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      {showArrows && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/10 backdrop-blur-sm p-3 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent-500 border border-white/20"
          aria-label="Previous slide"
          title="Previous"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {showArrows && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/10 backdrop-blur-sm p-3 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent-500 border border-white/20"
          aria-label="Next slide"
          title="Next"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      )}

      {/* Dot Indicators */}
      {showDots && (
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 bg-accent-500 shadow-lg shadow-accent-500/30'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              role="tab"
              aria-selected={index === current}
              aria-label={`Go to slide ${index + 1}`}
              tabIndex={index === current ? 0 : -1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
