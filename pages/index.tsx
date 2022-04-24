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
    title: 'フロントエンドエンジニアがNest.js の基本構造を理解する',
    link: 'https://qiita.com/miruon/items/099d7f0de831ad1b37b9',
    site: 'Qiita',
    date: '2022/03/08',
  },
  {
    title:
      'IEサポートも終わるので、npmパッケージのDependabot Alertsを解消しつつアプリの動きに支障なくアップデートさせる',
    link: 'https://qiita.com/miruon/items/a164c145f1927e14e82f',
    site: 'Qiita',
    date: '2022/03/02',
  },
  {
    title: 'Viteでvanilla-tsアプリを作成する',
    link: 'https://qiita.com/miruon/items/58b9cc4dbabc3f945ede',
    site: 'Qiita',
    date: '2022/03/01',
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

const hobbies = [
  {
    name: '音楽鑑賞',
    imageLink:
      'https://4.bp.blogspot.com/-M8JGbV5r3xU/V_4burCMwCI/AAAAAAAA-vA/3ev8Fs6F3Agwteeo9zvRqnZr4z5VeagiACLcB/s800/music_noise_canceling.png',
    detail:
      '基本的に洋楽を聞いています。邦楽はほとんど聞きません。何でも聞きますが、00s~のエモやハードロックが特に好物です。',
  },
  {
    name: '映画鑑賞',
    imageLink:
      'https://3.bp.blogspot.com/-CvrWdSNVPWg/XDXcSnPUyHI/AAAAAAABRIw/zAZW8ODkYk0a1kvNn9gZE_qhsVTy6O1UACLcBGAs/s800/kandou_movie_eigakan.png',
    detail:
      '洋画ばかり見ています。月1回は映画館に足を運んでいる気がします。ジャンルはフリーなので話題作には大体飛びつく。',
  },
  {
    name: '散歩',
    imageLink:
      'https://1.bp.blogspot.com/-59_nvImHVnM/XkZdUFSPVeI/AAAAAAABXWQ/Vbu2acjd6dwZjOoQIhRGeYjKPY2EtUCewCNcBGAsYHQ/s1600/yagai_kyoushitsu_casual_walk.png',
    detail:
      'よく食べるのと筋トレしないので歩くようにしています。同じ場所に何回か通るうちにまだ見ぬスポットがあったことに気づくのが密かな楽しみです。',
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
              ハイパーインドア派です。最近はロック好きが高じてドラム習いに行こうと思ってたりします。
            </div>
            <div className={styles.card__hobbies}>
              {hobbies.map((hobby) => (
                <div key={hobby.name} className={styles.card__hobby}>
                  <Image
                    src={hobby.imageLink}
                    alt="profile-image"
                    width={250}
                    height={240}
                  />
                  <div>{hobby.detail}</div>
                </div>
              ))}
            </div>
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
