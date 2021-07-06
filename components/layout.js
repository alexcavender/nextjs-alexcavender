import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alex Cavender'
export const siteTitle = 'Alex Cavender | Vermont Web Developer'

export default function Layout({ children, home }) {
  return <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Vermont Web Developer"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <header className={styles.header}>
      {/* <h1>alexcavender.com</h1> */}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  
    </div>
}