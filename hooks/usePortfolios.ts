import { useState, useCallback, useEffect } from 'react'

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
  {
    name: 'Tell your days',
    tags: ['Svelte', 'TypeScript'],
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

const filteredPortfolios = (filter: string) => {
  if (filter === '') {
    return allPortfolios
  }
  return allPortfolios.filter((portfolio) => portfolio.tags.includes(filter))
}

export const usePortfolios = (): [
  string,
  typeof allPortfolios,
  (S: string) => void,
] => {
  const [portfolios, setPortfolios] = useState(allPortfolios)
  const [filter, setFilter] = useState('')
  useEffect(() => {
    setPortfolios(filteredPortfolios(filter))
  }, [filter])
  const toggleFilter = useCallback(
    (technology: string) => {
      setFilter(technology === filter ? '' : technology)
    },
    [filter],
  )
  return [filter, portfolios, toggleFilter]
}
