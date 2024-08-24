import Head from 'next/head'
import Link from 'next/link'
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
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <section className={utilStyles.container}>
        <div className={utilStyles.headerGrid}>
          <div>
			<div className={utilStyles.profilePic}>
            <Image 
            priority
            src="/images/alex.jpg"
            className={utilStyles.borderCircle}
            width={100}
            height={100}
            />
          </div>
            <h1 className={utilStyles.headingLg}>Developer, creator and founder.</h1>
            <p className="mb-4">Hi, I'm Alex. I'm a Developer and entreprenur based in Vermont. I specialize in PHP (I like <a href="https://laravel.com" target="_blank">Laravel</a>), and JavaScript (Next.js, React/Preact, Vue).</p>
			<div className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Available for hire</div>
          </div>
          
        </div>
      </section>
      <section className={utilStyles.recentProjects}>
        <div className={utilStyles.container}>
          <h2 className="font-bold text-2xl lg:text-3xl">Selected Projects</h2>
          
          <Project 
            name="BeatStore UI Theme"
            description="Single Page App style theme that integrates with WordPress + Easy Digital Downloads. Hybrid Vue + WordPress Theme. Design by Scott Preavy."
            link="https://acavbeats.com/"
            imgSrc="/images/ui-theme.png"
            imgWidth="748"
            imgHeight="828"
            imgSide="left"
          />

          <Project 
            name="Gentle Path"
            description="Responsive WordPress build For Astute, using combination of ACF + Gutenberg Blocks."
            link="https://gentlepathmeadows.com/"
            imgSrc="/images/gentlepath.PNG"
            imgWidth="1902" 
            imgHeight="967"
            imgSide="right"
          />

          <Project
            name="Get Lost Game"
            description="Get Lost is a geographic discovery game that uses randomized Streetside maps. Built with Laravel, Laravel Cashier, Tailwind and Plain JavaScript."
            imgSrc="/images/getlostgame.png"
            imgSide="left"
            imgWidth="748"
            imgHeight="432"
          />
        </div>
      </section>
      
      {/* <section>
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
      </section> */}
      <section className={utilStyles.brandsWorkedWith}>
        <div className={utilStyles.container}>
          <h2 className="font-bold text-3xl">
            Brands I've worked with
          </h2>
          <ul className="text-lg leading-normal">
            <li>Astute</li>
            <li>Codeable</li>
            <li>CannaPlanners</li>
            <li>HumanMade</li>
            <li>VT Digger</li>
          </ul>
        </div>
      </section>
      
      {/* <Link as="/blog/1" href="/blog/[id]">
        <a>First Post</a>
      </Link> */}
      
    </Layout>
  )
}
