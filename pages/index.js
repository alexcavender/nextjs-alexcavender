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
        <h2>Hi, I'm Alex.</h2>
        <p>I'm a Web Developer based in Vermont.</p>
        <p>I specialize in JavaScript, WordPress and Responsive Web Design.</p>
      </section>

      <section>
        <h2>Recent Projects</h2>
        <Image
          className="project-image"
          src="/images/reactproject-3.png" // Route of the image file
          height={938} // Desired size with correct aspect ratio
          width={1899} // Desired size with correct aspect ratio
          alt="React Js Project 3"
        />

      </section>
    </Layout>
  )
}
