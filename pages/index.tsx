import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

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
          width={400}
          height={400}
        />
        <div className={styles.card__profile}>
          <div className={styles.card__profile__name}>
            <h1>Erika Yoshikawa</h1>
            <p>Front-end developer</p>
          </div>
          <div>
            {/* TODO: 修正予定 */}
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications. Donec aliquam est dui, vel vestibulum
            diam sollicitudin id. Quisque feugiat malesuada molestie.
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        created by username - devChallenges.io
      </footer>
    </div>
  )
}

export default Home
