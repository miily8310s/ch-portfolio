import { useState, useCallback } from 'react'

const allPortfolios = [
  {
    name: 'Portfolio',
    tags: ['TypeScript', 'Next.js'],
    detail: 'devChallenges - Responsive Web 編・課題その7。本ページです。',
  },
  {
    name: 'Edie homepage',
    tags: ['HTML', 'CSS'],
    detail: 'devChallenges - Responsive Web 編・課題その7。本ページです。',
  },
  {
    name: 'Checkout Page',
    tags: ['HTML', 'CSS'],
    detail: 'devChallenges - Responsive Web 編・課題その7。本ページです。',
  },
  {
    name: 'My Gallery',
    tags: ['HTML', 'CSS'],
    detail: 'devChallenges - Responsive Web 編・課題その7。本ページです。',
  },
]

export const technologies = allPortfolios.reduce<string[]>((pre, cur) => {
  cur.tags.forEach((tag) => {
    if (pre.includes(tag)) {
      return
    }
    pre.push(tag)
  })
  return pre
}, [])

export const usePortfolios = (): [
  typeof allPortfolios,
  (S: string) => void,
] => {
  const [portfolios, setPortfolios] = useState(allPortfolios)
  const toggleFilter = useCallback((technology: string) => {
    setPortfolios(
      allPortfolios.filter((portfolio) => portfolio.tags.includes(technology)),
    )
  }, [])
  return [portfolios, toggleFilter]
}
