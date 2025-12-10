import { useEffect } from 'react'

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-AU', {
    maximumFractionDigits: 0,
  }).format(num)
}

const parseTargetValue = (text = '') => {
  const numericMatch = text.match(/[\d.,]+/)
  if (!numericMatch) {
    return null
  }

  const digits = numericMatch[0].replace(/,/g, '')
  return Number.isFinite(Number(digits)) ? Number(digits) : null
}

const animateStat = (node, duration = 1200) => {
  if (!node || node.dataset.statAnimated === 'true') return

  const targetText = node.dataset.statTarget?.trim() ?? ''
  const prefixMatch = targetText.match(/^[^\d]+/)?.[0] ?? ''
  const suffix = targetText.replace(/[\d,\.\s]/g, '')
  const targetValue = parseTargetValue(targetText)

  if (targetValue === null) {
    node.textContent = prefixMatch + targetText + suffix
    node.dataset.statAnimated = 'true'
    return
  }

  let startTimestamp = null

  const tick = (now) => {
    if (!startTimestamp) startTimestamp = now
    const progress = Math.min((now - startTimestamp) / duration, 1)
    const current = Math.round(targetValue * progress)
    node.textContent = `${prefixMatch}${formatNumber(current)}${suffix}`
    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      node.textContent = `${prefixMatch}${formatNumber(targetValue)}${suffix}`
      node.dataset.statAnimated = 'true'
    }
  }

  requestAnimationFrame(tick)
}

const useScrollInteractions = (trigger = '') => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = Array.from(document.querySelectorAll('section')).filter(
      (section) => !section.hasAttribute('data-no-reveal'),
    )
    sections.forEach((section) => {
      if (!section.hasAttribute('data-reveal')) {
        section.setAttribute('data-reveal', 'true')
      }
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )

    sections.forEach((section) => revealObserver.observe(section))

    const statNodes = Array.from(document.querySelectorAll('[data-stat-target]'))
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStat(entry.target, Number(entry.target.dataset.statDuration) || 1200)
            statObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -15% 0px' }
    )

    statNodes.forEach((node) => {
      node.textContent = '0'
      statObserver.observe(node)
    })

    return () => {
      revealObserver.disconnect()
      statObserver.disconnect()
    }
  }, [trigger])
}

export default useScrollInteractions