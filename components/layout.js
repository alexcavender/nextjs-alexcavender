import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'Alex Cavender'
export const siteTitle = 'Alex Cavender | Vermont Web Developer'

export default function Layout({ children, home }) {
  return <div>
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
    <footer className={utilStyles.footer}>
      <div className={utilStyles.container}>
        &copy; {new Date().getFullYear()}

        <a href="" target="_blank" rel="noopener noreferrer">
          Github
        </a>
       
        <a href="" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <p>Built with React (Next.js) and hosted on Vercel</p>
      </div>
     
    </footer>
    </div>
}