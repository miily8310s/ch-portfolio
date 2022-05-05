import { useState, useCallback, useEffect } from 'react'

const allPortfolios = [
  {
    name: 'Portfolio',
    tags: ['TypeScript', 'Next.js'],
    detail: 'devChallenges - Responsive Web 編・課題その7。本ページです。',
    code: 'https://github.com/miily8310s/nuxt-movie-app',
    demo: 'https://xenodochial-bohr-f31e51.netlify.app/',
  },
  {
    name: 'marvel-by-year-nextjs',
    tags: ['Next.js', 'React', 'TypeScript'],
    detail: 'marvel公式APIを使って作成。',
    code: 'https://github.com/miily8310s/marvel-by-year-nextjs',
    demo: 'http://marvel-by-year-nextjs.vercel.app/',
  },
  {
    name: 'nuxt-movie-app',
    tags: ['Nuxt.js', 'Vue.js', 'TypeScript'],
    detail: 'moviedbのAPIで作った世界の映画やTVシリーズが見れるアプリ。',
    code: 'https://github.com/miily8310s/nuxt-movie-app',
    demo: 'https://xenodochial-bohr-f31e51.netlify.app/',
  },
  {
    name: 'Svelte painter',
    tags: ['Svelte', 'TypeScript'],
    detail: 'お絵かきアプリ。一応npmライブラリ化している。',
    code: 'https://github.com/miily8310s/svelte-painter',
    demo: 'https://svelte-painter.vercel.app/',
  },
  {
    name: 'Tell your days',
    tags: ['Svelte', 'TypeScript'],
    detail: '月と曜日を指定すると出社した日を教えてくれるページ。',
    code: 'https://github.com/miily8310s/tell-you-days',
    demo: 'https://gifted-mcnulty-0ea9b2.netlify.app/',
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
