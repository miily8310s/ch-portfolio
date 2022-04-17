import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const skills = [
  {
    name: 'JavaScript',
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
            Web歴約一年半のWebエンジニア。ヌオーの人。メインはフロントエンド屋だが、バックエンドも機会があれば経験を積みたい。
          </div>
        </div>
      </div>
      {/* 2段目のカード（ブログ/スキル） */}
      <div className={styles.card__skills}>
        <>
          <div className={styles.card__skillHead}>Front end</div>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.card__skill}>
              <div>{skill.name}</div>
              {/* スキルグラフ */}
              <div></div>
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
