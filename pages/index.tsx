import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const skills = [
  {
    name: 'HTML',
    levelPercentage: 0.8,
    experienced: true,
  },
  {
    name: 'CSS',
    levelPercentage: 0.8,
    experienced: true,
  },
  {
    name: 'SCSS',
    levelPercentage: 0.6,
    experienced: true,
  },
  {
    name: 'JavaScript(ES6)',
    levelPercentage: 0.8,
    experienced: true,
  },
  {
    name: 'TypeScript',
    levelPercentage: 0.6,
    experienced: true,
  },
  {
    name: 'Vue',
    levelPercentage: 0.7,
    experienced: true,
  },
  {
    name: 'Nuxt.js',
    levelPercentage: 0.6,
    experienced: true,
  },
  {
    name: 'React',
    levelPercentage: 0.7,
    experienced: false,
  },
  {
    name: 'Next.js',
    levelPercentage: 0.7,
    experienced: false,
  },
]

const blogs = [
  {
    title: 'hogehoge',
    link: 'https://...',
    site: 'Zenn',
    date: '2022/01/01',
  },
  {
    title: 'hogehoge',
    link: 'https://...',
    site: 'Zenn',
    date: '2022/01/01',
  },
  {
    title: 'もう怖くないTypeScriptのDecorator機能',
    link: 'https://zenn.dev/miruoon_892/articles/365675fa5343ed',
    site: 'Zenn',
    date: '2022/02/24',
  },
  {
    title: 'Next.js 12でJestの設定がかなり楽になった',
    link: 'https://zenn.dev/miruoon_892/articles/e42e64fbb55137',
    site: 'Zenn',
    date: '2022/02/19',
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className={styles.card}>
        <Image
          src="https://avatars.githubusercontent.com/u/42486288?s=400&u=567eea2c478e5baed1af37987097a8facd5ee0ca&v=4"
          alt="profile-image"
          width={300}
          height={300}
        />
        <div className={styles.card__profile}>
          <div className={styles.card__profile__name}>
            <h1>Erika Yoshikawa</h1>
            <p>Web developer</p>
          </div>
          <div>
            Web歴約一年半のWebエンジニア。ヌオーの人。メインはフロントエンド屋だが、将来はフルスタック志望なのでバックエンドも機会があれば経験を積みたく勉強中。
          </div>
        </div>
      </div>
      {/* 2段目のカード（趣味/スキル） */}
      <div className={styles.flexSecond}>
        <div className={styles.card__skills}>
          <>
            <div className={styles.card__skillHead}>
              Front end Skills{' '}
              <span className={styles.card__skillHeadSupplement}>
                (*): 業務経験あり。
              </span>
            </div>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.card__skill}>
                <div className={styles.card__skillName}>
                  {skill.experienced && (
                    <span className={styles.card__skillExperienced}>*</span>
                  )}
                  {skill.name}
                </div>
                {/* スキルグラフ */}
                <div className={styles.card__skillGraph}>
                  <span
                    className={styles.card__skillGraphBack}
                    style={{ width: `${skill.levelPercentage * 12}rem` }}
                  ></span>
                </div>
              </div>
            ))}
          </>
        </div>
        {/* 趣味欄 */}
        {/* TODO: クラス名を修正 */}
        <div className={styles.card__skills}>
          <>
            <div className={styles.card__skillHead}>趣味</div>
            <div>
              ハイパーインドア派です。最近はドラム習いに行こうと思ってたりします。
            </div>
            {blogs.map((blog) => (
              <div key={blog.title} className={styles.card__skill}>
                <div className={styles.card__skillName}>{blog.date}</div>
                <a href={blog.link} target="_blank" rel="noreferrer">
                  {blog.title}
                </a>
                <div>{blog.site}</div>
              </div>
            ))}
          </>
        </div>
      </div>
      {/* ブログ */}
      <div className={styles.card__skills}>
        <>
          <div className={styles.card__skillHead}>ブログ執筆歴</div>
          <div>主にZennで執筆しています。時々会社絡みでQiitaでも。</div>
          {blogs.map((blog) => (
            <div key={blog.title} className={styles.card__skill}>
              <div className={styles.card__skillName}>{blog.date}</div>
              <a href={blog.link} target="_blank" rel="noreferrer">
                {blog.title}
              </a>
              <div>{blog.site}</div>
            </div>
          ))}
        </>
      </div>

      <footer className={styles.footer}>
        created by username - devChallenges.io
      </footer>
    </div>
  )
}

export default Home
