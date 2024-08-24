import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("zxarojqm");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const name = 'Alex Cavender'
export const siteTitle = 'Alex Cavender | Vermont Web Developer'

export default function Layout({ children, home }) {
  return <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Laravel Development, React, Vue, PHP. Vermont Web Developer."
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V7YRMMYX6D"></script>
      <script dangerouslySetInnerHTML ={
        { __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-V7YRMMYX6D');
        `}
      }>
      </script>
      <script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
      <script dangerouslySetInnerHTML={{ __html: `/* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/alexcavender@gmail.com",
    title: "How can I help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });` }} />

    </Head>

    <header className={styles.header}>
      
    </header>

    <main>{children}</main>

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
          <h4>About Me</h4>
          <p>Developer with an interest in Software Security, Laravel, Vue.js. I've been working with the Web since the early days of the web. My hobbies include music production, snowboarding and coffee</p>
        </div>
      </div>
    </footer>
    <div className={utilStyles.attribution}>
     Copyright &copy; {new Date().getFullYear()}
      {'. '}
      All Rights Reserved.
    </div>
    </div>
}
