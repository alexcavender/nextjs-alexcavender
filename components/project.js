import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Image from 'next/image'
import projectStyles from '../styles/project.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Project({name, link, imgSrc, imgHeight, imgWidth, imgAlt, imgSide, description}) {
  return (
    <div className="project">
      <style jsx>{`
      .project {
        display: flex;
        padding: 0 0 3rem 0;
        flex-direction: column-reverse;
      }

        @media(min-width: 800px) {
          .project {
            flex-direction: ${imgSide == 'left' ? 'row-reverse' : 'row'};
            padding: 4rem 0;
          }
        }

        .projectContent {
         
          width: 100%;
        }

        @media(min-width:800px) {
          .projectContent {
            margin: ${imgSide == 'left' ? '0 0 0 60px' : '0 60px 0 0'};
            width: 50%;
          }
        }
      `}</style>
      <div className="projectContent">
        <h3 className={projectStyles.projectHeading}>
          {name}
        </h3>
        <p>
        {description}
        </p>

        <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={utilStyles.primaryBtn}
        >
        View Project
        </a>

      </div>
      <div className={projectStyles.projectImage}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="project-image"
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