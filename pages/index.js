import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
import Project from '../components/project'
import miniProject from '../components/miniProject'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;1,700&family=Montserrat&display=swap" rel="stylesheet" />
      </Head>
      <section className={utilStyles.container}>
        <div className={utilStyles.headerGrid}>
          <div>
            <h2 className={utilStyles.heading2XL}>Hi, I'm Alex.</h2>
            <h3 className={utilStyles.headingLg}>I'm a Web Developer based in Vermont.</h3>
            <p>I specialize in JavaScript (React & Vue), WordPress .</p>
            <a className={utilStyles.primaryBtn}
            href="mailto:alexcavender@gmail.com?Subject=Hello"
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
      <section className={utilStyles.recentProjects}>
        <div className={utilStyles.container}>
          <h2>Recent Projects</h2>
          <Project
            name="MMG"
            description="Design by Scott Preavy. MMG is a Black-led, non-binary-led global consultancy that centers on the principles of racial justice, LGBTQIA+ rights, transformative accountability, and gender equality in all that we do."
            link="https://alexcavender.com"
            imgSrc="/images/MMG.png"
            imgWidth="754"
            imgHeight="827"
            imgSide="left"
          />

          <Project 
            name="Sunset Lake CBD"
            description="Responsive WordPress + WooCommerce build For CannaPlanners. Design by Scott Preavy."
            link="https://sunsetlakecbd.com/"
            imgSrc="/images/sunsetlake.png"
            imgWidth="748" 
            imgHeight="832"
            imgSide="right"
          />

          <Project
            name="Sticky Brand"
            description="For CannaPlanners. Design by Scott Preavy."
            link="https://thestickybrand.com"
            imgSrc="/images/stickybrand.png"
            imgWidth="754"
            imgHeight="827"
            imgSide="left"
          />
          <Project 
            name="BeatStore UI Theme"
            description="Single Page App style theme that integrates with WordPress + Easy Digital Downloads. Hybrid Vue + WordPress Theme. Design by Scott Preavy."
            link="https://acavbeats.com/"
            imgSrc="/images/ui-theme.png"
            imgWidth="748"
            imgHeight="828"
            imgSide="right"
          />

     
        </div>
      </section>
      <section>
        <div className={utilStyles.container}>
          <h2>Mini Projects / Learning</h2>
             
         <miniProject 
            name="Learning React Project #3: React front-end for WooCommerce"
            description="A fast and straightforward Frontend for WooCommerce built with React, React Router, WooCommerce and WordPress REST API.
            This project gave me an opportunity to again use React Hooks and work with React Router for the first time."
            link="https://ices0.csb.app/"
            imgSrc="/images/reactproject-3.png"
            imgAlt="React Js Project 3"
            imgHeight="938"
            imgWidth="1899"
          />
          <miniProject 
            name="Learning React Project #2: Simple Music Player using React Hooks"
            description="Using React Hooks, I built a simple music player that uses a JSON Playlist + HTMLAudioElement."
            link="https://448l7.csb.app/"
            imgSrc="/images/reactproject-2.png"
            imgAlt="React Js Project 3"
            imgHeight="938"
            imgWidth="1899"
          />
        </div>
      </section>
      <section className={utilStyles.brandsWorkedWith}>
        <div className={utilStyles.container}>
          <h2>
            Brands I've worked with
          </h2>
          <ul>
            <li>Astute</li>
            <li>Codeable</li>
            <li>CannaPlanners</li>
            <li>HumanMade</li>
            <li>Readybase</li>
            <li>Scout Digital</li>
            <li>VT Digger</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
