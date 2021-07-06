import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
import Project from '../components/project'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,700&family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.headerGrid}>
          <div>
            <h2 className={utilStyles.heading2XL}>Hi, I'm Alex.</h2>
            <p className={utilStyles.headingLg}>I'm a Web Developer based in Vermont.</p>
            <p>I specialize in JavaScript, WordPress and Responsive Web Design.</p>
            <a className={utilStyles.primaryBtn}
            href=""
            >Contact Me</a>
          </div>
          <div className={utilStyles.profilePic}>
            <Image 
            priority
            src="/images/alex.jpg"
            className={utilStyles.borderCircle}
            width={220}
            height={220}
            />
          </div>
        </div>
      </section>
      <section>
        <h2>Recent Projects</h2>

        <Project 
        name="React Project #3: React front-end for WooCommerce"
        description="A fast and straightforward Frontend for WooCommerce built with React, React Router, WooCommerce and WordPress REST API.
        This project gave me an opportunity to again use React Hooks and work with React Router for the first time."
        link="https://ices0.csb.app/"
        imgSrc="/images/reactproject-3.png"
        imgAlt="React Js Project 3"
        />

      </section>
    </Layout>
  )
}
