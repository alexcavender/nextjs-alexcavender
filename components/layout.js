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
        content="WordPress Web Design, React, Vue , PHP and NextJS. Vermont Web Developer"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V7YRMMYX6D"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-V7YRMMYX6D');
      </script>
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
      <div className={utilStyles.footerItem}>
        <h4>Services</h4>
        <ul>
          <li>UI/UX Design</li>
          <li>Web Development</li>
        </ul>
        
        
      </div>
        <div className={utilStyles.footerItem}>
          <h4>Social</h4>
          <ul>
            <li>
              <a href="https://github.com/alexcavender" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alex-cavender/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className={utilStyles.footerItem}>
          <h4>About</h4>
          <p>Web developer focused on JavaScript, WordPress, Vue, React.js</p>
        </div>
      </div>
    </footer>
    <div className={utilStyles.attribution}>
      &copy; {new Date().getFullYear()}
      {'. '}
      Built with React (Next.js) and hosted on Vercel
    </div>
    </div>
}