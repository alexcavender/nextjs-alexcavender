import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image 
        priority
        src="/images/alex.jpg"
        className={utilStyles.borderCircle}
        width={160}
        height={160}
        
        />
        <h2>Hi, I'm Alex.</h2>
        <p>I'm a Web Developer based in Vermont.</p>
        <p>I specialize in JavaScript, WordPress and Responsive Web Design.</p>
      </section>

      <section>
        <h2>Recent Projects</h2>

        <h3>React Project #3: React front-end for WooCommerce</h3>
        <p>
          A fast and simple Frontend for WooCommerce built with React, React Router, WooCommerce and WordPress REST API.
          This project gave me an opportunity to again use React Hooks and work with React Router for the first time.
        </p>
        <a href="https://ices0.csb.app/"  target="_blank" rel="noopener noreferrer">
          <Image
            className="project-image"
            src="/images/reactproject-3.png"
            height={938} 
            width={1899}
            alt="React Js Project 3"
          />
        </a>

      </section>
    </Layout>
  )
}
