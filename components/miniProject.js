import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Image from 'next/image'
import projectStyles from '../styles/project.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function miniProject({name, link, imgSrc, imgHeight, imgWidth, imgAlt, description}) {
  return (
    <div className="mini-project">

      <div className="projectContent">
        <h3 className={projectStyles.projectHeading}>
          {name}
        </h3>
        <p>{description}</p>
        { link && 
          <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={utilStyles.primaryBtn}
          >
          View Project
          </a>
        }
        
      </div>
      <div className="projectImage">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            layout="responsive"
            className=""
            src={imgSrc}
            height={imgHeight} 
            width={imgWidth}
            alt={imgAlt}
          />
        </a>
      </div>
    </div>
  )
}