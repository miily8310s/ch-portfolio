import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
